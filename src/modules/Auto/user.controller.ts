import { Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AutoLoginDTO } from './dto/login.dto';
import { AutoRegisterDTO } from './dto/register.dto';
import { UserService } from './user.service';

@Controller()
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '用户登录' })
  @Post('/login')
  login(@Query(new ValidationPipe()) query: AutoLoginDTO) {
    return this.userService.getMetabase(query);
  }

  @ApiOperation({ summary: '用户注册' })
  @Post('/register')
  register(@Query(new ValidationPipe()) query: AutoRegisterDTO) {
    return this.userService.getMetabase(query);
  }

  @ApiOperation({ summary: '用户退出' })
  @Get('/logout')
  logout(@Query(new ValidationPipe()) query: any) {
    return this.userService.getMetabase(query);
  }
}
