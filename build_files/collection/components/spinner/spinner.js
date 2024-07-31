import { h, Host } from "@stencil/core/internal";
export class Spinner {
    render() {
        return (h(Host, { key: '23e62d55359b0a01622678db119254b629fe0534' }, h("div", { key: 'ce8e610e2aa2669840151fa9e6520719cc721d55', class: "lds-ring" }, h("div", { key: 'e08cc0f371ddb1a496eb12afb3efeb7c6b50a652' }), h("div", { key: 'df4068bf815e2b035dff677ae716e6e3a72b8115' }), h("div", { key: '4785d38af3b77ade0b9cdb99bf0f82f72bd4bf76' }), h("div", { key: 'abe26581838cd6abc1217bbe0bc76762bed519ac' }))));
    }
    static get is() { return "uc-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./sinner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["sinner.css"]
        };
    }
}
//# sourceMappingURL=spinner.js.map
