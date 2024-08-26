import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  url: string;

  @IsString()
  galleryType: string;

  @IsInt()
  subcategoryId: number;

  @IsInt()
  orderby: number;

}
