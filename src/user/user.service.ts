import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { user } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(user)
    private userModel: typeof user,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = {
      id: randomUUID(),
      ...createUserDto,
    };

    return await this.userModel.create(user);
  }

  async findAll(): Promise<user[]> {
    const users = await this.userModel.findAll();

    if (!users) {
      throw new Error('No one user exists');
    }

    return users;
  }

  async findOne(id: string): Promise<user> {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw Error(`User with id: ${id} does not exist`);
    }

    return user;
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);

    if (!user) {
      throw Error(`User with id: ${id} does not exist`);
    }

    await this.userModel.destroy({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.update(updateUserDto, {
      where: {
        id,
      },
    });
  }
}
