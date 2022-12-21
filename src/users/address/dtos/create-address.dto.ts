import { MinLength } from 'class-validator';

export class CreateAddressDto {
  @MinLength(1)
  street: string;

  @MinLength(1)
  city: string;

  @MinLength(1)
  state: string;

  @MinLength(5)
  zipCode: string;
}
