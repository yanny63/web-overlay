type Ease = "ease-in-out" | "ease-out" | "ease-in" | "ease"

interface Options {
    onClickClose?: boolean
    classTag?: string
    animation?: {
        duration?: number
        ease?: Ease
        opacity?: {
            from: number
            to: number
        }
    }
}

function applyEase(progress: number, ease: Ease): number {
  switch (ease) {
    case "ease-in":
        return progress * progress;

    case "ease-out":
        return 1 - (1 - progress) ** 2;

    case "ease-in-out":
        return progress < 0.5 ? 2 * progress * progress: 1 - (-2 * progress + 2) ** 2 / 2;

    case "ease":
    default:
        return progress;
  }
}

export class Root extends HTMLDivElement {
    private onClickClose: boolean
    private blockScroll: boolean
    private options: Options
    private previousBodyOverflow = ""
    private handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            this.close()
        }
    }

    static get observedAttributes() {
        return ["close-on-click"]
    }

    constructor(onClickClose?: boolean, blockScroll?: boolean, options?: Options) {
        super()
        this.onClickClose = onClickClose ?? false
        this.blockScroll = blockScroll ?? false
        this.options = options ?? {}
    }

    connectedCallback() {
        this.classList.add(this.options?.classTag ?? "")
        this.updateListeners()
        this.updateScroll()
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

    updateListeners() {
        this.removeEventListener("overlay-close", this.close)
        this.removeEventListener("keydown", this.handleKeyDown)
        this.addEventListener("overlay-close", this.close)
        this.addEventListener("keydown", this.handleKeyDown)
    }
    
    updateScroll() {
        if (this.blockScroll) {
            this.previousBodyOverflow = document.body.style.overflow
            document.body.style.overflow = "hidden"
        }
        else document.body.style.overflow = this.previousBodyOverflow
    }

    close() {
        if (this.options?.animation) {
            this.exitAnimation()
        }
        else {
            this.remove()
        }
    } 

    exitAnimation() {
        let start: number | null = null
        const duration = this.options.animation?.duration ?? 600
        const to = this.options.animation?.opacity?.to ?? 1
        const from = this.options.animation?.opacity?.from 
        
        const animation = (t: number) => {
            if (!start) start = t
            const elapsed = t - start
            const progress = duration - elapsed
            const ease = applyEase(progress, this.options.animation?.ease ?? "ease-in-out")

            if (from) {
                const opacity = from + (to - from) * ease
                this.style.opacity = String(opacity)
            }
            
            
            if (progress < 1) {
                requestAnimationFrame(animation)
                return
            }
            this.remove()
        }
        requestAnimationFrame(animation)
    }

}

customElements.define("<overlay-root>", Root)