import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  categoryImage: string;

  @IsNotEmpty()
  @IsInt()
  orderby: number;

}