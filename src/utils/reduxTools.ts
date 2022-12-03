import { createAction } from '@reduxjs/toolkit';

export const createModuleAction = <T>(
  moduleName: string,
  actionName: string,
) => {
  return {
    request: createAction(`${moduleName}:${actionName}:REQUEST`),
    error: createAction(`${moduleName}:${actionName}:ERROR`),
    success: createAction<T>(`${moduleName}:${actionName}:SUCCESS`),
  };
};

export const createSagaHandler = (fn: Function) => fn;
