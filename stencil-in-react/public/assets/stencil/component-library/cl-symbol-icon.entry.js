/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

class ClSymbolIcon {
    render() {
        return (h("span", null, String.fromCharCode(this.character)));
    }
    static get is() { return "cl-symbol-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "character": {
            "type": Number,
            "attr": "character"
        }
    }; }
    static get style() { return "span {\n  font-size: var(--text-sm);\n  border:1px solid white;\n  display:block;\n  padding: var(--space-xs);\n  line-height: .5em;\n  background-color: var(--color-secondary);\n  text-align: center;\n  color: #ffffff;\n  border-radius: 100%;\n}"; }
}

class ClTextBox {
    constructor() {
        /**
        * Space style props
        */
        this.spaces = [];
        this.handleSubmit = (ev) => {
            ev.preventDefault();
            this.go.emit(this.value);
        };
        this.handleChange = (event) => {
            this.value = event.target.value;
        };
    }
    handleKeyDown(ev) {
        if (ev.keyCode === 13) {
            this.handleSubmit(ev);
        }
    }
    render() {
        return (h("cl-paper", { spaces: [{ p: 'xs' }, { pl: 'md' }, ...this.spaces] },
            h("div", { class: "wrap" },
                h("input", { type: "text", value: this.value, onInput: this.handleChange }),
                h("cl-button-box", { onPressed: this.handleSubmit },
                    h("span", { class: "icon" },
                        h("cl-symbol-icon", { character: 43 }))))));
    }
    static get is() { return "cl-text-box"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "spaces": {
            "type": "Any",
            "attr": "spaces"
        },
        "value": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "go",
            "method": "go",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "keyup",
            "method": "handleKeyDown"
        }]; }
    static get style() { return ".wrap {\n  display:-ms-flexbox;\n  display:flex;\n}\n\ninput[type=\"text\"] {\n  border: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: none;\n  -ms-flex-positive: 2;\n  flex-grow: 2;\n  font-weight: var(--font-weight-7);\n  color: var(--primary);\n  font-size: inherit;\n}\n\n.icon {\n  font-size: .75em;\n}"; }
}

export { ClSymbolIcon, ClTextBox };
