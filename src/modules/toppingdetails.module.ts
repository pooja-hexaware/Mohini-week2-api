import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { toppingDetailsController } from '../controllers/toppingdetails.controller';
import { toppingDetailsService } from '../services/toppingdetails.service';
import { toppingDetailsRepo } from '../repository/toppingdetails.repo';
import { ToppingSchema, Toppings } from '../schema/toppings.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Toppings.name, schema: ToppingSchema }])
    ],
    controllers: [toppingDetailsController],
    providers: [toppingDetailsService, toppingDetailsRepo],
    exports: [toppingDetailsService, toppingDetailsRepo]
  })
  export class toppingDetailsModule { }