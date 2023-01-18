import { Injectable, NotImplementedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Address } from './entities';

@Injectable()
export class AddressRepository {
  create(address: Prisma.AddressCreateInput): Promise<Address> {
    throw new NotImplementedException();
  }

  findById(id: string): Promise<Address> {
    throw new NotImplementedException();
  }

  // Maybe it is can be called by list
  findAll(maxPageSize: number): Promise<Address[]> {
    throw new NotImplementedException();
  }

  update(id: string, updateAddress: Partial<Address>): Promise<Address> {
    throw new NotImplementedException();
  }

  delete(id: string): Promise<string> {
    throw new NotImplementedException();
  }
}
