/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

import { a as mapSpaceStyles } from './chunk-06567094.js';

class ClButtonBox {
    constructor() {
        this.spaces = [];
        this.onPressHandler = (event) => {
            this.onPressed.emit(event);
        };
    }
    render() {
        const styles = mapSpaceStyles(this.spaces);
        return (h("button", { style: styles, onClick: this.onPressHandler },
            h("slot", null)));
    }
    static get is() { return "cl-button-box"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "spaces": {
            "type": "Any",
            "attr": "spaces"
        }
    }; }
    static get events() { return [{
            "name": "onPressed",
            "method": "onPressed",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "button {\n  text-align:left;\n  padding:0px;\n  border:none;\n  cursor: pointer;\n  background-color: transparent;\n  font-size: inherit;\n  display: block;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}"; }
}

class ClExpansionPanel {
    constructor() {
        /*
          Setting this prop enables control over the panel.
        */
        this.isOpen = null;
        this._isOpen = false;
        this.handleSummaryPress = () => {
            this._isOpen = !this._isOpen;
            this.handleToggledPressed(this.getIsOpen());
        };
        this.handleToggledPressed = (isOpen) => {
            this.onTogglePressed.emit({ isOpen });
        };
        this.getIsOpen = () => (this.isOpen !== null)
            ? this.isOpen
            : this._isOpen;
        this.getOpenClass = () => (this.getIsOpen())
            ? 'open'
            : '';
    }
    componentWillLoad() {
        console.log('isOpen', this.isOpen);
    }
    render() {
        const openClass = this.getOpenClass();
        return (h("cl-paper", { isInvisible: !openClass, spaces: [{ p: 'md' }], class: openClass },
            h("cl-button-box", { onPressed: this.handleSummaryPress },
                h("cl-text", null, "At 3:32pm it\u2019s -11\u00B0")),
            h("cl-box", { spaces: [{ pt: 'sm' }], class: "details" },
                h("cl-text", null, "Overcast"))));
    }
    static get is() { return "cl-expansion-panel"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_isOpen": {
            "state": true
        },
        "isOpen": {
            "type": Boolean,
            "attr": "is-open"
        }
    }; }
    static get events() { return [{
            "name": "onTogglePressed",
            "method": "onTogglePressed",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".details {\n  display:none;\n}\n\n.open .details {\n  display: block;\n}"; }
}

export { ClButtonBox, ClExpansionPanel };
