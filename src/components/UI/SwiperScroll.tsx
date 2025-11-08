// src/components/layout/SwiperScroll.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAmazon,
  SiWordpress,
  SiAdobephotoshop,
} from "react-icons/si";
import "swiper/css";
import "swiper/css/free-mode";

// Array de stacks com seus respectivos ícones e cores
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
    <div className="w-full py-8 mask-x-from-90% mask-x-to-95%">
      <Swiper
        modules={[Autoplay, FreeMode]}
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
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumBounce: false,
          momentumVelocityRatio: 0.5,
          sticky: false,
          minimumVelocity: 0.01,
        }}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        grabCursor={true}
        loop={true}
        
        className="py-4"
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
