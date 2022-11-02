import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    console.log('find all users controller route');
    try {
      return await this.userService.findAll();
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Cannot find users with this error: ${error.message}`,
        404,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log('find user controller route');
    try {
      return await this.userService.findOne(id);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Cannot find a user with this error: ${error.message}`,
        404,
      );
    }
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('create user controller route');
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Cannot create a user with this error: ${error.message}`,
        400,
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log('update user controller route');
    try {
      return await this.userService.update(id, updateUserDto);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Cannot update a user with this error: ${error.message}`,
        400,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log('delete user controller route');
    try {
      return await this.userService.remove(id);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Cannot delete a user with this error: ${error.message}`,
        400,
      );
    }
  }

  @Get('docker-workshop/hello')
  async helloFunction() {
    console.log('Hello route for the docker workshop!');
    try {
      return 'Hello guys!!!';
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Cannot get a response with this error: ${error.message}`,
        400,
      );
    }
  }
}
