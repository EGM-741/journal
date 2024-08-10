class Selectors extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setup();
    }
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
    CURRENT_REGION_LIST = [];
    TYPE_LIST = [
        ["По всем",                             "common-type"],
        ["Школы, гимназии",                     "school-type"],
        ["Средние специальные учебные заведения","prof-type"],
        ["Высшие специальные учебные заведения","hight-type"]
    ];
    OPTION_TEMPLATE = (id, region, k) => {
        if (k == 0) {
            return `
            <li class="option">
                <p><label for="op_reg${id}">${region}</label></p>
                <div style="position: relative;">
                <span class="checkbox type-checkbox op-${id}" id="op-${id}"></span>
                </div>
            </li>
            `;
        }
        else {
            this.CURRENT_REGION_LIST.push([region, id]);
            return `
            <li class="option">
                <p><label for="op_reg${id}">${region}</label></p>
                <div style="position: relative;">
                <span class="checkbox region-checkbox op-${id}" id="op-${id}"></span>
                </div>
            </li>
            `;
        }
    }
    CHOSEN_TYPES = [
        false,
        false,
        false,
        false
    ];
    CHOSEN_REGIONS = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ];
    Where = (list, condition) => {
        let new_list = `
                    <li class="opt-placeholder"> Выберите вариант или продолжите ввод
                    </li>
                    `;
        let isContain = new Boolean(false);
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
        return new_list;
    }

    checkboxEvent = (box) => {
        if (box.classList.contains("checked")) {
            box.classList.remove("checked");
        }
        else {
            box.classList.add("checked");
        }
        for (var i = 0; i < this.CHOSEN_TYPES.length; i++) {
            if (box.classList[2] == "op-" + this.TYPE_LIST[i][1]) {
                this.CHOSEN_TYPES[i] = !this.CHOSEN_TYPES[i];
            }
        }
        for (var i = 0; i < this.CHOSEN_REGIONS.length; i++) {
            if (box.classList[2] == "op-" + this.CURRENT_REGION_LIST[i][1]) {
                this.CHOSEN_REGIONS[i] = !this.CHOSEN_REGIONS[i];
            }
        }
    }
    render() {
        this.STYLE = `
            <style>
                .background {
                    position: absolute;
                    width: 100vw;
                    height: 200vh;
                    margin-top: -50vh;
                    background-color: rgba(0,0,0,0.2);
                    visibility: hidden;
                    z-index: 2;
                }
                .selectors-panel {
                    margin: 0px 20px 0px 20px;
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
                    margin-right: 1vw;
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
                    background: transparent;
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
                    font-size: 18px;
                    font-family: 'Inter-Medium';
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
                    margin-top: 10px;
                }
                    .choose-box-selector:hover {
                        border-color: #848484;
                    }
                    .choose-box-selector-focus {
                        border-color: #00B0D9;
                    }
                .choose-box-selector-text {
                    color: white;
                    width: 30vw;
                    height: 50px;
                    display: flex;
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
                }
                    .choose-box-selector.type_input_focus {
                        border: solid 1px #00B0D9;
                        z-index: 20;
                        background-color: white;
                    }
                    .type_input.type_input_focus {
                        font-size: 12px;
                        color: #7D7D7D;
                        transform: translateY(-10px);
                    }
                    .type_input.empty {
                        color: #7D7D7D;
                    }
                    .region_input.empty {
                        color: #7D7D7D;
                    }
                .region-selector-input:focus ~ .region_input {
                    font-size: 12px;
                    color: #7D7D7D;
                    transform: translateY(-10px);
                }
                .focus {
                    z-index: 5;
                }
                input[type="checkbox"] {
                    z-index: 60;
                    position: absolute;
                    top: 5px;
                    left: -15px;
                    transform:scale(2);
                    visibility: hidden;
                }
                .checkbox {
                    position: absolute;
                    top: 0;
                    left: -22px;
                    height: 26px;
                    width: 26px;
                    border: solid 1px #00B0D9;
                    font-family: Iconfont;
                    font-size: 14px;
                    color: #FFFFFF;
                    text-align: center;
                    align-items: center;
                    display: grid;
                }
                    .checkbox.checked {
                        background-color: #00B0D9;
                    }
                .type_input {
                    transition: 0.2s;
                    pointer-events: none;
                    color: #111;
                }
                .region_input {
                    transition: 0.2s;
                    pointer-events: none;
                    color: #111;
                }
                .ul-selector {
                    position: absolute;
                    visibility: hidden;
                    color: black;
                    width: 64vw;
                    border: 1px;
                    border-style: solid;
                    border-color: #00B0D9;
                    background-color: white;
                    margin: 25px 0px 0px calc(0vw);
                    padding: 0px 0px 10px 0px;
                }
                ul.type-selector {
                    z-index: 3;
                }
                ul.region-selector {
                    z-index: 2;
                }
                .visible {
                    visibility: visible;
                }
                li {
                    list-style-type: none;
                    height: 45px;
                    font-family: 'Inter';
                    font-size: 20px;
                    margin-left: 18px;
                    margin-right: 22px;
                }
                .option {
                    display: flex;
                    justify-content: space-between;
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
                span.icon.cansel {
                    font-family: Iconfont;
                    color: #C3C3C3;
                    font-size: 25px;
                }
                span.icon.cansel:hover {
                    color: #939393;
                }
                .opt-placeholder {
                    color: #7D7D7D;
                    margin-top: 10px;
                }
                @media (width > 1900px) {
                    .selector-input {
                        margin: -10px 0px 0px calc(15px);
                        width: 30vw;
                    }
                    .selector#delete {
                        min-width: 90vw;
                    }
                    .ul-selector {
                        margin: 25px 0px 0px calc(0w);
                        width: 38.8vw;
                    }
                    .choose-box-panel {
                        max-width: 78vw;
                    }
                    .selector {
                        min-width: 370px;
                    }
                }
                @media (1900px >= width > 1599px) {
                    .selector-input {
                        margin: -10px 0px 0px calc(15px);
                        width: 30vw;
                    }
                    .selector#delete {
                        min-width: 70vw;
                    }
                    .ul-selector {
                        margin: 25px 0px 0px calc(0vw);
                        width: 38.8vw;
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
                        margin: -10px 0px 0px calc(15px);
                        width: 30vw;
                    }
                    .selector#delete {
                        min-width: 70vw;
                    }
                    .ul-selector {
                        margin: 25px 0px 0px calc(0vw);
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
                        margin: -10px 0px 0px calc(15px);
                        width: 40vw;
                    }
                    .ul-selector {
                        margin: 25px 0px 0px calc(0vw);
                        width: 48vw;
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
                @media (1240px > width > 880px) {
                    #choose-box-region {
                        margin-left: 0px;
                    }
                }
                @media (width <= 880px) {
                    .selectors-panel {
                        padding-top: 40px;
                    }
                    #choose-box-region {
                        margin-left: 0px;
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
            <div class="background"></div>
            <div class="selectors-panel">
            <div class="selectors forms">
                <div tooltip="введите дату начала поиска" class="selector control-panel__segment date" id="date_from">
                    <span class="selector-icon date"></span>
                    <p  class="selector-text">
                        дата от
                    </p>
                    <input class="calendar" type="date" value="" />
                </div>
                <div tooltip="введите дату конца поиска" class="selector control-panel__segment date" id="date_till">
                    <span class="selector-icon date"></span>
                    <p  class="selector-text">
                        дата до
                    </p>
                    <input class="calendar" type="date" value="" />
                </div>
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
                            <div class="selector-capsul" id="type-capsul">
                                <ul class="ul-selector type-selector">
                                    <li class="opt-placeholder">Выберите вариант</li>
        ${(() => {
            let type = "";
            for (const tab of this.TYPE_LIST.slice(0, 10)) {
                type += this.OPTION_TEMPLATE(tab[1], tab[0],0);
            }
            return type;
        })()}
                                    <li class="choose type-choose">
                                        <p>Выбрать</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="selector-input-capsul">
                                <span class="selector-input choose-box-selector-text type_input empty">Тип учебного заведения</span>
                            </div>
                            <p class="choose-box-type choose-box-selector-text"></p>
                            <span class="icon selector_icon cansel" id="type-cansel"></span>
                            <span class="icon reversed selector_icon" id="type_selector_icon"></span>
                        </div>
                    </div>
                    <div class="choose-box-type" id="choose-box-region">
                        <div class="choose-box-region choose-box-text">
                            Регион учебного заведения
                        </div>
                        <div class="choose-box-type choose-box-selector" id="choose-region">
                            <div class="selector-capsul" id="region-capsul">
                                <ul class="ul-selector region-selector">
                                    <li class="opt-placeholder">Выберите вариант или продолжите ввод
                                    </li>
        ${(() => {
            let reg = "";
            for (const tab of this.DEFAULT_REGION_LIST.slice(0, 10)) {
                reg += this.OPTION_TEMPLATE(tab[1], tab[0],1);
            }
            return reg;
        })()}
                                    <li class="choose">
                                        <p>Выбрать</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="selector-input-capsul">
                                <input class="selector-input region-selector-input" type="text" />
                                <span class="selector-input choose-box-selector-text region_input empty">Регион учебного заведения</span>
                            </div>
                            <p class="choose-box-type choose-box-selector-text"></p>
                            <span class="icon selector_icon cansel" id="region-cansel"></span>
                            <span class="icon reversed selector_icon" id="region_selector_icon"></span>
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

        const type_chooser_border = this.getElementsByClassName("choose-box-selector-text")[1];
        const type_selector = this.querySelector(".type-selector");
        const type_selector_icon = this.querySelector("#type_selector_icon");
        const type_cansel_button = this.querySelector("span.icon.cansel#type-cansel");
        const type_input = this.getElementsByClassName("type_input")[0];
        const choose_type = this.querySelector("#choose-type");
        const region_chooser_border = this.querySelector("#choose-region");
        const region_selector = this.querySelector(".region-selector");
        const region_selector_icon = this.querySelector("#region_selector_icon");
        const region_cansel_button = this.querySelector("span.icon.cansel#region-cansel");
        const region_input = this.getElementsByClassName("region_input")[0];
        const region_choose_input = this.querySelector(".region-selector-input");
        const choose_region = this.querySelector("#choose-region");
        const background = this.querySelector(".background");
        const choose_button = this.getElementsByClassName("choose");
        const check = this.getElementsByClassName("checkbox");
        const checkType = this.getElementsByClassName("type-checkbox");
        const checkRegion = this.getElementsByClassName("checkbox");

        type_cansel_button.onclick = () => {
            this.CHOSEN_TYPES = [false, false, false, false];
            Array.from(checkType).forEach(box => {
                box.classList.remove("checked");
            });
            type_input.innerHTML = "Тип учебного заведения";
            type_input.classList.add("empty");
        }
        region_cansel_button.onclick = () => {
            this.CHOSEN_REGIONS = [false, false, false, false, false, false, false, false, false, false];
            Array.from(checkRegion).forEach(box => {
                box.classList.remove("checked");
            });
            region_input.innerHTML = "Регион учебного заведения";
            region_input.classList.add("empty");
        }
        type_chooser_border.onclick = () => {
            type_selector_icon.classList.remove("reversed");
            type_selector.classList.add("visible");
            type_chooser_border.classList.add("choose-box-selector-focus");
            background.classList.add("visible");
            type_input.classList.add("type_input_focus");
            choose_type.classList.add("type_input_focus");
        }
        region_choose_input.onfocus = () => {
            region_selector_icon.classList.remove("reversed");
            region_selector.classList.add("visible");
            region_chooser_border.classList.add("choose-box-selector-focus");
            region_choose_input.classList.add("focus");
            background.classList.add("visible");
            choose_region.classList.add("type_input_focus");
        }

        background.onclick = () => {
            selection_chose(this.CHOSEN_REGIONS, this.CHOSEN_TYPES, this.TYPE_LIST, this.CURRENT_REGION_LIST);
        }
        Array.from(choose_button).forEach(button => button.onclick = () => {
            selection_chose(this.CHOSEN_REGIONS, this.CHOSEN_TYPES, this.TYPE_LIST, this.CURRENT_REGION_LIST);
        })
        region_choose_input.onkeyup = () => {
            const region_selector = this.querySelector(".region-selector");
            let reg = `
                    <li class="opt-placeholder"> Выберите вариант или продолжите ввод
                    </li>
                    `;
            if (region_choose_input.value == "") {
                for (const tab of this.DEFAULT_REGION_LIST.slice(0, 10)) {
                    reg += this.OPTION_TEMPLATE(tab[1], tab[0]);
                }
                region_selector.innerHTML = reg;
            }
            else {
                region_selector.innerHTML = this.Where(this.REGION_LIST, region_choose_input.value);
            }
        }

        Array.from(check).forEach(box => box.onclick = () => {
            this.checkboxEvent(box);
        });

        function selection_chose(CHOSEN_REGIONS, CHOSEN_TYPES, TYPE_LIST, REGION_LIST) {
            if (type_selector.classList.contains("visible")) {
                choose_type.classList.remove("type_input_focus");
                if (CHOSEN_TYPES[0] == true) {
                    type_input.innerHTML = TYPE_LIST[0][0];
                    type_input.classList.remove("empty");
                }
                else if (CHOSEN_TYPES[1] + CHOSEN_TYPES[2] + CHOSEN_TYPES[3] > 1) {
                    type_input.innerHTML = "Тип учебного заведения (выбрано: " +
                        (CHOSEN_TYPES[1] + CHOSEN_TYPES[2] + CHOSEN_TYPES[3]) + ")";
                    type_input.classList.remove("empty");
                }
                else if (CHOSEN_TYPES[1] + CHOSEN_TYPES[2] + CHOSEN_TYPES[3] == 1) {
                    type_input.innerHTML =
                        (CHOSEN_TYPES[1]) ? "Школы, гимназии" :
                        ((CHOSEN_TYPES[2]) ? "Средние специальные учебные заведения" :
                                ((CHOSEN_TYPES[3]) ? "Высшие специальные учебные заведения" : false));
                    type_input.classList.remove("empty");
                }
                else {
                    type_input.innerHTML = "Тип учебного заведения";
                    type_input.classList.add("empty");
                }
                type_selector_icon.classList.add("reversed");
                type_selector.classList.remove("visible");
                type_chooser_border.classList.remove("choose-box-selector-focus");
                type_input.classList.remove("type_input_focus");
            }
            else {
                choose_region.classList.remove("type_input_focus");
                if (CHOSEN_REGIONS[0] + CHOSEN_REGIONS[1] + CHOSEN_REGIONS[2] + CHOSEN_REGIONS[3] +
                    CHOSEN_REGIONS[4] + CHOSEN_REGIONS[5] + CHOSEN_REGIONS[6] + 
                    CHOSEN_REGIONS[7] + CHOSEN_REGIONS[8] + CHOSEN_REGIONS[9] > 1) {
                    region_input.innerHTML = "Регион учебного заведения (выбрано: " +
                        (CHOSEN_REGIONS[0] + CHOSEN_REGIONS[1] + CHOSEN_REGIONS[2] + CHOSEN_REGIONS[3] +
                            CHOSEN_REGIONS[4] + CHOSEN_REGIONS[5] + CHOSEN_REGIONS[6] +
                            CHOSEN_REGIONS[7] + CHOSEN_REGIONS[8] + CHOSEN_REGIONS[9]) + ")";
                    region_input.classList.remove("empty");
                }
                else if (CHOSEN_REGIONS[0] + CHOSEN_REGIONS[1] + CHOSEN_REGIONS[2] + CHOSEN_REGIONS[3] +
                    CHOSEN_REGIONS[4] + CHOSEN_REGIONS[5] + CHOSEN_REGIONS[6] + 
                    CHOSEN_REGIONS[7] + CHOSEN_REGIONS[8] + CHOSEN_REGIONS[9] == 1) {
                    region_input.innerHTML = "";
                    for (var i = 0; i < 10; i++) {
                        region_input.innerHTML += REGION_LIST[i][0].repeat(CHOSEN_REGIONS[i]);
                    }
                    region_input.classList.remove("empty");
                }
                else {
                    region_input.innerHTML = "Регион учебного заведения";
                    region_input.classList.add("empty");
                }
                region_selector_icon.classList.add("reversed");
                region_selector.classList.remove("visible");
                region_chooser_border.classList.remove("choose-box-selector-focus");
                region_choose_input.classList.remove("focus");
            }
            background.classList.remove("visible");
        }
    }
}

customElements.define("selectors-elem", Selectors);