import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Toppings } from '../schema/toppings.module';

@Injectable()
export class toppingDetailsRepo {
    constructor(
        @InjectModel(Toppings.name)
        private readonly toppingdetailsModel: Model<Toppings>) {}

    async create(data): Promise<Toppings> {
        return new this.toppingdetailsModel(data).save();
    }

    async findAll(): Promise<Toppings[]> {
        return this.toppingdetailsModel.find({})
            .exec();
    }

    async update(toppingdetailsId, data): Promise<Toppings> {
        const filter = { _id: toppingdetailsId };
        return this.toppingdetailsModel.findOneAndUpdate(filter, data);
    }

    async delete(toppingdetailsId): Promise<Toppings> {
        const filter = { _id: toppingdetailsId };
        return this.toppingdetailsModel.findByIdAndDelete(toppingdetailsId);
    }
}