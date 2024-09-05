import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  galleryType: string;

  @IsInt()
  orderby: number;

}
