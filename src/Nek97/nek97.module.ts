import { Module } from '@nestjs/common';
import { Day1Controller } from './controllers/day1.controller';
import { Day1Service } from './services/day1.service';

@Module({
  imports: [],
  controllers: [Day1Controller],
  providers: [Day1Service],
})
class Nek97Module {}

export default Nek97Module;
