import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,Schema as MongooseSchema } from 'mongoose';
import{ Toppings} from './toppings.module';
import{Store} from './store.module';

export type Document = HydratedDocument<Menus>;

@Schema()
export class Menus {
  @Prop({type:MongooseSchema.Types.ObjectId
    //,required:
   // ,ref:Store.name
})
  menuId: MongooseSchema.Types.ObjectId;
 
@Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Store.name })
    store: MongooseSchema.Types.ObjectId;
  @Prop({type:String})
  name: string;
  @Prop({type:Array})
  toppings: [];
  @Prop({ type: Number })
  price: number;
  @Prop()
  description: string;
  @Prop({type:Date,default:Date.now})
  date:Date;
}

export const MenuSchema = SchemaFactory.createForClass(Menus);