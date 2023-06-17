import { DynamicModule } from '@nestjs/common';

import { AsyncLocalStorage } from 'async_hooks';

import { AsyncRequestContext } from './async-request-context.service';

type AsyncRequestContextModuleOptions = {
  isGlobal?: boolean;
  asyncLocalStorageInstance?: AsyncLocalStorage<any>;
};

export class AsyncRequestContextModule {
  static forRoot(option?: AsyncRequestContextModuleOptions): DynamicModule {
    const isGlobal = option.isGlobal ?? true;
    const asyncLocalStorageInstance =
      option?.asyncLocalStorageInstance ?? new AsyncLocalStorage();

    return {
      module: AsyncRequestContextModule,
      global: isGlobal,
      providers: [
        {
          provide: AsyncRequestContext,
          useValue: new AsyncRequestContext(asyncLocalStorageInstance),
        },
      ],
      exports: [AsyncRequestContext],
    };
  }
}
