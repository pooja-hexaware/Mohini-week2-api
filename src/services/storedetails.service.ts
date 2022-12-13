import { Injectable } from '@nestjs/common';
import { storeDetailsRepo } from '../repository/storedetails.repo';
import { Store } from '../schema/store.module';

@Injectable()
export class storeService {
    constructor(
        private readonly storedetailsRepo: storeDetailsRepo
    ) { }

    async findAll(): Promise<Store[]> {
        return this.storedetailsRepo.findAll();
    }

    async create(data): Promise<Store> {
        data.createddate = new Date();
        return this.storedetailsRepo.create(data);
    }

    async update(storeId, data): Promise<Store> {
        return this.storedetailsRepo.update(storeId, data);
    }

    async delete(storeId): Promise<Store> {
        return this.storedetailsRepo.delete(storeId);
    }
}