import { Test, TestingModule } from '@nestjs/testing';
import { ProductOnSaleController } from './product-on-sale.controller';

describe('ProductOnSaleController', () => {
  let controller: ProductOnSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductOnSaleController],
    }).compile();

    controller = module.get<ProductOnSaleController>(ProductOnSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
