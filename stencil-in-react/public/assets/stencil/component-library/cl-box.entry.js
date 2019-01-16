/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

import { a as mapSpaceStyles } from './chunk-f6bf1b11.js';

class ClBox {
    constructor() {
        /**
        * Space style props
        */
        this.spaces = [];
    }
    render() {
        const styles = mapSpaceStyles(this.spaces);
        return (h("div", { style: Object.assign({}, styles) },
            h("slot", null)));
    }
    static get is() { return "cl-box"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "spaces": {
            "type": "Any",
            "attr": "spaces"
        }
    }; }
    static get style() { return ""; }
}

export { ClBox };
