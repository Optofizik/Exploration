import { AnimationModel } from "./Models/AnimationModel";
import { TimelineLite } from "gsap";

export class Animator {
    public animate = (model: AnimationModel): void => {
        const timeline = new TimelineLite();

        for(const item of model.animations) {
            timeline.to(item.elem, 2, item.gsap);
        }
    }
}