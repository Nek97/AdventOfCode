import { Module } from '@nestjs/common';
import { AdventController } from './advent.controller';
import { AdventService } from './advent.service';

@Module({
  imports: [],
  controllers: [AdventController],
  providers: [AdventService],
})
export class AdventModule {}
