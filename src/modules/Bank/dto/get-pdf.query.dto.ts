import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Max } from 'class-validator';

export class BankPDFQueryDTO {
  /* bank_name */
  @ApiProperty({
    required: true,
    description: '银行名称',
  })
  @IsNotEmpty({ message: 'The bank_name field is missing' })
  bank_name: string;

  /* yaer */
  @ApiProperty({
    required: true,
    description: '年份',
  })
  @IsNotEmpty({ message: 'The year field is missing' })
  year: string;
}
