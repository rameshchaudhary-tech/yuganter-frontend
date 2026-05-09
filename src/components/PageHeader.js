// import React from "react";

// export default function PageHeader({ title, subtitle, bgImage }) {
//   return (
//     <section className={`relative py-24 md:py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white overflow-hidden`}>
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-10"></div>
      
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
//         <div className="inline-block mb-4 px-4 py-2 bg-secondary-500/20 border border-secondary-400/30 rounded-full text-sm font-semibold text-secondary-300">
//           {subtitle}
//         </div>
        
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
//           {title}
//         </h1>
        
//         <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto"></div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section
      className="relative py-24 md:py-32 text-white overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950"
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-10"></div>

      {/* Dark Overlay when image is used */}
      {bgImage && (
        <div className="absolute inset-0 bg-black/60"></div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-secondary-500/20 border border-secondary-400/30 rounded-full text-sm font-semibold text-secondary-300">
          {subtitle}
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
          {title}
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto"></div>
      </div>
    </section>
  );
}