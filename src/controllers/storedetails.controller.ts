import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { storeDetailsDto } from '../dto/storedetails-dto.dto';
import { storeService } from '../services/storedetails.service';


@Controller('storeDetails')
export class storeDetailsController {
    constructor(private readonly storeService: storeService) { }

    @Post()
    async create(@Body() storedetailsDto: storeDetailsDto) {
        const res = this.storeService.create(storedetailsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.storeService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() storedetailsDto: storeDetailsDto) {
        return this.storeService.update(id, storedetailsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.storeService.delete(id);
    }
}