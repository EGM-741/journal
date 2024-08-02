class Selectors extends HTMLElement {
    isFocusOnType = new Boolean(false);
    isFocusOnRegion = new Boolean(false);
    COUNTER = 0;
    STYLE = ``;
    HTML = ``;
    EDU_TYPES = [];
    EDU_REGIONS = [];
    REGION_LIST = [
        [`Нижегородская область`,       'r1'],
        [`Нижний Новгород`,             'r2',   `Нижегородская область`],
        [`Арзамас`,                     'r3',   `Нижегородская область`],
        [`Балахна`,                     'r4',   `Нижегородская область`],
        [`Богородск`,                   'r5',   `Нижегородская область`],
        [`Бор`,                         'r6',   `Нижегородская область`],
        [`Ветлуга`,                     'r7',   `Нижегородская область`],
        [`Володарск`,                   'r8',   `Нижегородская область`],
        [`Ворсма`,                      'r9',   `Нижегородская область`],
        [`Выкса`,                       'r10',  `Нижегородская область`],
        [`Горбатов`,                    'r11',  `Нижегородская область`],
        [`Городец`,                     'r12',  `Нижегородская область`],
        [`Дзержинск`,                   'r13',  `Нижегородская область`],
        [`Заволжье`,                    'r14',  `Нижегородская область`],
        [`Княгинино`,                   'r15',  `Нижегородская область`],
        [`Кстово`,                      'r16',  `Нижегородская область`],
        [`Кулебаки`,                    'r17',  `Нижегородская область`],
        [`Лукоянов`,                    'r18',  `Нижегородская область`],
        [`Лысково`,                     'r19',  `Нижегородская область`],
        [`Навашино`,                    'r20',  `Нижегородская область`],
        [`Павлово`,                     'r21',  `Нижегородская область`],
        [`Первомайск`,                  'r22',  `Нижегородская область`],
        [`Перевоз`,                     'r23',  `Нижегородская область`],
        [`Саров`,                       'r24',  `Нижегородская область`],
        [`Семенов`,                     'r25',  `Нижегородская область`],
        [`Сергач`,                      'r26',  `Нижегородская область`],
        [`Урень`,                       'r27',  `Нижегородская область`],
        [`Чкаловск`,                    'r28',  `Нижегородская область`],
        [`Шахунья`,                     'r29',  `Нижегородская область`],
        [`Алтайский край`,              'r30'],
        [`Амурская область`,            'r31'],
        [`Архангельская область`,       'r32'],
        [`Астраханская область`,        'r33'],
        [`Белгородская область`,        'r34'],
        [`Брянская область`,            'r35'],
        [`Владимирская область`,        'r36'],
        [`Волгоградская область`,       'r37'],
        [`Вологодская область`,         'r38'],
        [`Воронежская область`,         'r39'],
        [`Донецкая Народная Республика`,'r40'],
        [`Еврейская автономная область`,'r41'],
        [`Забайкальский край`,          'r42'],
        [`Запорожская область`,         'r43'],
        [`Ивановская область`,          'r44'],
        [`Иркутская область`,           'r45'], 
        [`Кабардино - Балкарская Республика`,'r46'],
        [`Калининградская область`,     'r47'],
        [`Калужская область`,           'r48'],
        [`Камчатский край`,             'r49'],
        [`Карачаево - Черкесская Республика`,'r50'],
        [`Кемеровская область`,         'r51'],
        [`Кировская область`,           'r52'],
        [`Костромская область`,         'r53'],
        [`Краснодарский край`,          'r54'],
        [`Красноярский край`,           'r55'],
        [`Крым`,                        'r56'],
        [`Курганская область`,          'r57'],
        [`Курская область`,             'r58'],
        [`Ленинградская область`,       'r59'],
        [`Липецкая область`,            'r60'],
        [`Луганская Народная Республика`,'r61'],
        [`Магаданская область`,         'r62'],
        [`Москва`,                      'r63'],
        [`Московская область`,          'r64'],
        [`Мурманская область`,          'r65'],
        [`Ненецкий автономный округ`,   'r66'],
        [`Нижегородская область`,       'r67'],
        [`Новгородская область`,        'r68'],
        [`Новосибирская область`,       'r69'],
        [`Омская область`,              'r70'],
        [`Оренбургская область`,        'r71'],
        [`Орловская область`,           'r72'],
        [`Пензенская область`,          'r73'],
        [`Пермский край`,               'r74'],
        [`Приморский край`,             'r75'],
        [`Псковская область`,           'r76'],
        [`Республика Адыгея`,           'r77'],
        [`Республика Алтай`,            'r78'],
        [`Республика Башкортостан`,     'r79'],
        [`Республика Бурятия`,          'r80'],
        [`Республика Дагестан`,         'r81'],
        [`Республика Ингушетия`,        'r82'],
        [`Республика Калмыкия`,         'r83'],
        [`Республика Карелия`,          'r84'],
        [`Республика Коми`,             'r85'],
        [`Республика Марий Эл`,         'r86'],
        [`Республика Мордовия`,         'r87'],
        [`Республика Саха(Якутия)`,     'r88'],
        [`Республика Северная Осетия — Алания`,'r89'],
        [`Республика Татарстан`,        'r90'],
        [`Республика Тыва`,             'r91'],
        [`Республика Хакасия`,          'r92'],
        [`Ростовская область`,          'r93'],
        [`Рязанская область`,           'r94'],
        [`Самарская область`,           'r95'],
        [`Санкт - Петербург`,           'r96'],
        [`Саратовская область`,         'r97'],
        [`Сахалинская область`,         'r98'],
        [`Свердловская область`,        'r99'],
        [`Севастополь`,                 'r100'],
        [`Смоленская область`,          'r101'],
        [`Ставропольский край`,         'r102'],
        [`Тамбовская область`,          'r103'],
        [`Тверская область`,            'r104'],
        [`Томская область`,             'r105'],
        [`Тульская область`,            'r106'],
        [`Тюменская область`,           'r107'],
        [`Удмуртская Республика`,       'r108'],
        [`Ульяновская область`,         'r109'],
        [`Хабаровский край`,            'r110'],
        [`Ханты - Мансийский автономный округ — Югра`,'r111'],
        [`Херсонская область`,          'r112'],
        [`Челябинская область`,         'r113'],
        [`Чеченская Республика`,        'r114'],
        [`Чувашская Республика`,        'r115'],
        [`Чукотский автономный округ`,  'r116'],
        [`Ямало - Ненецкий автономный округ`,'r117'],
        [`Ярославская область`,         'r118']
    ];
    DEFAULT_REGION_LIST = [
        this.REGION_LIST[1],
        this.REGION_LIST[0],
        this.REGION_LIST[2],
        this.REGION_LIST[3],
        this.REGION_LIST[4],
        this.REGION_LIST[5],
        this.REGION_LIST[9],
        this.REGION_LIST[12],
        this.REGION_LIST[15],
        this.REGION_LIST[20]
    ];
    TYPE_LIST = [
        ["По всем"],
        ["Школы, гимназии"],
        ["Средние специальные учебные заведения"],
        ["Высшие специальные учебные заведения"]
    ];
    OPTION_TEMPLATE = (id, region) => {
        return `
        <li class="option"><p><label for="op_reg${id}">${region}</label></p><span><input type="checkbox" class="checkbox" id="op${id}"></span>
        </li>
        `;
    }
    Where = (list, condition) => {
        let new_list = "";
        let isContain = new Boolean(false);
        let symbols = "";
        let j = 0;
        for (const tab of list.slice(0, list.length)) {
            if (j < 10) {
                let i = 0;
                isContain = new Boolean(false);
                if (tab.length < 3) {
                    tab.push(tab[0]);
                }
                while (i < condition.length) {
                    if (condition[i] === tab[0][i] || condition[i] === tab[2][i]) {
                        isContain = new Boolean(true);
                        symbols += condition[i];
                    }
                    else {
                        isContain = new Boolean(false);
                        break;
                    }
                    i++;
                }
                if (isContain == true) {
                    new_list += this.OPTION_TEMPLATE(tab[1], tab[0]);
                    j++;
                }
            }
        }
        if (new_list == "") {
            new_list += this.OPTION_TEMPLATE("0", "");
        }
        return new_list;
    }
    connectedCallback() {
        this.render();
        this.setup();
    }
    render() {
        this.STYLE = `
            <style>
                .selectors-panel {
                    padding: 0px 20px 0px 20px;
                }
                .selectors {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    width: 100%;
                    height: min-content;
                }
                .selector {
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 48px;
                    border: 1px;
                    border-style: solid;
                    border-color:rgb(211, 211, 211);
                    display: flex;
                    width: auto;
                    min-width: 280px;
                    background-color: rgba(255,0,0,0);
                    color: rgb(128, 128, 128);
                    cursor: pointer;
                }
                .selector_icon {
                    margin-right: 2vw;
                }
                    .selector#deselect:hover {
                        color: rgb(255,0,0);
                    }
                    .selector#delete:hover {
                        background-color: rgb(255,0,0);
                        color: rgb(255,255,255);
                    }
                .selector-text {
                    font-family: 'Inter-Medium';
                    font-size: 18px;
                    text-transform: uppercase;
                }
                .selector-icon {
                    margin-right: 10px;
                    font-size: 25px;
                    font-family: Icons;
                }
                    span.date, span.short {
                        font-family: Iconfont;
                    }
                .calendar {
                    border: none;
                    font-family: "Inter-Medium";
                    font-size: 18px;
                    color: #4FA95D;
                    text-transform: uppercase;
                }
                input[type="date"]::-webkit-calendar-picker-indicator {
                    display: none;
                    -webkit-appearance: none;
                }
                span#deselect {
                    color: rgb(255,0,0);
                }
                .counter {
                    color: #4FA95D;
                }
                .choose-box-panel {
                    padding: 40px 20px 0px 20px;
                    max-width: 63.8vw;
                }
                .choose-box {
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: min-content;
                    text-align: left;
                    row-gap: 20px;
                }
                .choose-box-type, .choose-box-region {
                    flex: 1;
                }
                .choose-box-selector {
                    position: relative;
                    align-items: center;
                    height: 48px;
                    border: 1px;
                    border-style: solid;
                    border-color: #C1C1C1;
                    display: flex;
                    width: auto;
                    min-width: 478px;
                    background-color: rgba(255,0,0,0);
                    color: rgb(128, 128, 128);
                    cursor: pointer;
                    font-size: 18px;
                    font-family: 'Inter-Medium';
                }
                    .choose-box-selector:hover {
                        border-color: #848484;
                    }
                    .choose-box-selector-focus {
                        border-color: #00B0D9;
                    }
                .choose-box-selector-text {
                    margin-left: 10px;
                    visibility: hidden;
                }
                .selector-capsul {
                    position: relative;
                    width: fit-content;
                    white-space: nowrap;
                }
                .selector-input-capsul {
                    position: relative;
                    width: fit-content;
                    white-space: nowrap;
                }
                .selector-input {
                    position: absolute;
                    border: 1px;
                    border-style: solid;
                    border-color:rgb(211, 211, 211);
                    background-color: transparent;
                    margin: -10px 0px 0px -63vw;
                    font-size: 18px;
                    width: 63vw;
                    border: none;
                    visibility: visible;

                    z-index: 15;
                }
                .type-selector-input:focus ~ .type_input {
                    font-size: 12px;
                    color: #111;
                    transform: translateY(-10px);
                }
                .region-selector-input:focus ~ .region_input {
                    font-size: 12px;
                    color: #111;
                    transform: translateY(-10px);
                }
                .type_input {
                    transition: 0.2s;
                    pointer-events: none;
                }
                .region_input {
                    transition: 0.2s;
                    pointer-events: none;
                }
                .ul-selector {
                    position: absolute;
                    visibility: hidden;
                    color: black;
                    width: 60vw;
                    border: 1px;
                    border-style: solid;
                    border-color: #00B0D9;
                    background-color: white;
                    margin: 20px 0px 0px calc(-63.6vw);
                    padding: 10px 22px 10px 18px;
                }
                ul.type-selector {
                    z-index: 16;
                }
                ul.region-selector {
                    z-index: 11;
                }
                ul.type-selector.visible, ul.region-selector.visible {
                    visibility: visible;
                }
                li {
                    list-style-type: none;
                    height: 45px;
                    font-family: 'Inter';
                    font-size: 20px;
                }
                .option {
                    display: flex;
                    justify-content: space-between;
                }
                .checkbox {
                    transform:scale(1.5);
                }
                .choose {
                    background-color: #00B0D9;
                    color: #FFFFFF;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Inter-Medium';
                    font-size: 20px;
                }
                .choose:hover {
                    color: #FFE200;
                }
                @media (width > 1599px) {
                    .selector-input {
                        margin: -15px 0px 0px calc(-38.8vw);
                        width: 38.8vw;
                    }
                    .ul-selector {
                        margin: 20px 0px 0px calc(-38.8vw);
                        width: 36.2vw;
                    }
                    .choose-box-panel {
                        max-width: 78vw;
                    }
                    .selector {
                        min-width: 312px;
                    }
                }
                @media (1599px >= width >= 1499px) {
                    .selector-input {
                        margin: -15px 0px 0px calc(-38.8vw);
                        width: 38.8vw;
                    }
                    .ul-selector {
                        margin: 20px 0px 0px calc(-38.5vw);
                        width: 38.8vw;
                    }
                    .choose-box-panel {
                        max-width: 78vw;
                    }
                    .selector {
                        min-width: 260px;
                    }
                }
                @media (1499px > width >= 1240px) {
                    .selector-input {
                        margin: -10px 0px 0px calc(-47.5vw);
                        width: 47.5vw;
                    }
                    .ul-selector {
                        margin: 20px 0px 0px calc(-48.5vw);
                        width: 45.6vw;
                    }
                    .choose-box-panel {
                        max-width: 1499px;
                    }
                    .selector {
                        min-width: 300px;
                    }
                }
                @media (1240px > width >= 1160px) {
                    .selector {
                        min-width: 300px;
                    }
                }
                @media (width <= 880px) {
                    .selectors-panel {
                        padding-top: 40px;
                    }
                }
                @media (width <= 640px) {
                    .selectors-panel {
                        padding-top: 20px;
                    }
                }
            </style>
        `;
        this.HTML = `
            <div class="selectors-panel">
            <div class="selectors date">
                <div tooltip="введите дату начала поиска" class="selector control-panel__segment date" id="date_from">
                    <span class="selector-icon date"></span>
                    <p  class="selector-text">
                        дата от
                    </p>
                    <input class="calendar" type="date" placeholder="ДД-ММ-ГГ" value="" />
                </div>
                <div tooltip="введите дату конца поиска" class="selector control-panel__segment date" id="date_till">
                    <span class="selector-icon date"></span>
                    <p  class="selector-text">
                        дата до
                    </p>
                    <input class="calendar" type="date" placeholder="dd-mm-yy" value="" />
                </div>
            </div>
            </div>
            <div class="selectors-panel">
            <div class="selectors forms">
                <div tooltip="добавить юридическую форму" class="selector control-panel__segment" id="add_new">
                    <span class="selector-icon add_new">+</span>
                    <p  class="selector-text">
                        add a new one
                    </p>
                </div>
                <div tooltip="удалить юридическую форму" class="selector control-panel__segment" id="deselect">
                    <span class="selector-icon" id="deselect"></span>
                    <p  class="selector-text">
                        deselect
                    </p>
                </div>
                <div tooltip="нашлось: ${this.COUNTER}" class="selector control-panel__segment" id="in_total">
                    <span class="selector-icon"></span>
                    <p  class="selector-text">
                        in total:
                        <span class="counter">${this.COUNTER}</span>
                    </p>
                </div>
                <div tooltip="экспортировать данные в xslx" class="selector control-panel__segment" id="export">
                    <span class="selector-icon"></span>
                    <p  class="selector-text">
                        export
                    </p>
                </div>
                <div tooltip="сокращенные юридические формы" class="selector control-panel__segment" id="short">
                    <span class="selector-icon icon short"></span>
                    <p  class="selector-text">
                        сокращ. юр.ф.
                    </p>
                </div>
                <div tooltip="удалить данные в бд" class="selector control-panel__segment" id="delete">
                    <span class="selector-icon icon"></span>
                    <p  class="selector-text">
                        delete everything
                    </p>
                </div>
            </div>
            </div>
            <div class="choose-box-panel">
                <div class="choose-box">
                    <div class="choose-box-type" id="choose-box-type">
                        <div class="choose-box-type choose-box-text">
                            Тип учебного заведения
                        </div>
                        <div class="choose-box-type choose-box-selector" id="choose-type">
                            <p class="choose-box-type choose-box-selector-text">Тип учебного заведения</p>
                            <span class="icon reversed selector_icon" id="type_selector_icon"></span>
                            <div class="selector-input-capsul">
                            <input class="selector-input type-selector-input" type="text" />
                            <span class="selector-input choose-box-selector-text type_input">Тип учебного заведения</span>
                            </div>
                            <div class="selector-capsul" id="type-capsul">
                                <ul class="ul-selector type-selector">
        ${(() => {
            let type = "";
            for (const tab of this.TYPE_LIST.slice(0, 10)) {
                type += this.OPTION_TEMPLATE(tab[1], tab[0]);
            }
            return type;
        })()}
                                    <li class="choose">
                                        <p>Выбрать</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="choose-box-type" id="choose-box-region">
                        <div class="choose-box-region choose-box-text">
                            Регион учебного заведения
                        </div>
                        <div class="choose-box-type choose-box-selector" id="choose-region">
                            <p class="choose-box-type choose-box-selector-text">Регион учебного заведения</p>
                            <span class="icon reversed selector_icon" id="region_selector_icon"></span>
                            <div class="selector-input-capsul">
                            <input class="selector-input region-selector-input" type="text" />
                            <span class="selector-input choose-box-selector-text region_input">Регион учебного заведения</span>
                            </div>
                            <div class="selector-capsul" id="region-capsul">
                                <ul class="ul-selector region-selector">
        ${(() => {
            let reg = "";
            for (const tab of this.DEFAULT_REGION_LIST.slice(0, 10)) {
                reg += this.OPTION_TEMPLATE(tab[1], tab[0]);
            }
            return reg;
        })()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.innerHTML = `
            ${this.STYLE}
            ${this.HTML}
        `;
        
    }
    setup() {

        const total = this.querySelector("#in_total");
        total.onclick = () => {
            this.COUNTER += 1;
            this.getElementsByClassName("forms")[0].innerHTML = `
                <div tooltip="добавить юридическую форму" class="selector control-panel__segment" id="add_new">
                    <span class="selector-icon control-panel__segment-icon add_new">+</span>
                    <p  class="selector-text">
                        add a new one
                    </p>
                </div>
                <div tooltip="удалить юридическую форму" class="selector control-panel__segment" id="deselect">
                    <span class="selector-icon icon control-panel__segment-icon" id="deselect"></span>
                    <p  class="selector-text">
                        deselect
                    </p>
                </div>
                <div tooltip="нашлось: ${this.COUNTER}" class="selector control-panel__segment" id="in_total">
                    <span class="selector-icon icon control-panel__segment-icon"></span>
                    <p  class="selector-text">
                        in total:
                        <span class="counter">${this.COUNTER}</span>
                    </p>
                </div>
                <div tooltip="экспортировать данные в xslx" class="selector control-panel__segment" id="export">
                    <span class="selector-icon icon control-panel__segment-icon"></span>
                    <p  class="selector-text">
                        export
                    </p>
                </div>
                <div tooltip="сокращенные юридические формы" class="selector control-panel__segment" id="short">
                    <span class="selector-icon icon control-panel__segment-icon short"></span>
                    <p  class="selector-text">
                        сокращ. юр.ф.
                    </p>
                </div>
                <div tooltip="удалить данные в бд" class="selector control-panel__segment" id="delete">
                    <span class="selector-icon icon control-panel__segment-icon"></span>
                    <p  class="selector-text">
                        delete everything
                    </p>
                </div>
                `;
            total = this.querySelector("#in_total");
        }

        const type_selector = this.querySelector(".type-selector");
        type_selector.onclick = () => {
            console.log(this.isFocusOnType);
            this.isFocusOnType = true;
        }

        const type_choose_input = this.querySelector(".type-selector-input");
        type_choose_input.onfocus = () => {
            const type_chooser_border = this.querySelector("#choose-type");
            const type_selector = this.querySelector(".type-selector");
            const type_selector_icon = this.querySelector("#type_selector_icon");
            type_selector_icon.classList.remove("reversed");
            type_selector.classList.add("visible");
            type_chooser_border.classList.add("choose-box-selector-focus");
            type_choose_input.classList.add("focus");
        }
        type_choose_input.onblur = () => {
            if (this.isFocusOnType) {
                const type_chooser_border = this.querySelector("#choose-type");
                const type_selector = this.querySelector(".type-selector");
                const type_selector_icon = this.querySelector("#type_selector_icon");
                type_selector_icon.classList.add("reversed");
                type_selector.classList.remove("visible");
                type_chooser_border.classList.remove("choose-box-selector-focus");
                type_choose_input.classList.remove("focus");
            }
        }

        const region_choose_input = this.querySelector(".region-selector-input");
        region_choose_input.onfocus = () => {
            const region_chooser_border = this.querySelector("#choose-region");
            const region_selector = this.querySelector(".region-selector");
            const region_selector_icon = this.querySelector("#region_selector_icon");
            region_selector_icon.classList.remove("reversed");
            region_selector.classList.add("visible");
            region_chooser_border.classList.add("choose-box-selector-focus");
            region_choose_input.classList.add("focus");
        }
        region_choose_input.onblur = () => {
            const region_chooser_border = this.querySelector("#choose-region");
            const region_selector = this.querySelector(".region-selector");
            const region_selector_icon = this.querySelector("#region_selector_icon");
            region_selector_icon.classList.add("reversed");
            region_selector.classList.remove("visible");
            region_chooser_border.classList.remove("choose-box-selector-focus");
            region_choose_input.classList.remove("focus");
        }

        const region_chooser_input = this.getElementsByClassName("region-selector-input")[0];
        region_chooser_input.onkeyup = () => {
            const region_selector = this.querySelector(".region-selector");
            if (region_chooser_input.value == "") {
                let reg = "";
                for (const tab of this.DEFAULT_REGION_LIST.slice(0, 10)) {
                    reg += this.OPTION_TEMPLATE(tab[1], tab[0]);
                }
                region_selector.innerHTML = reg;
            }
            else {
                region_selector.innerHTML = this.Where(this.REGION_LIST, region_chooser_input.value);
            }
        }
    }
}

customElements.define("selectors-elem", Selectors);