import { Root } from "./root"

export class Overlay extends HTMLDivElement {
    private classTag: string

    constructor(classTag: string) {
        super()
        this.classTag = classTag !== "" ? classTag : "overlay-overlay"
    }

    connectedCallback() {
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
