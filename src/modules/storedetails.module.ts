import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { storeDetailsController } from '../controllers/storedetails.controller';
import { storeService} from '../services/storedetails.service';
import { storeDetailsRepo } from '../repository/storedetails.repo';
import {Store,StoreSchema  } from '../schema/store.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }])
    ],
    controllers: [storeDetailsController],
    providers: [storeService, storeDetailsRepo],
    exports: [storeService, storeDetailsRepo]
  })
  export class storeDetailsModule { }