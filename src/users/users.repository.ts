import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { USERS_MOCK } from '../__mocks__/USERS_MOCK';

@Injectable()
export class UsersRepository {

  create(user: Omit<User, 'id'>) {
    const id = 'uuid';
    return USERS_MOCK.push({
      ...user,
      id
    });
  }

  findById(id: string) {
    return USERS_MOCK
      .find((user) => user.id === id);
  }

  // Must be paginated
  findAll() {
    return USERS_MOCK;
  }

  update(id: string, updateUser: Partial<User>) {
    const user = USERS_MOCK
      .find((user) => user.id === id);

    if (user) {
      user.firstName = updateUser.firstName ?? user.firstName;
      user.lastName = updateUser.lastName ?? user.lastName;
      user.email = updateUser.email ?? user.email;
      user.gender = updateUser.gender ?? user.gender;
      user.avatar = updateUser.avatar ?? user.avatar;
    }

    return user;
  }

  delete(id: string) {
    const index = USERS_MOCK.findIndex((user) => user.id === id);

    if (index > -1) {
      USERS_MOCK.splice(index, 1);

      return id;
    }
  }
}