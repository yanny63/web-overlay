export class TriggerButton extends HTMLElement {
    private forRootId: string | null
    private classTag: string 
    private innerContent: string | null

    static get observedAttributes() {
        return ["for"]
    }

    constructor(forRootId?: string, classTag: string = "overlay-trigger", innerText?: string ) {
        super()
        this.forRootId = forRootId || null
        this.classTag = classTag
        this.innerContent = innerText || null
    }

    connectedCallback() {
        this.forRootId ??= this.getAttribute("for")

        if (!this.forRootId || !document.getElementById(this.forRootId)) {
            throw new Error('The "for" attribute must match the id of an existing root element.')
        }

        const root = document.getElementById(this.forRootId)
        if (root) {
            this.addEventListener("click", this.displayRoot)
        }
        if (!this.hasChildNodes()) {
            this.textContent = this.innerContent
        }
        this.classList.add(this.classTag)
    }

    disconnectedCallback() {
        this.removeEventListener("click", this.displayRoot)
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === "for") {
            const root = document.getElementById(newValue)
            if (!root) {
                this.setAttribute("for", oldValue)
                throw new Error('The "for" attribute must match the id of an existing root element.')
            }
        }
    }

    displayRoot() {
        const root = document.getElementById(this.forRootId ?? "")
        if (!root) {
            throw new Error(`A root element with id "${this.forRootId}" does not exist.`)
        }
        root.classList.add("root-visible")
    }
}