import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { User } from './user.entity';

@Controller('users')
export class UserController {

  @Get()
  findAll(): any {
    return User.find();
  }

  @Post()
  async create(@Body() payload) {
    try {
      // All of this code should be in a repository
      const user = new User();
      user.name = payload.name;
      user.email = payload.email;
      await user.save();
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new HttpException('This email address already exists', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
