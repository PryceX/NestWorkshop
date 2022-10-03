import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
