/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

class Cl2Up {
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
    static get style() { return ".wrapper {\n  overflow:hidden;\n  border: 2px solid var(--color-gray-1);\n  width: var(--space-xxl);\n  border-radius: 100%;\n  display: inline-block;\n}\n\n.aspect-ratio {\n  height: 0;\n  position: relative;\n  padding-bottom:100%;\n}\n\n.media {\n  background-size: cover !important;\n  border-radius: 100%;\n  border: 2px solid var(--color-white);\n  position: absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n}"; }
}

class ClHeading {
    render() {
        return (h("cl-Box", null,
            h("cl-text", { color: "secondary", weight: "bold", size: "lg" },
                h("slot", null))));
    }
    static get is() { return "cl-heading"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "cl-text {\n  color: var(--color-secondary)\n}"; }
}

class ClWeatherCard {
    render() {
        return (h("cl-paper", { spaces: [{ p: 'md' }] },
            h("cl-heading", { class: "title" }, this.location),
            h("cl-2-up", null,
                h("cl-avatar", { spaces: [{ p: 'md' }], slot: "first", src: this.src }),
                h("cl-text", { color: "tertiary", slot: "second", size: "xxl", weight: "bold" }, this.temperature)),
            h("cl-text", { class: "details" }, this.details)));
    }
    static get is() { return "cl-weather-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "details": {
            "type": String,
            "attr": "details"
        },
        "location": {
            "type": String,
            "attr": "location"
        },
        "src": {
            "type": String,
            "attr": "src"
        },
        "temperature": {
            "type": String,
            "attr": "temperature"
        }
    }; }
    static get style() { return ".title {\n  text-align:center;\n}\n\n.details {\n  text-align: center;\n  display: block;\n}\n\n\n/**\n * \@prop --background: Background of the button\n * \@prop --background-activated: Background of the button when activated\n * \@prop --background-focused: Background of the button when focused\n */"; }
}

export { Cl2Up, ClAvatar, ClHeading, ClWeatherCard };
