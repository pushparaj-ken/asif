import { prismaSchema } from './prisma-schema';

describe('prismaSchema', () => {
  it('should work', () => {
    expect(prismaSchema()).toEqual('prisma-schema');
  });
});
