import { ITileModel } from "./Models/ITileModel";
import * as ko from "knockout";

export class Tile {
    public color: KnockoutObservable<string> = ko.observable("");

    public left: KnockoutObservable<number> = ko.observable(0);
    public top: KnockoutObservable<number> = ko.observable(0);
    public width: KnockoutObservable<number> = ko.observable(0);
    public height: KnockoutObservable<number> = ko.observable(0);

    public img: KnockoutObservable<string> = ko.observable("");

    constructor(model: ITileModel) {
        this.color(model.color);
        this.left(model.left);
        this.top(model.top);
        this.width(model.width);
        this.height(model.height);
        this.img(model.img);
    }

    public computedStyle = ko.computed(() => {
        const color = this.color();
        const left = this.left();
        const top = this.top();
        const width = this.width();
        const height = this.height();

        return `${color} left-${left} top-${top} width-${width} height-${height}`;
    });
}