export class Content extends HTMLElement {
    private content: HTMLElement | null
    private classTag: string

    constructor(classTag: string = "overlay-content", children?: HTMLElement) {
        super()
        this.content = children || null
        this.classTag = classTag
    }

    connectedCallback() {
        this.classList.add(this.classTag)
        if (this.content !== null) {
            this.append(this.content)
        }
    }
}