import { Image as ImageComponent, Row } from "react-bootstrap"

import welcomeImage from "../../assets/images/home/home-banner.webp"
import { useBreakpoints } from "../../hooks"

import HomeInfoLarge from "./sizes/HomeInfoLarge"
import HomeInfoSmall from "./sizes/HomeInfoSmall"

const Home = () => {
  const breakpoints = useBreakpoints()

  return (
    <>
      <Row>
        <ImageComponent className="w-100 p-0" src={welcomeImage} />
      </Row>
      <Row className="my-5">
        {breakpoints.md ? <HomeInfoLarge /> : <HomeInfoSmall />}
      </Row>
    </>
  )
}

export default Home
