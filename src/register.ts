import { Root } from "./components/root"
import { Overlay } from "./components/overlay"
import { Content } from "./components/content"
import { Title } from "./components/title"
import { TriggerButton } from "./components/triggerButton"
import { CloseButton } from "./components/closeButton"

if (!customElements.get("overlay-root")) {
    customElements.define("overlay-root", Root)
}

if (!customElements.get("overlay-overlay")) {
    customElements.define("overlay-overlay", Overlay)
}

if (!customElements.get("overlay-content")) {
    customElements.define("overlay-content", Content)
}

if (!customElements.get("overlay-title")) {
    customElements.define("overlay-title", Title)
}

if (!customElements.get("overlay-trigger")) {
    customElements.define("overlay-trigger", TriggerButton)
}

if (!customElements.get("overlay-close")) {
    customElements.define("overlay-close", CloseButton)
}
