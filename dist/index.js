"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3003;
app.get("/onramp", function (request, response) {
    var depositAddress = request.query.wallet || "";
    var depositCurrency = request.query.crypto || "";
    console.log(depositCurrency + ':' + depositAddress);
    response.send("\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset=\"utf-8\" />\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <title>ORE ID Fiat Onramp POC</title>\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n            <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n            <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n        </head>\n        <body>\n            <div class=\"container\">\n                <h1 class=\"header\">ORE ID Fiat Onramp POC</h1>\n\n                <iframe\n                    src=\"https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0&onlyCryptos=".concat(depositCurrency, "&wallets=").concat(depositCurrency, ":").concat(depositAddress, "&isAddressEditable=false\"\n                    height=\"600px\"\n                    width=\"440px\"\n                    title=\"Onramper widget\"\n                    frameborder=\"0\"\n                    allow=\"accelerometer;\n                    autoplay; camera; gyroscope; payment\"\n                    style=\"box-shadow: 1px 1px 1px 1px\n                    rgba(0,0,0,0.2);\"\n                    >\n                    <a href=\"https://widget.onramper.com\" target=\"_blank\">Buy crypto</a>\n                </iframe>\n            </body>\n        </html>\n        "));
});
app.listen(port, function () {
    console.log("server stated at http://localhost:".concat(port));
});
// http://localhost:3003/onramp?crypto=WAXP&wallet=testsataikon
