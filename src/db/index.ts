import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

db.snippet.create({
  data: {
    title: 'Arrow function',
    code: 'const Sum = (x, y) => x + y;',
  },
});
