/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

class ClText {
    render() {
        const styles = {
            fontSize: this.size ? `var(--text-${this.size})` : 'inherit',
            color: this.color ? 'var(--color-${this.color}' : 'var(--color-primary)',
            fontWeight: this.weight ? `var(--font-${this.weight})` : 'bold',
        };
        return h("span", { style: Object.assign({}, styles) },
            h("slot", null));
    }
    static get is() { return "cl-text"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "weight": {
            "type": String,
            "attr": "weight"
        }
    }; }
    static get style() { return "span {\n  display:inline-block;\n  font-weight: var(--font-weight-7)\n  /* padding: var(--padding-x);\n  margin: var(--margin-x); */\n}"; }
}

export { ClText };
