import { Root } from "./root"

export class Overlay extends HTMLElement {
    private classTag: string

    constructor(classTag: string = "overlay-overlay") {
        super()
        this.classTag = classTag 
    }

    connectedCallback() {
        this.classList.add(this.classTag)
        this.addEventListener("click", this.handleClick)
    }

    disconnectedCallback() {
        this.removeEventListener("click", this.handleClick)
    }

    handleClick() {
        const root = this.closest("overlay-root") as Root | null
        if (root?.getClose) {
            root.close()
        }
    }
}