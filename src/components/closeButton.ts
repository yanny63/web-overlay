export class CloseButton extends HTMLElement {
    private content: string | Node
    private classTag: string

    constructor(content?: string | Node, classTag: string = "overlay-close") {
        super()
        this.content = content ?? '×'
        this.classTag = classTag
    }

    connectedCallback() {
        this.addEventListener("click", this.handleClick)
        this.setContent()
        this.classList.add(this.classTag)
    }

    disconnectedCallback() {
        this.removeEventListener("click", this.handleClick)
    }

    setContent() {
        if (typeof this.content === "string") {
            this.textContent = this.content
        }
        else {
            this.append(this.content)
        }
    }

    private handleClick() {
        this.dispatchEvent(new CustomEvent("overlay-close", {
            bubbles: true,
            detail: "Closed by the close button",
            cancelable: true
        }))
    }
}