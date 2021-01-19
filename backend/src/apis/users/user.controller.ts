import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';

@Controller('users')
export class UserController {

  @Get()
  findAll(): any {
    return User.find();
  }

  @Post()
  create(@Body() payload) {
    const user = new User();
    user.name = payload.name;
    user.email = payload.email;
    return user.save();
  }
}
