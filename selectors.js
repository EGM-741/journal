class Selectors extends HTMLElement {
    COUNTER = 0;
    STYLE = ``;
    HTML = ``;
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
                    min-width: 240px;
                    background-color: rgba(255,0,0,0);
                    color: rgb(128, 128, 128);
                    cursor: pointer;
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
                .choose-box-panel {
                    padding: 40px 20px 0px 20px;
                    max-width: 1200px;
                }
                .choose-box {
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: min-content;
                    text-align: left;
                }
                .choose-box-type {
                    flex: 1;
                }
                .choose-box-selector {
                    position: relative;
                    align-items: center;
                    height: 48px;
                    border: 1px;
                    border-style: solid;
                    border-color:rgb(211, 211, 211);
                    display: flex;
                    width: auto;
                    min-width: 478px;
                    background-color: rgba(255,0,0,0);
                    color: rgb(128, 128, 128);
                    cursor: pointer;
                    font-size: 18px;
                    font-family: 'Inter-Medium';
                }
                .choose-box-selector-text, .choose-box-region {
                    margin-left: 10px;
                }
                ul {
                    position: absolute;
                    visibility: hidden;
                    border: 1px;
                    border-style: solid;
                    border-color:rgb(211, 211, 211);
                    background-color: white;

                    margin-top: 120px;
                    z-index: 10;
                }
                li {
                    list-style-type: none;
                }
                @media (width > 1599px) {
                    .choose-box-panel {
                        max-width: 78vw;
                    }
                    .selector {
                        min-width: 312px;
                    }
                }
                @media (1599px >= width >= 1499px) {
                    .choose-box-panel {
                        max-width: 78vw;
                    }
                    .selector {
                        min-width: 260px;
                    }
                }
                @media (1499px > width >= 1240px) {
                    .choose-box-panel {
                        max-width: 1499px;
                    }
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
                    <div class="choose-box-type">
                        <div class="choose-box-type choose-box-text">
                            Тип учебного заведения
                        </div>
                        <div class="choose-box-type choose-box-selector">
                            <p class="choose-box-type choose-box-selector-text">Тип учебного заведения</p>
                            <ul>
                                <li><input type="checkbox" id="opt1"><label for="opt1">Опция 1</label>
                                </li>
                                <li><input type="checkbox" id="opt2"><label for="opt2">Опция 2</label>
                                </li>
                                <li><input type="checkbox" id="opt3"><label for="opt3">Опция 2</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="choose-box-type">
                        <div class="choose-box-type choose-box-region">
                            Регион учебного заведения
                        </div>
                        <div class="choose-box-type choose-box-selector">
                            <p class="choose-box-type choose-box-selector-text">Регион учебного заведения</p>
                            <ul>
                                <li><input type="checkbox" id="opt1"><label for="opt1">Опция 1</label>
                                </li>
                                <li><input type="checkbox" id="opt2"><label for="opt2">Опция 2</label>
                                </li>
                                <li><input type="checkbox" id="opt3"><label for="opt3">Опция 2</label>
                                </li>
                            </ul>
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

        const deselect = this.querySelector("#deselect");
        deselect.onclick = () => {

        }
    }
}

customElements.define("selectors-elem", Selectors);