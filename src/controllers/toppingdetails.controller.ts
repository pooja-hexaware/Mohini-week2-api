import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { toppingDetailsDto } from '../dto/toppingdetails-dto.dto';
import { toppingDetailsService } from '../services/toppingdetails.service';


@Controller('toppingDetails')
export class toppingDetailsController {
    constructor(private readonly toppingdetailsService: toppingDetailsService) { }

    @Post()
    async create(@Body() toppingdetailsDto: toppingDetailsDto) {
        const res = this.toppingdetailsService.create(toppingdetailsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.toppingdetailsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() toppingdetailsDto: toppingDetailsDto) {
        return this.toppingdetailsService.update(id, toppingdetailsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.toppingdetailsService.delete(id);
    }
}