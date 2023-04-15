import { rest } from 'msw';
import { itemData } from '../tests/setupTests';

export const restHandler = [
  rest.get('https://api.escuelajs.co/api/v1/products/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(itemData));
  }),
  rest.get('https://api.escuelajs.co/api/v1/products/37', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...itemData[0],
      })
    );
  }),
  rest.get('https://api.escuelajs.co/api/v1/products/-1', (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
