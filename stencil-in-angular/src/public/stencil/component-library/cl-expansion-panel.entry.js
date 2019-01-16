/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

class ClExpansionPanel {
    constructor() {
        /**
        * Setting this prop enables control over the panel.
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
                h("slot", { name: "description" })),
            h("cl-box", { spaces: [{ pt: 'sm' }], class: "details" },
                h("slot", { name: "details" }))));
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

export { ClExpansionPanel };
