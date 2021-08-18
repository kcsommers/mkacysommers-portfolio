import { Navigator } from '@components';
import { AppRouter } from './AppRouter';

export const App = () => {
  return (
    <main>
      <Navigator />
      <div
        style={{
          background: 'red',
          minHeight: '100vh',
        }}
      >
        <AppRouter />
      </div>
    </main>
  );
};
