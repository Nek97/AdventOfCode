import { Injectable } from '@nestjs/common';

@Injectable()
export class AdventService {
  getHello(): string {
    return 'Hello strunz!';
  }
  postHello(): string {
    return 'Hello strunz! (ma post)';
  }
}
