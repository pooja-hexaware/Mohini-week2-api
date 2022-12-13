import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menus} from '../schema/menu.module';

@Injectable()
export class menusRepo {
    constructor(
        @InjectModel(Menus.name)
        private readonly menusModel: Model<Menus>) {}

    async create(data): Promise<Menus> {
        return new this.menusModel(data).save();
    }

    async findAll(): Promise<Menus[]> {
        return this.menusModel.find({})
            .exec();
    }

    async update(menudetailsId, data): Promise<Menus> {
        const filter = { _id: menudetailsId };
        return this.menusModel.findOneAndUpdate(filter, data);
    }

    async delete(menudetailsId): Promise<Menus> {
        const filter = { _id: menudetailsId };
        return this.menusModel.findByIdAndDelete(menudetailsId);
    }
}