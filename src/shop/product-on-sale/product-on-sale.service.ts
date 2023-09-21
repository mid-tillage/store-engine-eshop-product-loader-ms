import { Injectable, Logger } from '@nestjs/common';
import { ProductOnSale } from './product-on-sale';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductOnSaleDto } from './create-product-on-sale.dto';

@Injectable()
export class ProductOnSaleService {
    private readonly logger = new Logger(ProductOnSale.name);

    constructor(@InjectModel(ProductOnSale.name) private productOnSaleModel: Model<ProductOnSale>) { }

    async create(createProductOnSaleDto: CreateProductOnSaleDto): Promise<ProductOnSale> {
        const createdProductOnSale = new this.productOnSaleModel(createProductOnSaleDto);
        this.logger.debug(`Saving product... ${createdProductOnSale}`);
        return await createdProductOnSale.save();
    }
}
