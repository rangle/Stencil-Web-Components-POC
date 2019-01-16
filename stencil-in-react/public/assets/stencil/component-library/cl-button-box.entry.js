/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

import { a as mapSpaceStyles } from './chunk-f6bf1b11.js';

class ClButtonBox {
    constructor() {
        /**
        * Space style props
        */
        this.spaces = [];
        this.onPressHandler = (event) => {
            this.pressed.emit(event);
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
            "name": "pressed",
            "method": "pressed",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "button {\n  text-align:left;\n  padding:0px;\n  border:none;\n  cursor: pointer;\n  background-color: transparent;\n  font-size: inherit;\n  display: block;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}"; }
}

class ClBox {
    constructor() {
        /**
        * Space style props
        */
        this.spaces = [];
        /**
        * Hides the background
        */
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

export { ClButtonBox, ClBox as ClPaper };
