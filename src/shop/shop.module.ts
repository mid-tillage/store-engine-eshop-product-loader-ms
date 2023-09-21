import { Module } from '@nestjs/common';
import { ProductOnSale, ProductOnSaleSchema } from './product-on-sale/product-on-sale';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductOnSaleController } from './product-on-sale/product-on-sale.controller';
import { ProductOnSaleService } from './product-on-sale/product-on-sale.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: ProductOnSale.name, schema: ProductOnSaleSchema }])],
    controllers: [ProductOnSaleController],
    providers: [ProductOnSaleService]
})
export class ShopModule { }
