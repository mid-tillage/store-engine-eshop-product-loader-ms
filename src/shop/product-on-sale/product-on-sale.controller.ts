import { Body, Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductOnSaleService } from './product-on-sale.service';

@Controller('product-on-sale')
export class ProductOnSaleController {
    constructor(private readonly productOnSaleService: ProductOnSaleService) {}

    @EventPattern('create_product')
    create(@Body() createProductDto: any) {
      this.productOnSaleService.create(createProductDto);
    }
}
