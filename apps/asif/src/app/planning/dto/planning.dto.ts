import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {

  @IsString()
  @IsNotEmpty()
  plan_title: string;

  @IsInt()
  @IsNotEmpty()
  course_id: number;

  @IsInt()
  @IsNotEmpty()
  orderby: number;

}
