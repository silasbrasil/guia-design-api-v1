import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsUUID, Max, Min } from 'class-validator';

export class FindAllQuery {
  @IsOptional()
  @IsNumber()
  @Max(100)
  @Min(1)
  @Type(() => Number)
  maxPageSize = 25;

  @IsOptional()
  @IsUUID()
  pageToken: string;
}
