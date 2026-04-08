import { RouterProvider } from '@tanstack/react-router';

import router from '~app/router';

export const View = () => (
  <>
    <RouterProvider router={router} />
  </>
);

// Ignoring error for now as this is placeholder code
// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <View />
  );
};

export default App;