import { Injectable } from '@nestjs/common';
import { toppingDetailsRepo } from '../repository/toppingdetails.repo';
import { Toppings } from '../schema/toppings.module';

@Injectable()
export class toppingDetailsService {
    constructor(
        private readonly toppingdetailsRepo: toppingDetailsRepo
    ) { }

    async findAll(): Promise<Toppings[]> {
        return this.toppingdetailsRepo.findAll();
    }

    async create(data): Promise<Toppings> {
        data.createddate = new Date();
        return this.toppingdetailsRepo.create(data);
    }

    async update(toppingId, data): Promise<Toppings> {
        return this.toppingdetailsRepo.update(toppingId, data);
    }

    async delete(toppingId): Promise<Toppings> {
        return this.toppingdetailsRepo.delete(toppingId);
    }
}