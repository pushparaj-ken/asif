import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsOptional()
  roleId: number
}
