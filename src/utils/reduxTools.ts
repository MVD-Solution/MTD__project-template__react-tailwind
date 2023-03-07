import { createAction } from '@reduxjs/toolkit';

export const createModuleAction = <T, Q, K>(moduleName: string, actionName: string) => {
  return {
    request: createAction<T | undefined>(`${moduleName}:${actionName}:REQUEST`),
    error: createAction<Q | undefined>(`${moduleName}:${actionName}:ERROR`),
    success: createAction<K | undefined>(`${moduleName}:${actionName}:SUCCESS`)
  };
};

export const createSagaHandler = (fn: () => void) => fn;
