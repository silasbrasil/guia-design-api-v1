import { IsNumber, Max } from 'class-validator';

export class MaxPageSize {
  @IsNumber()
  @Max(100)
  value: number;
}
