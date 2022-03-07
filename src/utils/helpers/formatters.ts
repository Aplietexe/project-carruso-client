const formatNumber = (number: number) =>
  new Intl.NumberFormat("es-MX").format(Math.round(number))

export { formatNumber }
