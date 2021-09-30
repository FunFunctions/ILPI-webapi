import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from Google';
    }
    return {
      message: 'User info from Google',
      user: req.user,
    };
  }
}
