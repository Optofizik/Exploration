import { AnimationModel } from "../Models/AnimationModel";
import { IAnimatorCalculator } from "./IAnimatorCalculator";

export class SecondStepAnimatorCalculator implements IAnimatorCalculator {

    public calculate = (scene: HTMLElement, elements: HTMLElement[]): AnimationModel => {

        const animations = [];

        let i = 0;
        for (const elem of elements) {
            animations.push({
                elem: elem,
                gsap: {
                    left: 0,
                    top: 100,
                    zIndex: elements.length - i++,
                    height: 400,
                    width: 600,
                    backgroundColor: "transparent"
                }
            });

            const coeff = 5;
            const angle = -coeff + Math.round(coeff * 2 * Math.random());
            let angleStr = "";
            if(angle > 0) {
                angleStr = `+=${angle}`;
            } else {
                angleStr = `-=${angle * -1}`;
            }
            
            animations.push({
                elem: elem.querySelector(".img-container"),
                gsap: {
                    transformOrigin:"center",
                    rotate: angleStr,
                    opacity: 1
                }
            });
        }

        const model = new AnimationModel(animations);

        return model;
    }
}