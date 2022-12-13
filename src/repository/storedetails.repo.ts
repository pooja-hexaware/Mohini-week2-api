import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Store } from '../schema/store.module';

@Injectable()
export class storeDetailsRepo {
    constructor(
        @InjectModel(Store.name)
        private readonly storedetailsModel: Model<Store>) {}

    async create(data): Promise<Store> {
        return new this.storedetailsModel(data).save();
    }

    async findAll(): Promise<Store[]> {
        return this.storedetailsModel.find({})
            .exec();
    }

    async update(storedetailsId, data): Promise<Store> {
        const filter = { _id: storedetailsId };
        return this.storedetailsModel.findOneAndUpdate(filter, data);
    }

    async delete(storedetailsId): Promise<Store> {
        const filter = { _id: storedetailsId };
        return this.storedetailsModel.findByIdAndDelete(storedetailsId);
        
    }
    async searchStoreById(storedetailsId): Promise<Store> {
        const filter = { storeId: storedetailsId };
        return this.storedetailsModel.findOne(storedetailsId)}
}