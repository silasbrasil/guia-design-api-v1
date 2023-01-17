import { Transform, Type } from 'class-transformer';
import { IsBase64, IsNumber, IsOptional, IsUUID, Max, Min } from 'class-validator';

export class FindAllQuery {
  @IsOptional()
  @IsNumber()
  @Max(100)
  @Min(1)
  @Type(() => Number)
  maxPageSize = 25;

  @IsOptional()
  @IsUUID()
  @Transform((data) => {
    return Buffer.from(data.value, 'base64').toString('utf8');
  }, { toClassOnly: true })
  pageToken: string;
}
