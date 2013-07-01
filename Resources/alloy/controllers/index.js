function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createWindow({
        backgroundColor: "#313131",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.labelEmoji = Ti.UI.createLabel({
        text: "",
        id: "labelEmoji"
    });
    $.__views.main.add($.__views.labelEmoji);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.labelEmoji.text = "Emoji \n \n  \n \n  \n \n  \n \n  \n \n  \n \n  \n \n  \n \n  \n \n  \n \n";
    $.main.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;