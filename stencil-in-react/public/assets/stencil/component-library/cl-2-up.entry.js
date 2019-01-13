/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

import { a as mapSpaceStyles } from './chunk-cc6147d0.js';

class ClBox {
    render() {
        return (h("div", { class: "wrap" },
            h("div", { class: "item" },
                h("slot", { name: "first" })),
            h("div", { class: "item" },
                h("slot", { name: "second" }))));
    }
    static get is() { return "cl-2-up"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".wrap {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}"; }
}

class ClAvatar {
    render() {
        return (h("cl-box", { spaces: this.spaces },
            h("div", { class: "wrapper" },
                h("div", { class: "aspect-ratio" },
                    h("div", { class: "media", style: { background: `url(${this.src})` } })))));
    }
    static get is() { return "cl-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "spaces": {
            "type": "Any",
            "attr": "spaces"
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
    static get style() { return ".wrapper {\n  overflow:hidden;\n  border: var(--space-xxs) solid var(--color-gray-1);\n  width: var(--space-xxl);\n  border-radius: 100%;\n  display: inline-block;\n}\n\n.aspect-ratio {\n  height: 0;\n  position: relative;\n  padding-bottom:100%;\n}\n\n.media {\n  background-size: cover !important;\n  border-radius: 100%;\n  border: var(--space-xxs) solid var(--color-white);\n  position: absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n}"; }
}

class ClHeading {
    render() {
        return (h("cl-Box", null,
            h("cl-text", { weight: "bold", size: "lg" },
                h("slot", null))));
    }
    static get is() { return "cl-heading"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "cl-text {\n  color: var(--color-secondary)\n}"; }
}

class ClBox$1 {
    constructor() {
        this.spaces = [];
    }
    render() {
        const styles = mapSpaceStyles(this.spaces);
        return h("div", { style: Object.assign({}, styles) },
            h("slot", null));
    }
    static get is() { return "cl-paper"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "spaces": {
            "type": "Any",
            "attr": "spaces"
        }
    }; }
    static get style() { return "div {\n  background-color: var(--color-white);\n  border-radius: var(--radius-lg);\n}"; }
}

class ClWeatherCard {
    render() {
        return (h("cl-paper", { spaces: [{ p: 'md' }] },
            h("cl-heading", { class: "title" }, "Toronto"),
            h("cl-2-up", null,
                h("cl-avatar", { spaces: [{ p: 'md' }], slot: "first", src: 'http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png' }),
                h("cl-text", { slot: "second", size: "xxl", weight: "bold" }, "-11\u00B0")),
            h("cl-text", { class: "details" }, "Heavy Snow")));
    }
    static get is() { return "cl-weather-card"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".title {\n  text-align:center;\n}\n\n.details {\n  text-align: center;\n  display: block;\n}"; }
}

export { ClBox as Cl2Up, ClAvatar, ClHeading, ClBox$1 as ClPaper, ClWeatherCard };
