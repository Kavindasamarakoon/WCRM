import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async validatePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }

  async register(data: any) {
    return {
      message: 'Registration service ready',
      email: data.email,
    };
  }

  async login(data: any) {
    return {
      message: 'Login service ready',
      email: data.email,
    };
  }
}
