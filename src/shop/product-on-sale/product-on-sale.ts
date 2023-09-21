import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ProductOnSaleDocument = HydratedDocument<ProductOnSale>;

class Enterprise {
    @Prop()
    name: string;
}

class Catalog {
    @Prop()
    name: string;
}

class Product {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise' })
    enterprise: Enterprise;
}

@Schema()
export class ProductOnSale {
    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    product: Product;

    @Prop()
    catalog: Catalog;
}

export const ProductOnSaleSchema = SchemaFactory.createForClass(ProductOnSale);
