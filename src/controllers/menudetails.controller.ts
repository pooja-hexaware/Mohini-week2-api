import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { menuDetailsDto } from '../dto/menudetails-dto.dto';
import { MenusService } from '../services/menudetails.service';


@Controller('menuDetails')
export class menuDetailsController {
    constructor(private readonly menudetailsService: MenusService) { }

    @Post()
    async create(@Body() menudetailsDto: menuDetailsDto) {
        const res = this.menudetailsService.create(menudetailsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.menudetailsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() menudetailsDto: menuDetailsDto) {
        return this.menudetailsService.update(id, menudetailsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.menudetailsService.delete(id);
    }
}