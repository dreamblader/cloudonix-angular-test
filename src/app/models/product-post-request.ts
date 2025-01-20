import Product from './product';

export class ProductPostRequest {
  name: string = '';
  description: string = '';
  sku: string = '';
  cost: number = 0;
  profile: { [k: string]: any } = {
    type: 'furniture',
    available: true,
  };

  fromProduct(product: Product): ProductPostRequest {
    this.name = product.name;
    this.description = product.description;
    this.sku = product.sku;
    this.cost = product.cost;
    this.profile = product.profile;

    return this;
  }
}
