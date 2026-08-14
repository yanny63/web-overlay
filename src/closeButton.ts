class CloseButton extends HTMLButtonElement {
    private content: string | Node

    constructor(content?: string | Node) {
        super()
        this.content = content ?? '×'
    }

    connectedCallback() {
        this.dispatchEvent(new CustomEvent("overlay-close", {
            bubbles: true,
            detail: "Closed by the close button"
        }))
        this.setContent()
    }

    setContent() {
        if (typeof this.content === "string") {
            this.textContent = this.content
        }
        else {
            this.append(this.content)
        }
    }
}