import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

}
