import type { ValidCategory } from "../types"

const formatNumber = (number: number) =>
  new Intl.NumberFormat("es-MX").format(Math.round(number))

const formatPrice = (price: number) => `$ ${formatNumber(price)}`

const formatCategory = (category: ValidCategory) => {
  switch (category) {
    case "new":
      return "Nuevo"
    case "seminew":
      return "Seminuevo"
    case "utility":
      return "Utilitario"
    default:
      return category
  }
}

const formatDatetime = (stamp: number) =>
  new Intl.DateTimeFormat("es-MX").format(new Date(stamp))

export { formatNumber, formatPrice, formatCategory, formatDatetime }
