import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  imageOne: string;

  @IsNotEmpty()
  imageTwo: string;

  @IsString()
  imageThree: string;

  @IsString()
  description: string;

  @IsString()
  button: string;


}