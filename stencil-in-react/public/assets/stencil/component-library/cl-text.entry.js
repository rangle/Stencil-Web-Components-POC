/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

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

export { ClText };
