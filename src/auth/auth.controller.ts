import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from 'src/generated/prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  register(@Body() dto: Prisma.UserCreateInput) {
    return this.auth.register(dto.email, dto.password);
  }

  @Post('login')
  login(@Body() dto: Prisma.UserCreateInput) {
    return this.auth.login(dto.email, dto.password);
  }
}
