import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  courseImage: string;

  @IsNotEmpty()
  coursethumbImage: string;

  @IsString()
  courseTiming: string;

  @IsString()
  benefits: string;

  @IsString()
  button_name: string;

  @IsString()
  button_link: string;

  @IsNotEmpty()
  @IsInt()
  categoryId: number

  @IsNotEmpty()
  @IsInt()
  orderby: number;

  @IsString()
  popular_course: boolean;

}