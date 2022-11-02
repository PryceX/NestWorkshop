import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { user } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'Password',
      // database: 'workshop',
      // models: [user],
      // for docker compose
      uri: process.env.POSRGRES_DB_URL,
      synchronize: true,
      autoLoadModels: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
