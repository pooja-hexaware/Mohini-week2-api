import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument ,Schema as MongooseSchema } from 'mongoose';
import { Menus } from './menu.module';
import { Store } from './store.module';
export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop({type:MongooseSchema.Types.ObjectId
    //,required:
   // ,ref:Store.name
})
  cartId: MongooseSchema.Types.ObjectId;
  @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Menus.name })
      menuId: MongooseSchema.Types.ObjectId;

      @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Store.name })
      storeId: MongooseSchema.Types.ObjectId;

  @Prop({type:Date})
  date: Date;

  
}

export const CartSchema = SchemaFactory.createForClass(Cart);