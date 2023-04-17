import { useRouter } from 'next/router';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type TransitionContext = {
  isTransitioning: boolean;
  setIsTransitioning: Dispatch<SetStateAction<boolean>>;
};

const TRANSITION_CONTEXT = createContext({} as TransitionContext);

export const TransitionProvider = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();

  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const onRouteChangeStart = (newPath: string) => {
      if (newPath === router.asPath) {
        return;
      }
      setIsTransitioning(true);
    };

    router.events.on('routeChangeStart', onRouteChangeStart);

    return () => router.events.off('routeChangeStart', onRouteChangeStart);
  }, [router.asPath]);

  const memoizedValue = useMemo(
    () => ({
      isTransitioning,
      setIsTransitioning,
    }),
    [isTransitioning]
  );

  return (
    <TRANSITION_CONTEXT.Provider value={memoizedValue}>
      {children}
    </TRANSITION_CONTEXT.Provider>
  );
};

export const useTransition = (): TransitionContext => {
  const context: TransitionContext = useContext(TRANSITION_CONTEXT);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};
