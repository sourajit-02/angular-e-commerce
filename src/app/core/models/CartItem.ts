import { Product } from './Product';

export class CartItem {
  cartId: number;
  productId: number;
  productName: string;
  productImage: string;
  productPrice: number;
  productSize: string;
  productColor: string;
  productQty: number;
  constructor(cartId: number, product: Product, productQty = 1) {
    this.cartId = cartId;
    this.productId = product.productId;
    this.productName = product.productName;
    this.productImage = product.productImage;
    this.productPrice = product.productPrice;
    this.productSize = product.productSize;
    this.productColor = product.productColor;
    this.productQty = productQty;
  }
}
