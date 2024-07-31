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
                    display: flex;
                    position: relative;
                    height: 48px;
                    border: 1px;
                    border-style: solid;
                    border-color:rgb(211, 211, 211);
                    background-color: rgba(255,0,0,0);
                    color: rgb(128, 128, 128);
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
            </style>
        `;
        this.innerHTML = `
            ${STYLE}
            <div class="selectors-panel">
            <div class="selectors">
                <div tooltip="добавить новое учебное заведение" class="selector" id="add_new">
                    <p  class="selector-text">
                        add a new one
                    </p>
                </div>
                <div tooltip="deselect" class="selector" id="deselect">
                    <p  class="selector-text">
                        deselect
                    </p>
                </div>
                <div tooltip="in total" class="selector" id="in_total">
                    <p  class="selector-text">
                        in total:
                    </p>
                </div>
                <div tooltip="import" class="selector" id="import">
                    <p  class="selector-text">
                        import
                    </p>
                </div>
                <div tooltip="export" class="selector" id="export">
                    <p  class="selector-text">
                        export
                    </p>
                </div>
                <div tooltip="delete" class="selector" id="delete">
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