var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameInfoUI = (function (_super) {
        __extends(GameInfoUI, _super);
        function GameInfoUI() {
            _super.call(this);
        }
        GameInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameInfoUI.uiView);
        };
        GameInfoUI.uiView = { "type": "View", "props": { "width": 480, "label": "``", "height": 852 }, "child": [{ "type": "Button", "props": { "y": 10, "x": 403, "var": "pauseBtn", "stateNum": "1", "skin": "war/btn_pause.png" } }, { "type": "Label", "props": { "y": 24, "x": 107, "width": 91, "var": "levelLabel", "text": "Level:50", "height": 25, "fontSize": 20, "color": "#f3e9e9" } }, { "type": "Label", "props": { "y": 24, "x": 210, "width": 154, "var": "scoreLabel", "text": "Score:100", "height": 25, "fontSize": 20, "color": "#f8dd18" } }, { "type": "Label", "props": { "y": 24, "x": 24, "width": 74, "var": "hpLabel", "text": "Hp:10", "height": 25, "fontSize": 20, "color": "#62f81c" } }, { "type": "Label", "props": { "y": 297, "x": 47, "wordWrap": true, "width": 392, "var": "infoLabel", "text": "战斗结束", "height": 87, "fontSize": 30, "color": "#ffffff", "align": "center" } }] };
        return GameInfoUI;
    }(View));
    ui.GameInfoUI = GameInfoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map