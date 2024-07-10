import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateImageDto {

  @IsOptional()
  url: string;

  @IsOptional()
  bannerId: number;

}