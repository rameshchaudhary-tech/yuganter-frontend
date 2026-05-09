import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AssociatedCompanies = () => {

  const companies = [
    {
      name: "Kevalon Technology",
      logo: "https://res.cloudinary.com/dirqmm0ky/image/upload/v1770038233/Screenshot_2026-02-02_184509-removebg-preview_jvl967.png",
    },
    {
      name: "Techmicra",
      logo: "https://techmicra.co.in/img/core-img/techlogo.png",
    },
    {
      name: "Airson Web Solutions",
      logo: "https://airsonweb.com/assets/images/resources/logo.png",
    },
    {
      name: "Metro Midas",
      logo: "https://metromidas.com/static/media/metro-midas-logo.79bdbaa635b26da0dfab.png",
    },
    {
      name: "Kevalon Technology",
      logo: "https://res.cloudinary.com/dirqmm0ky/image/upload/v1770038233/Screenshot_2026-02-02_184509-removebg-preview_jvl967.png",
    },
    {
      name: "Techmicra",
      logo: "https://techmicra.co.in/img/core-img/techlogo.png",
    },
    {
      name: "Airson Web Solutions",
      logo: "https://airsonweb.com/assets/images/resources/logo.png",
    },
    {
      name: "Metro Midas",
      logo: "https://metromidas.com/static/media/metro-midas-logo.79bdbaa635b26da0dfab.png",
    }
  ];

  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 overflow-hidden">

      {/* subtle corporate texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">
            Associated Companies
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            We Are Associated With
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We proudly connect talented professionals with leading organizations across multiple industries.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:border-primary-400/40 hover:bg-white/10 hover:-translate-y-1">

                {/* Logo container */}
                <div className="w-full h-20 flex items-center justify-center mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-16 object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                  {company.name}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default AssociatedCompanies;
