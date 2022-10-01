import { Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller()
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: '用户注册' })
  @Post('/register')
  register(@Query(new ValidationPipe()) query: any) {
    return this.userService.getMetabase(query);
  }

  @ApiOperation({ summary: '用户注册' })
  @Post('/login')
  login(@Query(new ValidationPipe()) query: any) {
    return this.userService.getMetabase(query);
  }

  @ApiOperation({ summary: '用户注册' })
  @Get('/logout')
  logout(@Query(new ValidationPipe()) query: any) {
    return this.userService.getMetabase(query);
  }
}
