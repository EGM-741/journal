class Journal extends HTMLElement {
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
            <div class="title-wrapper table-title medium">
                <h3>Журнал учебных заведений</h3>
            </div>
            </div>
        `
        
    }
    setup() {
    }
}

customElements.define("journal-content", Journal);