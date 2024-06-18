import { PrismaClient } from '@prisma/asif/client/prisma-schema';

class PrismaService extends PrismaClient {
  constructor() {
    super();
    this.connect();
  }

  async connect() {
    if (!this.$connect) {
      await this.$connect();
      console.log('Database connected');
    }
  }

  async disconnect() {
    if (this.$disconnect) {
      await this.$disconnect();
      console.log('Database disconnect');
    }
  }
}

export { PrismaService };
