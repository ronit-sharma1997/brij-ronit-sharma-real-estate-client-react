export function convertHomePriceToString(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function convertHomePriceToMarker(price: number): string {
  return `$${convertHomePriceToString(Math.round(price / 1000))}k`;
}
