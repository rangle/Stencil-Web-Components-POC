/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

class ClBox {
    render() {
        return h("div", null,
            h("slot", null));
    }
    static get is() { return "cl-paper"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "div {\n  background-color: var(--color-white);\n  padding: var(--space-lg);\n  border-radius: var(--radius-lg);\n}"; }
}

export { ClBox as ClPaper };
