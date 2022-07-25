import { createRouter } from './context';
import { z } from 'zod';

export const PurchasesRouter = createRouter().query('cards', {
  resolve() {
    return [
      {
        lastFourNumbers: 1000,
        expiration: new Date('10/11/2023'),
        company: 'mastercard',
        balance: 12345,
      },
    ];
  },
});
