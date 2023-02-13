import { Controller, Get, Post } from '@nestjs/common';
import { AdventService } from './advent.service';

@Controller('bagno')
export class AdventController {
  constructor(private readonly adventService: AdventService) {}

  @Get()
  getHello(): string {
    return this.adventService.getHello();
  }

  @Post()
  postHello(): string {
    return this.adventService.postHello();
  }
}
