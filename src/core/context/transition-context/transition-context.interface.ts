export interface ITransitionContext {
  inTransition: boolean;
  setInTransition: (inTransition: boolean) => void;
}
