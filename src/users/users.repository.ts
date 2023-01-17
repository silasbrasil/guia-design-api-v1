import { Inject, Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { UserNotFoundException } from './execeptions';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  create(newUser: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: newUser });
  }

  findById(id: string): Promise<Partial<User>> {
    return this.prisma.user.findUnique({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        gender: true,
        avatar: true,
      },
      where: { id },
    });
  }

  findAll(maxPageSize: number, lastUserId?: string): Promise<Partial<User>[]> {
    // First Page
    if (!lastUserId) {
      return this.prisma.user.findMany({
        orderBy: { id: 'asc' },
        take: maxPageSize,
      });
    }

    // Next Page
    return this.prisma.user.findMany({
      where: {
        id: { gt: lastUserId }
      },
      orderBy: { id: 'asc' },
      take: maxPageSize,
    });
  }

  async update(userId: string, updateUser: Partial<User>): Promise<Partial<User>> {
    try {
      const result = await this.prisma.user.update({
        where: { id: userId },
        data: updateUser,
      });

      return result;
    } catch(err) {
      if (err.code === 'P2025') return null; // Not Found
      console.log(err);
      throw new Error(err.message);
    }
  }

  async updateOrThrowNotFound(userId: string, updateUser: Partial<User>): Promise<Partial<User>> {
    const result = await this.update(userId, updateUser);
    if (!result) throw new UserNotFoundException(userId);

    return result;
  }

  async delete(userId: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) throw new UserNotFoundException(userId);
  }
}
