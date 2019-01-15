/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

import { a as mapSpaceStyles } from './chunk-06567094.js';

class ClBox {
    constructor() {
        this.spaces = [];
        this.isInvisible = false;
    }
    render() {
        const styles = mapSpaceStyles(this.spaces);
        const isInvisibleClass = this.isInvisible ? 'isInvisible' : '';
        return h("div", { class: isInvisibleClass, style: Object.assign({}, styles) },
            h("slot", null));
    }
    static get is() { return "cl-paper"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "isInvisible": {
            "type": Boolean,
            "attr": "is-invisible"
        },
        "spaces": {
            "type": "Any",
            "attr": "spaces"
        }
    }; }
    static get style() { return "div {\n  background-color: var(--color-white);\n  border-radius: var(--radius-lg);\n}\n\n.isInvisible {\n  background-color:transparent;\n}"; }
}

class ClText {
    render() {
        const styles = {
            fontSize: this.size ? `var(--text-${this.size})` : 'inherit',
            fontWeight: this.weight ? `var(--font-${this.weight})` : 'inherit',
        };
        return h("span", { style: Object.assign({}, styles) },
            h("slot", null));
    }
    static get is() { return "cl-text"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "size": {
            "type": String,
            "attr": "size"
        },
        "weight": {
            "type": String,
            "attr": "weight"
        }
    }; }
    static get style() { return "span {\n  display:inline-block;\n  /* padding: var(--padding-x);\n  margin: var(--margin-x); */\n}"; }
}

export { ClBox as ClPaper, ClText };
