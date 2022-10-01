import { Module } from '@nestjs/common';

import { BankModule } from './Bank/bank.module';
import { UserModule } from './Auto/user.module';

@Module({
  imports: [UserModule, BankModule],
})
export class AppModule {}
