import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { user } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([user])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
