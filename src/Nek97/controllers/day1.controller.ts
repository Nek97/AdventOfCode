import { Controller, Get } from '@nestjs/common';
import { Day1Service } from '../services/day1.service';

@Controller('day1')
export class Day1Controller {
  constructor(private readonly day1Service: Day1Service) {}

  @Get('star1')
  star1(): number {
    return this.day1Service.getStar1();
  }

  @Get('star2')
  star2(): number {
    return this.day1Service.getStar2();
  }
}
