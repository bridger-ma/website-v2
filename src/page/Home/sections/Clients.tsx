"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "@/components/SectionTitle";
import { Client } from "@/lib/types";

interface ClientsProps {
  clients: Client[];
}

export default function Clients({ clients }: ClientsProps) {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        (sectionRef.current as HTMLElement).classList.add("fade-in-up");
      }
    }, 100);
  
    return () => clearTimeout(timer);
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <section id="clients" className="py-20 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Trusted Clients"
          description="We're proud to work with industry leaders who trust us to drive their digital transformation. Our clients span various sectors, each benefiting from our tailored, cutting-edge solutions."
        />
        <div className="relative px-4 md:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
          <Slider
            ref={sliderRef}
            {...settings}
            className="client-carousel -mx-4"
          >
            {clients.map((client, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full p-1 flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 hover:scale-110">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full rounded-full"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+"
                      />
                    </div>
                  </div>
                  <p className="text-sm md:text-lg font-medium text-center transition-all duration-300 text-gray-300 hover:text-cyan-500">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
