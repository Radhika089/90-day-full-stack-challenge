import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import hero from "../assets/hero/hero3.png";
// import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/banner3.png";

const slides = [hero3, hero];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#1e2e33]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        speed={800}
        grabCursor={true}
        className="aura-hero-swiper w-full">
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`AURA Coffee hero ${index + 1}`}
              className="h-[380px] w-full object-cover sm:h-[430px] md:h-[500px] lg:h-[580px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
