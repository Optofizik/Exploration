import { EventType } from "../EventType";
import { IAnimatorCalculator } from "./IAnimatorCalculator";
import { SecondStepAnimatorCalculator } from "./SecondStepAnimatorCalculator";

export class AnimatorCalculatorsFactory {
    public static getAnimator = (eventType: EventType): IAnimatorCalculator => {
        switch(eventType) {
            case EventType.GoToSecondStep: 
                return new SecondStepAnimatorCalculator();
        }
    }
}