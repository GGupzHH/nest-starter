import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsMobilePhone } from 'class-validator';

export class AutoRegisterDTO {
  /* user_name */
  @ApiProperty({
    required: true,
    description: '用户名',
  })
  @IsNotEmpty({ message: 'The user_name field is missing' })
  user_name: string;

  /* email */
  @ApiProperty({
    required: true,
    description: '邮箱',
  })
  @IsNotEmpty({ message: 'The email field is missing' })
  @IsEmail()
  email: string;

  /* phone */
  @ApiProperty({
    required: true,
    description: '手机号',
  })
  @IsNotEmpty({ message: 'The phone field is missing' })
  @IsMobilePhone()
  phone: string;

  /* password */
  @ApiProperty({
    required: true,
    description: '密码',
  })
  @IsNotEmpty({ message: 'The password field is missing' })
  password: string;
}
