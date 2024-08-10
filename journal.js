class Journal extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setup();
    }
    STATUS_LIST = [
        ["По всем", "common-type"],
        ["Действующие", "current"],
        ["Ликвидированные", "liquidated"]
    ];
    CHOSEN_STATUS = [
        false,
        false,
        false
    ]
    EDU_LIST = [
        ["5258024460", "Действующее", "НМК", "ГБПОУ НО НМК", 'Государственное бюджетное профессиональное образовательное учреждение Нижегородской области "Нижегородский медицинский колледж"',
            "г Нижний Новгород, ул Июльских Дней, д 8"],
        ["5209004535", "31 декабря 2013 г.", "МУ(Т)", 'ГБОУ СПО НО "ВМУ(Т)"', 'Государственное бюджетное образовательное учреждение среднего профессионального образования нижегородской области "Ветлужское медицинское училище (техникум)"',
            "Нижегородская область, г. Ветлуга, ул. Ленина, д.4"],
        ["5262034750", "Действующее", "НРТК", 'ГБПОУ "НРТК"', 'Государственное бюджетное профессиональное образовательное учреждение "Нижегородский радиотехнический колледж"',
            "г Нижний Новгород, ул Студенческая, д. 6"]
    ]
    OPTION_TEMPLATE = (id, region) => {
        return `
            <li class="option">
                <p><label for="op_reg${id}">${region}</label></p>
                <div style="position: relative;">
                <span class="checkbox type-checkbox op-${id}" id="op-${id}"></span>
                </div>
            </li>
            `;
    }
    checkboxEvent = (box) => {
        if (box.classList.contains("checked")) {
            box.classList.remove("checked");
        }
        else {
            box.classList.add("checked");
        }
        for (var i = 0; i < this.STATUS_LIST.length; i++) {
            if (box.classList[2] == "op-" + this.STATUS_LIST[i][1]) {
                this.CHOSEN_STATUS[i] = !this.CHOSEN_STATUS[i];
            }
        }
    }
    sort = (parameter_number, statement, LIST) => {
        let NEW_LIST = [];
        let isFound = true;
        for (var i = 0; i < LIST.length; i++) {
            isFound = true;
            for (var j = 0; j < statement.length; j++) {
                if (parameter_number == 1) {
                    if (statement == "По всем") {
                        continue;
                    } else if (statement == "Действующие" &&
                        LIST[i][parameter_number] == "Действующее") {
                        continue;
                    } else if (statement == "Ликвидированные" &&
                        Array.from(Array(10).keys()).indexOf(Number(LIST[i][parameter_number][0])) != -1) {
                        continue;
                    } else {
                        isFound = false;
                    }
                } else {
                    console.log(statement, LIST[i][parameter_number]);
                    console.log(statement[j], LIST[i][parameter_number][j]);

                    if (statement[j] != LIST[i][parameter_number][j]) {
                    isFound = false;
                    break;
                    }
                }
            }
            if (isFound) {
                NEW_LIST.push(LIST[i]);
            }
        }
        return NEW_LIST;
    }
    render() {
        const STYLE = `
            <style>
                .background1 {
                    position: fixed;
                    width: 100%;
                    height: 200%;
                    margin-top: -100%;
                    background-color: rgba(0,0,0,0.2);
                    visibility: hidden;
                    z-index: 0;
                }
                .raws {
                    display: contents;
                }
                .table.edu {
                    margin-top: 27px;
                    padding-left: 20px;
                    padding-right: 20px;
                    width: 100%;
                    grid-template-columns: 
                            minmax(50px, .5fr) minmax(70px, 1.6fr) minmax(128px,1.9fr) 1.2fr 1.8fr 4.9fr
                            2.3fr 1.4fr .8fr .8fr;
                    grid-auto-rows: minmax(50px, auto);
                    color: #9C9C9C;
                }
                #status_selector_icon {
                    font-size: 15px;
                    margin-right: 0px;
                }
                .selector-menu {
                    z-index: 10;
                }
                .status-selector {
                    margin-left: -5px;
                    width: 230px;
                }
                .title.table__row-item > p.cell {
                    color: black;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .center {
                    justify-content: center;
                }
                .status-cell-spirit {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    margin-top: -53px;
                    z-index: 5;
                }
                @media(width < 1200px) {
                    .table__row-item {
                        font-size: 16px;
                    }
                }
                @media(width < 1000px) {
                    .table__row-item {
                        font-size: 14px;
                    }
                }
            </style>
        `;
        this.innerHTML = `
            ${STYLE}
            <div class="background1"></div>
            <div class="table-wrapper">                
                <div class="table edu">
                    <div class="mobile-wrapper-table">
                        <div class="table__row-item title">
                            <p class="medium">№</p>
                        </div>
                        <div class="table__row-item title" id="inn-column">
                            <p class="medium">ИНН</p>
                        </div>
                        <div class="table__row-item title" id="status-column">
                            <p class="medium">Статус/<br/> Дата ликв.</p>
                        </div>
                        <div class="table__row-item title" id="name-column">
                            <p class="medium">Название<br/> без ЮФ</p>
                        </div>
                        <div class="table__row-item title" id="short-name-column">
                            <p class="medium">Сокращенное<br/> название</p>
                        </div>
                        <div class="table__row-item title" id="full-name-column">
                            <p class="medium">Полное название</p>
                        </div>
                        <div class="table__row-item title" id="address-column">
                            <p class="medium">Адрес</p>
                        </div>
                        <div class="table__row-item title" id="filials-column">
                            <p class="medium">Филиалы</p>
                        </div>
                        <div class="table__row-item title">
                            <p class="medium">EDIT</p>
                        </div>
                        <div class="table__row-item title">
                            <p class="medium">DEL</p>
                        </div>

                        <div class="table__row-item title">  </div>

                        <div class="search-wrapper">
                            <div class="table__row-item title id search" id="inn-cell">
                                <span class="icon"></span>
                                <input type="text" name id="inn" />
                            </div>
                        </div>
                        <div class="search-wrapper">
                            <div class="table__row-item title id search" id="status-cell">
                                <div class="selector-menu">
                                <ul class="ul-selector status-selector">
        ${(() => {
            let type = "";
            for (const tab of this.STATUS_LIST.slice(0, 10)) {
                    type += this.OPTION_TEMPLATE(tab[1], tab[0]);
                }
                return type;
            })()}
                                    <li class="choose type-choose" id="status-selector-button">
                                        <p>Выбрать</p>
                                    </li>
                                </ul>
                                </div>
                                <p class="choose-box-type cell" id="status-selector-text">По всем</p>
                                <span class="icon reversed selector_icon" id="status_selector_icon"></span>
                            </div>
                            <span class="status-cell-spirit"></span>
                        </div>
                        <div class="search-wrapper">
                            <div class="table__row-item title id search" id="name-cell">
                                <span class="icon"></span>
                                <input type="text" name id="name" />
                            </div>
                        </div>
                        <div class="search-wrapper">
                            <div class="table__row-item title id search" id="short-name-cell">
                                <span class="icon"></span>
                                <input type="text" name id="short-name" />
                            </div>
                        </div>
                        <div class="search-wrapper">
                            <div class="table__row-item title id search" id="full-name-cell">
                                <span class="icon"></span>
                                <input type="text" name id="full-name" />
                            </div>
                        </div>
                        <div class="search-wrapper">
                            <div class="table__row-item title id search" id="address-cell">
                                <span class="icon"></span>
                                <input type="text" name id="address" />
                            </div>
                        </div>
                        <div class="table__row-item title"></div> 
                        <div class="table__row-item title"></div>
                        <div class="table__row-item title"></div>

                        <div class="search-wrapper raws"></div>
                    </div>
                </div>
            </div>
        `
        
    }
    setup() {
        const background = this.querySelector(".background1");
        const raws = this.querySelector(".raws");

        const check = this.getElementsByClassName("checkbox");
        this.checkboxEvent(check[0]);
        Array.from(check).forEach(box => box.onclick = () => {
            this.checkboxEvent(box);
        });

        const status_spirit = this.querySelector(".status-cell-spirit");
        const status_column = this.querySelector("#status-cell");
        const status_selector = this.querySelector(".status-selector");
        const status_selector_button = this.querySelector("#status-selector-button"); 
        const status_selector_text = this.querySelector("#status-selector-text");
        status_spirit.onclick = () => {
            status_selector.style.visibility = "visible";
            status_column.classList.add("search_active");
            background.style.visibility = "visible";
        }
        background.onclick = () => {
            save(this.CHOSEN_STATUS);
            let current_list = this.EDU_LIST;
            Array.from(selector_pull).forEach(s => {
                current_list = this.sort(selector_pull.indexOf(s), s.value ?? s.innerHTML, current_list);
            });
            create_table(current_list);
        }
        status_selector_button.onclick = () => {
            save(this.CHOSEN_STATUS);
            let current_list = this.EDU_LIST;
            Array.from(selector_pull).forEach(s => {
                current_list = this.sort(selector_pull.indexOf(s), s.value ?? s.innerHTML, current_list);
            });
            create_table(current_list);
        }
        function save(CHOSEN_STATUS) {
            status_column.classList.remove("search_active");
            background.style.visibility = "hidden";
            status_selector.style.visibility = "hidden";
            status_selector_text.style.color = "black";
            if (CHOSEN_STATUS[0] == true || CHOSEN_STATUS[1] + CHOSEN_STATUS[2] == 2) {
                console.log(status_selector_button, status_selector_text);
                status_selector_text.innerHTML = "По всем";
            } else if (CHOSEN_STATUS[1] == true) {
                status_selector_text.innerHTML = "Действующие";
            } else if (CHOSEN_STATUS[2] == true) {
                status_selector_text.innerHTML = "Ликвидированные";
            } else {
                status_selector_text.innerHTML = "Не выбрано";
                status_selector_text.style.color = "--dark-orange";
            }
            background.style.visibility = "hidden";
            status_selector.style.visibility = "hidden";
        }

        const inn_selector = this.querySelector("#inn");
        const name_selector = this.querySelector("#name");
        const short_name_selector = this.querySelector("#short-name");
        const full_name_selector = this.querySelector("#full-name");
        const address_selector = this.querySelector("#address");

        const selector_pull = [inn_selector, status_selector_text, name_selector,
            full_name_selector, short_name_selector, address_selector];
        Array.from(selector_pull).forEach(selector => selector.onkeyup = () => {
            let current_list = this.EDU_LIST;
            Array.from(selector_pull).forEach(s => {
                current_list = this.sort(selector_pull.indexOf(s), s.value ?? s.innerHTML, current_list);
            });
            create_table(current_list);
        });

        create_table(this.EDU_LIST);
        function create_table(LIST) {
            let raw_strings = "";
            let liquidated_numbers = [];
            let k = 0;
            for (var i = 0; i < LIST.length; i++) {
                if (LIST[i][1] == "Действующее") {
                    liquidated_numbers.push(0);
                } else {
                    liquidated_numbers[liquidated_numbers.length - 1] += 1;
                }
            }
            for (var i = 0; i < LIST.length; i++) {
                if (LIST[i][1] == "Действующее" && liquidated_numbers[k] != 0) {
                    raw_strings += `
                    <div class="row-wrapper">
                    <div class="mobile-wrapper__row mobile-wrapper__row-id">
                        <p class="mobile-wrapper__row-extra-content caption">№</p>
                        <div class="table__row-item center selectable id" style="border-bottom: none;">
                            <p>
                            ${i + 1}
                            </p>
                        </div>
                    </div>
                    `;
                    k++
                } else if (LIST[i][1] == "Действующее") {
                    raw_strings += `
                    <div class="row-wrapper">
                    <div class="mobile-wrapper__row mobile-wrapper__row-id">
                        <p class="mobile-wrapper__row-extra-content caption">№</p>
                        <div class="table__row-item center selectable id">
                            <p>
                            ${i + 1}
                            </p>
                        </div>
                    </div>
                    `;
                    k++
                }
                else {
                    raw_strings += `
                    <div class="row-wrapper">
                    <div class="mobile-wrapper__row mobile-wrapper__row-id">
                        <p class="mobile-wrapper__row-extra-content caption">№</p>
                        <div class="table__row-item center selectable id" style="border-top: none;">
                            <p>
                            </p>
                        </div>
                    </div>
                    `;
                }

                raw_strings += `
                <div class="mobile-wrapper__row mobile-wrapper__row-id">
                    <p class="mobile-wrapper__row-extra-content caption">№</p>
                    <div class="table__row-item selectable id">
                        <p>
                        ${LIST[i][0]}
                        </p>
                    </div>
                </div>
                <div class="mobile-wrapper__row mobile-wrapper__row-id">
                    <p class="mobile-wrapper__row-extra-content caption">№</p>
                    <div class="table__row-item selectable id">
                        <p>
                        ${LIST[i][1]}
                        </p>
                    </div>
                </div>
                <div class="mobile-wrapper__row mobile-wrapper__row-id">
                    <p class="mobile-wrapper__row-extra-content caption">№</p>
                    <div class="table__row-item selectable id">
                        <p>
                        ${LIST[i][2]}
                        </p>
                    </div>
                </div>
                <div class="mobile-wrapper__row mobile-wrapper__row-id">
                    <p class="mobile-wrapper__row-extra-content caption">№</p>
                    <div class="table__row-item selectable id">
                        <p>
                        ${LIST[i][3]}
                        </p>
                    </div>
                </div>
                <div class="mobile-wrapper__row mobile-wrapper__row-id">
                    <p class="mobile-wrapper__row-extra-content caption">№</p>
                    <div class="table__row-item selectable id">
                        <p>
                        ${LIST[i][4]}
                        </p>
                    </div>
                </div>
                <div class="mobile-wrapper__row mobile-wrapper__row-id">
                    <p class="mobile-wrapper__row-extra-content caption">№</p>
                    <div class="table__row-item selectable id">
                        <p>
                        ${LIST[i][5]}
                        </p>
                    </div>
                </div>
                        <div class="table__row-item title"></div>
                <div class="mobile-wrapper__row mobile-wrapper__row-edit">
                    <div tooltip="редактировать организацию" class="table__row-item title selectable non-border edit">
                        <span class="icon control-edit edit"></span>
                    </div>
                    <div tooltip="удалить организацию" class="table__row-item title selectable non-border edit delete">
                        <span class="icon control-edit delete"></span>
                    </div>
                </div>
                    </div>
                `;
            }
            raws.innerHTML = raw_strings;
        }
    }
}

customElements.define("journal-content", Journal);