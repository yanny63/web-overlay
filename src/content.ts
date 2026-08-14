class Content extends HTMLDivElement {
    private content: HTMLElement
    private classTag: string

    constructor(classTag: string = "overlay-content", children: HTMLElement) {
        super()
        this.content = children
        this.classTag = classTag
    }

    connectedCallback() {
        this.classList.add(this.classTag)
        this.append(this.content)
    }
}
customElements.define("<overlay-content>", Content)