import { createContext } from 'react';
import { ITransitionContext } from './transition-context.interface';

export const TransitionContext = createContext<ITransitionContext>(
  {} as ITransitionContext
);
