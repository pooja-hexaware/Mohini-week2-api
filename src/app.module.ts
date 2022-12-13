import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://mohini:rjPzAKrJZ4WtBhlq@cluster0.c7g7q.mongodb.net/wiwiApp?retryWrites=true&w=majority"
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
