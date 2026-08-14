export class Title extends HTMLHeadingElement {
    private text: string
    private classTag: string

    constructor(text: string, classTag: string = "overlay-title") {
        super()
        this.text = text ?? ""
        this.classTag = classTag
    }
}
customElements.define("<overlay-title>", Title)