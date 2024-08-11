import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateImageDto {

  @IsOptional()
  image: string;

  @IsOptional()
  url: string;

  @IsOptional()
  employeeId: number;

  @IsOptional()
  orderby: number;
}