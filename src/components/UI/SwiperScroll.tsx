// src/components/layout/SwiperScroll.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAmazon,
  SiWordpress,
  SiAdobephotoshop,
  SiJavascript,
} from "react-icons/si";
import "swiper/css";

const techStacks = [
  { name: "HTML 5", icon: SiHtml5 },
  { name: "CSS 3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "AWS", icon: SiAmazon },
  { name: "WordPress", icon: SiWordpress },
  { name: "Photoshop", icon: SiAdobephotoshop },
];

export default function SwiperScroll() {
  return (
    <div className="w-full py-12 md:py-24 mask-x-from-90% mask-x-to-95%">
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          pauseOnMouseEnter: false, 
          reverseDirection: false,
        }}
        loop={true}
        className="swiper-marquee"
      >
        {techStacks.map((tech) => (
          <SwiperSlide key={tech.name}>
            <div className="flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform duration-300 text-gray-600 hover:text-lime-500">
              <tech.icon className={`text-4xl md:text-5xl mb-2`} />
              <span className="text-xs md:text-sm text-center mt-2">
                {tech.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}