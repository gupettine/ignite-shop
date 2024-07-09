import { HomeContainer, Product } from "@/styles/pages/home"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Image from "next/image"
import shirt1 from "@/assets/shirts/1.png"
import shirt2 from "@/assets/shirts/2.png"
import shirt3 from "@/assets/shirts/3.png"

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt X</strong>
          <span>$79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt X</strong>
          <span>$79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt X</strong>
          <span>$79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt X</strong>
          <span>$79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
