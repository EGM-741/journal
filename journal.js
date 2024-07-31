class Journal extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setup();
    }
    render() {
        const STYLE = `
            <style>
                .table {
                    margin-top: 40px;
                    padding-left: 0px;
                }
                .title {
                    padding: 0px 20px 0px 20px;
                }
                .table-title {
                    padding: 0px;
                    margin: 0px;
                    font-family: 'Inter-Medium';
                }
            </style>
        `;
        this.innerHTML = `
            ${STYLE}
            <div class="table">
            <div class="title">
                <h3 class="table-title">Журнал учебных заведений</h3>
            </div>
            </div>
        `
        
    }
    setup() {
    }
}

customElements.define("journal-content", Journal);