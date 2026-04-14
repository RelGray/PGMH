import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  HeadContent,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import Resume from '~features/resume/components/Resume';

import classes from '~app/Router.module.css'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <HeadContent />

      {/* ToDo: Header navigation? */}

      <main className={classes['main']}>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = createRoute({
  component: () => (
    <Resume />
  ),
  getParentRoute: () => rootRoute,
  path: '/',
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

export default router;
