// auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '$2b$10$P5f8Q2FVJvZOa9RJt.oyPeC1GR4daxGzCOirZwF4YlCxSdUpwkPbK', // password is "changeme"
    },
    {
      userId: 2,
      username: 'mary',
      password: '$2b$10$lX9.P.Mhyep5UhHlV7z1gudkh./3FMBY8I.jDk7vuk0yR9V7tfK8K', // password is "changeme"
    },
  ];

  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find((u) => u.username === username);
    if (user && compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
