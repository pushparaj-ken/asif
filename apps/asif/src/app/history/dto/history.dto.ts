import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image_one: string

  @IsNotEmpty()
  @IsString()
  image_two: string;

  @IsNotEmpty()
  @IsString()
  image_three: string;

}