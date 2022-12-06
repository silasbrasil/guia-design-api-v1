import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";


@Injectable()
export class UsersRepository {

  create(user: Omit<User, 'id'>) {
    return user;
  }

  findById(id: string) {
    return {};
  }

  // Must be paginated
  findAll() {
    return [];
  }

  update(id: string, updateUser: Partial<User>) {
    return {};
  }

  delete(id: string) {

  }
}