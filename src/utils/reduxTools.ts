import { createAction } from '@reduxjs/toolkit';

export const createModuleAction = <T>(moduleName: string, actionName: string) => {
  return {
    request: createAction<T | undefined>(`${moduleName}:${actionName}:REQUEST`),
    error: createAction<T | undefined>(`${moduleName}:${actionName}:ERROR`),
    success: createAction<T | undefined>(`${moduleName}:${actionName}:SUCCESS`)
  };
};

export const createSagaHandler = (fn: () => void) => fn;
