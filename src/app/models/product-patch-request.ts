import Product from './product';

export class ProductPatchRequest {
  name: string = '';
  description: string = '';
  cost: number = 0;
  profile: { [k: string]: any } = {
    type: 'furniture',
    available: true,
  };

  fromProduct(product: Product): ProductPatchRequest {
    this.name = product.name;
    this.description = product.description;
    this.cost = product.cost;
    this.profile = product.profile;

    return this;
  }
}
