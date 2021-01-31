import "../main.less";
import * as ko from "knockout";
import { AppViewModel } from "./AppViewModel";

const appViewModel = new AppViewModel();
const node = document.getElementById("app");

if (node) {
    ko.applyBindings(appViewModel, node);
}
