import { Module } from '@nestjs/common';

import { BankModule } from './Bank/bank.module';

@Module({
  imports: [BankModule],
})
export class AppModule {}
