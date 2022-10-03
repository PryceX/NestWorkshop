import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { user } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Password',
      database: 'workshop',
      models: [user],
    }),
    UserModule,
  ],
})
export class AppModule {}
