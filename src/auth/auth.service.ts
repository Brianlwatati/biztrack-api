import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userServ: UserService,
    private jwt: JwtService,
  ) {}

  async register(email: string, password: string) {
    if (email.length < 5 || password.length < 5) {
      throw new UnauthorizedException(
        'Email and password must be at least 5 characters long',
      );
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await this.userServ.createUser({
      email,
      password: hashed,
      role: 'USER',
    });
    return this.signTokenFunction(user.id, user.email, user.role);
  }

  async login(email: string, password: string) {
    const user = await this.userServ.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new UnauthorizedException('Invalid credentials');

    return this.signTokenFunction(user.id, user.email, user.role);
  }

  private signTokenFunction(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };

    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
