import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaServ: PrismaService) {}

  createUser(createUserDto: Prisma.UserCreateInput) {
    return this.prismaServ.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prismaServ.user.findMany();
  }

  findOne(id: string) {
    return this.prismaServ.user.findUnique({ where: { id } });
  }

  findUserByEmail(email: string) {
    return this.prismaServ.user.findUnique({ where: { email } });
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.prismaServ.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: string) {
    return this.prismaServ.user.delete({ where: { id } });
  }
}
