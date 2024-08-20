import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {
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

  @IsNotEmpty()
  @IsString()
  youtubelink: string;

  @IsNotEmpty()
  @IsString()
  count: string;

  @IsNotEmpty()
  @IsString()
  count_title: string;

}