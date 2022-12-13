import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import {Orders} from './order.module';
export type Document = HydratedDocument<Store>;

@Schema()
export class Store {
    @Prop({
        type: MongooseSchema.Types.ObjectId
        //,required:
        // ,ref:Store.name
    })
    storeId: MongooseSchema.Types.ObjectId;
    @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Orders.name})
    orderId: MongooseSchema.Types.ObjectId;
    @Prop({ type: String })
    name: string;
    @Prop({ type: Array })
    menuId: [];
    @Prop({ type: Object })
    location: {city:string,stateName:string,zip:string}
    @Prop()
    description: string;
    @Prop({ type: Date, default: Date.now })
    date: Date;
}

export const StoreSchema = SchemaFactory.createForClass(Store);