export class Root extends HTMLDivElement {
    private onClickClose: boolean
    private classTag: string

    static get observedAttributes() {
        return ["close-on-click"]
    }

    constructor(onClickClose: boolean, classTag: string) {
        super()
        this.onClickClose = onClickClose
        this.classTag = classTag !== "" ? classTag : "overlay-root"
    }

    connectedCallback() {
        this.classList.add(this.classTag)
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === "close-on-click") {
            newValue ? this.setAttribute("close-on-click", "") : this.removeAttribute("close-on-click")
        }
    }

    get getClose() {
        return this.onClickClose
    }
    
    set setClose(close: boolean) {
        this.onClickClose = close
    }

    close() {
        this.dispatchEvent(new CustomEvent("overlay-close", {
            bubbles: true
        }))
        this.remove()
    } 

}

customElements.define("<overlay-root>", Root)