import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { TransitionContext } from './transition-context';
import { ITransitionContext } from './transition-context.interface';

export const TransitionContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [inTransition, setInTransition] = useState(false);

  const memoedValue = useMemo<ITransitionContext>(
    () => ({
      inTransition,
      setInTransition,
    }),
    [inTransition]
  );
  return (
    <TransitionContext.Provider value={memoedValue}>
      {children}
    </TransitionContext.Provider>
  );
};
