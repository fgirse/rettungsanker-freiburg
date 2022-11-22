import React from 'react'
import Carousel from 'nuka-carousel'
import Image from 'next/image'

function CarouselComponent() {
  return (
    <Carousel wrapAround={true} autoplay={true} autoplayInterval={3000} adaptiveHeight={true}>
      <Image alt="/Impresss01" src="/Impress01.jpg" layout="responsive" height="200" width="350" />
      <Image alt="/Impresss01" src="/Impress02.jpg" layout="responsive" height="200" width="350" />
      <Image alt="/Impresss01" src="/Impress03.jpg" layout="responsive" height="200" width="350" />
      <Image alt="/Impresss01" src="/Impress04.jpg" layout="responsive" height="200" width="350" />
      <Image alt="/Impresss01" src="/Impress05.jpg" layout="responsive" height="200" width="350" />
      <Image alt="/Impresss01" src="/Impress06.jpg" layout="responsive" height="200" width="350" />
    </Carousel>
  )
}

export default CarouselComponent
