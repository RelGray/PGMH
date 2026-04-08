import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import Resume from '~features/resume/components/Resume';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = createRoute({
  component: () => (
    <div>
      <Resume />
    </div>
  ),
  getParentRoute: () => rootRoute,
  path: '/',
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

export default router;
