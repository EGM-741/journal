class Selectors extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setup();
    }
    render() {
        const STYLE = `
            <style>
                .selectors-panel {
                    padding: 0px 20px 0px 20px;
                }
                .selectors {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-auto-flow: row;
                    width: 100%;
                    max-width: 1700px;
                    height: min-content;
                }
                .selector {
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    display: flex;
                    height: 48px;
                    border: 1px;
                    border-style: solid;
                    border-color:rgb(211, 211, 211);
                    background-color: rgba(255,0,0,0);
                    color: rgb(128, 128, 128);
                    cursor: pointer;
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
                }
                .span.add_new {
                    color: rgb(128, 128, 128);
                }
            </style>
        `;
        this.innerHTML = `
            ${STYLE}
            <div class="selectors-panel">
            <div class="selectors">
                <div tooltip="добавить новое учебное заведение" class="selector" id="add_new">
                    <span class="selector-icon control-panel__segment-icon add_new">+</span>
                    <p  class="selector-text">
                        add a new one
                    </p>
                </div>
                <div tooltip="очистить все поля быстрого поиска" class="selector control-panel__segment" id="deselect">
                    <span class="selector-icon icon control-panel__segment-icon"></span>
                    <p  class="selector-text">
                        deselect
                    </p>
                </div>
                <div tooltip="количество найденных учеб. заведений" class="selector control-panel__segment" id="in_total">
                    <span class="selector-icon icon control-panel__segment-icon delete"></span>
                    <p  class="selector-text">
                        in total:
                    </p>
                </div>
                <div tooltip="импорт учеб. заведений из xslx" class="selector control-panel__segment" id="import">
                    <span class="selector-icon icon control-panel__segment-icon delete"></span>
                    <p  class="selector-text">
                        import
                    </p>
                </div>
                <div tooltip="экспорт учеб. заведений в xslx" class="selector control-panel__segment" id="export">
                    <span class="selector-icon icon control-panel__segment-icon delete"></span>
                    <p  class="selector-text">
                        export
                    </p>
                </div>
                <div tooltip="удалить учеб. заведения в бд" class="selector control-panel__segment" id="delete">
                    <span class="selector-icon icon control-panel__segment-icon"></span>
                    <p  class="selector-text">
                        delete everything
                    </p>
                </div>
            </div>
            </div>
        `
        
    }
    setup() {
    }
}

customElements.define("selectors-elem", Selectors);