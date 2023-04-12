import { useContext } from 'react';
import { TransitionContext } from './transition-context';
import { ITransitionContext } from './transition-context.interface';

export const useTransition = (): ITransitionContext => {
  const transitionContext: ITransitionContext = useContext(TransitionContext);

  if (transitionContext === undefined) {
    throw new Error(
      'useTransition must be used within a TransitionContextProvider'
    );
  }
  return transitionContext;
};
