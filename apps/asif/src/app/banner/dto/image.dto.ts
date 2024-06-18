import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateBannerImageDto {

  @IsOptional()
  url: string;

  @IsOptional()
  bannerId: number;

}