export class Product {
  productId: number;
  productUrl: string;
  productImage: string;
  productName: string;
  productSize: string;
  productColor: string;
  productPrice: number;
  constructor(
    productId: number,
    productUrl = '',
    productImage = '',
    productName = '',
    productSize = '',
    productColor = '',
    productPrice = 0
  ) {
    this.productId = productId;
    this.productUrl = productUrl;
    this.productImage = productImage;
    this.productName = productName;
    this.productSize = productSize;
    this.productColor = productColor;
    this.productPrice = productPrice;
  }
}
