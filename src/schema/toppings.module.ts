import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import {Menus} from './menu.module';
import{Store} from './store.module';


export type Document = HydratedDocument<Toppings>;

@Schema()
export class Toppings {
    @Prop({
        type: MongooseSchema.Types.ObjectId
        //,required:
        // ,ref:Store.name
    })
    toppingId: MongooseSchema.Types.ObjectId;
    @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Menus.name })
    menuId: MongooseSchema.Types.ObjectId;
    @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Store.name })
    storeId: MongooseSchema.Types.ObjectId;
    @Prop({ type: String })
    name:string; 
    @Prop()
    description: string;
    @Prop({ type: Date, default: Date.now })
    date: Date;
}

export const ToppingSchema = SchemaFactory.createForClass(Toppings);