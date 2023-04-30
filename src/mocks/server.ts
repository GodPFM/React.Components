import { setupServer } from 'msw/node';
import { restHandler } from './handlers';
export const server = setupServer(...restHandler);
