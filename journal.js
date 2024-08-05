class Journal extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setup();
    }
    render() {
        const STYLE = `
            <style>
            </style>
        `;
        this.innerHTML = `
            ${STYLE}
        `
        
    }
    setup() {
    }
}

customElements.define("journal-content", Journal);