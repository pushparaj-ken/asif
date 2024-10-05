import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  subName: string;

  @IsNotEmpty()
  video_link: string;

  @IsString()
  backgroundImage: string;

  @IsString()
  buttonName: string;

  @IsString()
  phonenumber: string;

}