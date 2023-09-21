class Enterprise {
    name: string;
}

class Product {
    name: string;
    description: string;
    enterprise: Enterprise;
}

class Catalog {
    name: string;
}

export class CreateProductOnSaleDto {
    title: string;
    price: number;
    product: Product;
    catalog: Catalog;
}