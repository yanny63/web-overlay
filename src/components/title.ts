export class Title extends HTMLElement {
    private text: string
    private classTag: string

    constructor(text: string, classTag: string = "overlay-title") {
        super()
        this.text = text ?? ""
        this.classTag = classTag
    }
}