import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  phonenumber: string;

  @IsString()
  emailaddress: string;

  @IsString()
  logo: string;

  @IsString()
  address: string;

  @IsString()
  facebook: string;

  @IsString()
  instagram: string;

  @IsString()
  skype: string;

  @IsString()
  youtube: string;

  @IsString()
  pinterest: string;

  @IsString()
  twitter: string;

}
