import { Row } from "react-bootstrap"

import welcomeImage from "../../assets/images/home/home-banner.webp"
import { useBreakpoints } from "../../hooks"
import Banner from "../Banner"

import HomeInfoLarge from "./sizes/HomeInfoLarge"
import HomeInfoSmall from "./sizes/HomeInfoSmall"

const Home = () => {
  const breakpoints = useBreakpoints()

  return (
    <>
      <Banner image={welcomeImage} />
      <Row className="my-5">
        {breakpoints.md ? <HomeInfoLarge /> : <HomeInfoSmall />}
      </Row>
    </>
  )
}

export default Home
