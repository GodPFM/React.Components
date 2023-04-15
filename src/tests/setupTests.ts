import { afterAll, afterEach, beforeAll } from 'vitest';
import { Item } from '../types/APIResponse';
import { server } from '../mocks/server';

beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

export const itemData: Item[] = [
  {
    id: 15,
    title: 'Modern Plastic Sausages',
    price: 719,
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    images: [
      'https://picsum.photos/640/640?r=1682',
      'https://picsum.photos/640/640?r=6407',
      'https://picsum.photos/640/640?r=3409',
    ],
    creationAt: '2023-04-14T08:53:29.000Z',
    updatedAt: '2023-04-14T08:53:29.000Z',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://picsum.photos/640/640?r=8803',
      creationAt: '2023-04-14T08:53:29.000Z',
      updatedAt: '2023-04-14T08:53:29.000Z',
    },
  },
];
