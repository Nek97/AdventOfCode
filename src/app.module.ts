import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdventModule as Nek97Module } from './Nek97/advent.module';

@Module({
  imports: [Nek97Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
