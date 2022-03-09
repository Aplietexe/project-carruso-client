import { formatPrice } from "../../utils/helpers"

type MainCarInfoProps = Readonly<{
  price: number
  title: string
}>

const MainCarInfo = ({ title, price }: MainCarInfoProps) => (
  <>
    <h6 className="display-6 text-center mb-4">{title}</h6>
    <h6 className="display-6 text-center my-4">{formatPrice(price)}</h6>
  </>
)

export default MainCarInfo
