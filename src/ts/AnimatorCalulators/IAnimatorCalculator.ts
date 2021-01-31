import { AnimationModel } from "../Models/AnimationModel";

export interface IAnimatorCalculator {
    calculate: (scene: HTMLElement, elements: HTMLElement[]) => AnimationModel;
}