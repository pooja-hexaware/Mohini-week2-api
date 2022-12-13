import { Injectable } from '@nestjs/common';
import { menusRepo } from '../repository/menudetails.repo';
import { MenuSchema,Menus } from '../schema/menu.module';

@Injectable()
export class MenusService {
    constructor(
        private readonly menusRepo: menusRepo
    ) { }

    async findAll(): Promise<Menus[]> {
        return this.menusRepo.findAll();
    }

    async create(data): Promise<Menus> {
        data.createddate = new Date();
        return this.menusRepo.create(data);
    }

    async update(menudetailsId, data): Promise<Menus> {
        return this.menusRepo.update(menudetailsId, data);
    }

    async delete(menuId): Promise<Menus> {
        return this.menusRepo.delete(menuId);
    }
}