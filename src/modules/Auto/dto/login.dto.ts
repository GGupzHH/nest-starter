import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AutoLoginDTO {
  /* user_name */
  @ApiProperty({
    required: true,
    description: '用户名/邮箱/手机号',
  })
  @IsNotEmpty({ message: 'The user_name field is missing' })
  user_name: string;

  /* password */
  @ApiProperty({
    required: true,
    description: '密码',
  })
  @IsNotEmpty({ message: 'The password field is missing' })
  password: string;
}
