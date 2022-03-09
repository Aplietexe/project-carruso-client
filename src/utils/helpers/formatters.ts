const formatNumber = (number: number) =>
  new Intl.NumberFormat("es-MX").format(Math.round(number))

const formatPrice = (price: number) => `$ ${formatNumber(price)}`

export { formatNumber, formatPrice }
