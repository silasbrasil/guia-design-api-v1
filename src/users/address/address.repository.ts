import { ADDRESSES_MOCK } from "src/__mocks__/ADDRESSES_MOCK";
import { Address } from "./entities";


export class AddressRepository {
  create(address: Omit<Address, 'id'>) {
    const id = 'uuid';
    return ADDRESSES_MOCK.push({
      ...address,
      id,
    });
  }

  findById(id: string) {
    return ADDRESSES_MOCK.find((user) => user.id === id);
  }

  // Maybe it is can be called by list
  findAll(maxPageSize: number) {
    return ADDRESSES_MOCK.slice(0, maxPageSize);
  }

  update(id: string, updateAddress: Partial<Address>) {
    const address = ADDRESSES_MOCK.find((address) => address.id === id);

    if (address) {
      address.street = updateAddress.street ?? address.street;
      address.city = updateAddress.city ?? address.city;
      address.state = updateAddress.state ?? address.state;
      address.zipCode = updateAddress.zipCode ?? address.zipCode;
    }

    return address;
  }

  delete(id: string) {
    const index = ADDRESSES_MOCK.findIndex((user) => user.id === id);

    if (index > -1) {
      ADDRESSES_MOCK.splice(index, 1);

      return id;
    }
  }
}