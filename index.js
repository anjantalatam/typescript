"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    var data = response.data;
    var id = data.id;
    var title = data.title;
    var completed = data.completed;
    logData(id, title, completed);
});
function logData(id, title, completed) {
    console.log("\n  A Todo with ID: ".concat(id, " ,title: ").concat(title, " and status: ").concat(completed, "\n  "));
}
