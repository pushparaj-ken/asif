import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateHistoryListDto {

  @IsOptional()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  historyId: number;

}