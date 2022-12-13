import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,Schema as MongooseSchema } from 'mongoose';
import {Menus} from './menu.module';
import { Store } from './store.module';
import {Cart} from './cart.module';


export type Document = HydratedDocument<Orders>;

@Schema()
export class Orders {
  @Prop({type:MongooseSchema.Types.ObjectId
    //,required:
   // ,ref:Store.name
})
  orderId: MongooseSchema.Types.ObjectId;
  @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Menus.name })
      menuId: MongooseSchema.Types.ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Store.name })
    storeId: MongooseSchema.Types.ObjectId;


    @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Cart.name })
   cartId: MongooseSchema.Types.ObjectId;


  @Prop({ type: Number })
  price: number;
  @Prop()
  description: string;
  @Prop({type:Date,default:Date.now})
  date:Date;  
  @Prop({ required: true })
  isCouponApplied: boolean
  @Prop({type:String})
 coupon: string;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);