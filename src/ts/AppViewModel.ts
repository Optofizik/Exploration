import * as ko from "knockout";
import { Animator } from "./Animator";
import { AnimatorCalculatorsFactory } from "./AnimatorCalulators/AnimatorCalculatorsFactory";
import { EventType } from "./EventType";
import { ITileModel } from "./Models/ITileModel";
import { Tile } from "./Tile";

export class AppViewModel {
    public appName: KnockoutObservable<string> = ko.observable("Exploration");

    public tiles: KnockoutObservableArray<Tile> = ko.observableArray([]);

    private animator: Animator = new Animator();

    constructor() {
        const models = this.getStubModel().map((mod) => new Tile(mod));
        this.tiles(models);
    }

    public nextStep = () => {
        const scene = document.getElementById("scene");
        const nodes = Array.from(scene.querySelectorAll(".tile")).map((node) => node as HTMLElement);

        const calculator = AnimatorCalculatorsFactory.getAnimator(EventType.GoToSecondStep);
        const calculations = calculator.calculate(scene, nodes);

        this.animator.animate(calculations);
    }

    private getStubModel = (): ITileModel[] => {
        const model: ITileModel[] =[
            {
              width: 2,
              height: 1,
              top: 2,
              left: 0,
               color: "red",
               img: "src/images/1.jpg"
            },
            {
              width: 1,
              height: 1,
              top: 0,
              left: 0,
              color: "yellow",
              img: "src/images/2.jpg"
            },
            {
              width: 1,
              height: 2,
              top: 0,
              left: 1,
              color: "green",
              img: "src/images/3.jpg"
            },
            {
              width: 2,
              height: 2,
              top: 2,
              left: 2,
              color: "blue",
              img: "src/images/4.jpg"
            },
            {
              width: 1,
              height: 1,
              top: 0,
              left: 2,
              color: "green",
              img: "src/images/5.jpg"
            },
            {
              width: 1,
              height: 1,
              top: 1,
              left: 3,
              color: "yellow",
              img: "src/images/6.jpg"
            },
            {
              width: 1,
              height: 1,
              top: 3,
              left: 0,
              color: "red",
              img: "src/images/7.jpg"
            }
          ];

          return model;
    }
}