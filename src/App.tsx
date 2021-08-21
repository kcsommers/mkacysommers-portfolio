import { Navigator } from '@components';
import { AppRouter } from './AppRouter';

export const App = () => {
  return (
    <main
      style={{
        padding: '0.5rem',
      }}
    >
      <Navigator />
      <AppRouter />
    </main>
  );
};
