export const calculateDiscount = (
  productPrice: number,
  discount: number,
): string => {
  if (productPrice < 0 || discount < 0) {
    return `$0`;
  }
  if (productPrice === 0 || discount === 0) {
    return `$${productPrice}`;
  }
  const discountAmount = (productPrice * discount) / 100;
  return `$${(productPrice - discountAmount).toFixed(2)}`;
};
