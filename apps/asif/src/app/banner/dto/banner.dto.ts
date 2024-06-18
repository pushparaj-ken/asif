import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBannerDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  shortDescription: string;

  @IsNotEmpty()
  @IsString()
  buttonName: string

  @IsNotEmpty()
  @IsString()
  link: string;

}