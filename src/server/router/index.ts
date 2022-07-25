// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { PurchasesRouter } from './purchases';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('bank.', PurchasesRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
