import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { menuDetailsController } from '../controllers/menudetails.controller';
import { MenusService} from '../services/menudetails.service';
import { menusRepo } from '../repository/menudetails.repo';
import { Menus, MenuSchema} from '../schema/menu.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Menus.name, schema: MenuSchema }])
    ],
    controllers: [menuDetailsController],
    providers: [MenusService, menusRepo],
    exports: [MenusService, menusRepo]
  })
  export class menuDetailsModule { }