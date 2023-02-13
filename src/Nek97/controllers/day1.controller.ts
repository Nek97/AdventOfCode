import { Controller, Get } from '@nestjs/common';
import { Day1Service } from '../services/day1.service';

@Controller('day1')
export class Day1Controller {
  constructor(private readonly day1Service: Day1Service) {}

  @Get('star1')
  star1(): string {
    return this.day1Service.getStar1();
  }
}
