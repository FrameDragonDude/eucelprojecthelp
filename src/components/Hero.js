import React from 'react';

const Hero = () => {
  return (
    <section id="trang-chu" className="relative bg-gradient-to-br from-green-400 via-green-500 to-amber-400 py-24 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                           linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo lớn ở giữa */}
          <div className="flex justify-center mb-8">
            <img 
              src="/picture/logo.png" 
              alt="EUCEL Logo" 
              className="h-32 md:h-48 drop-shadow-2xl"
            />
          </div>

          {/* Slogan */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            EUCEL
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Bảo Vệ Trái Đất - Tương Lai Xanh
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#gioi-thieu" 
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Tìm hiểu thêm
            </a>
            <a 
              href="#san-pham" 
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Sản phẩm của chúng tôi
            </a>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
