import { PrismaService } from './prisma.service';

class PrismaClientModule {
  providers: any[];
  exports: any[];
  constructor() {
    this.providers = [new PrismaService()];
    this.exports = [PrismaService];
  }
}

module.exports = new PrismaClientModule();
