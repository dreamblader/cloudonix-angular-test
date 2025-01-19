class Product {
  id: number = -1;
  name: string = '';
  description: string = '';
  sku: string = '';
  cost: number = 0;
  profile: { [k: string]: any } = {};
}

export default Product;
