import React from 'react';
import { Mail, Phone, MapPin, Globe, Building2, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Điện thoại",
      info: "+84 123 456 789",
      subInfo: "Thứ 2 - Thứ 7: 8:00 - 18:00",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      info: "contact@eucel.vn",
      subInfo: "Phản hồi trong 24h",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Địa chỉ",
      info: "123 Đường ABC, Quận XYZ",
      subInfo: "TP. Hồ Chí Minh, Việt Nam",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website",
      info: "www.eucel.vn",
      subInfo: "Truy cập 24/7",
      color: "from-purple-400 to-purple-600"
    }
  ];

  const offices = [
    {
      icon: <Building2 className="w-6 h-6" />,
      name: "Văn phòng Hà Nội",
      address: "456 Đường DEF, Quận ABC, Hà Nội",
      phone: "+84 987 654 321"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      name: "Văn phòng Đà Nẵng",
      address: "789 Đường GHI, Quận KLM, Đà Nẵng",
      phone: "+84 456 789 123"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      name: "Nhà máy sản xuất",
      address: "Khu công nghiệp ABC, Tỉnh XYZ",
      phone: "+84 321 654 987"
    }
  ];

  return (
    <>
      <section id="lien-he" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Liên Hệ Với Chúng Tôi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color}`}></div>
                <div className="relative p-6 text-white text-center">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="font-semibold mb-1">{method.info}</p>
                  <p className="text-sm text-white/80">{method.subInfo}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Offices */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Gửi Tin Nhắn Cho Chúng Tôi
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Họ và tên</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+84 123 456 789"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tin nhắn</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nội dung tin nhắn..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Địa Điểm Văn Phòng
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors"
                    >
                      <div className="text-green-600 mt-1 mr-4">
                        {office.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{office.name}</h4>
                        <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                        <p className="text-green-600 font-semibold text-sm">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-green-500 to-amber-500 rounded-3xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Kết Nối Với Chúng Tôi
                </h3>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  {/* QR Code Section */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <img 
                      src="/picture/qr.png" 
                      alt="QR Code Facebook EUCEL" 
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                    <p className="text-gray-800 text-sm font-semibold text-center mt-2">
                      Quét mã để kết nối
                    </p>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex flex-col items-center">
                    <p className="text-white/90 mb-4 text-center">Theo dõi chúng tôi trên</p>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook EUCEL"
                        className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all transform hover:scale-110"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram EUCEL"
                        className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all transform hover:scale-110"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter EUCEL"
                        className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all transform hover:scale-110"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img src="/picture/logo.png" alt="EUCEL Logo" className="h-16 mb-4" />
              <p className="text-green-400 font-semibold mb-3 text-sm">Natural</p>
              <p className="text-gray-400 mb-4">
                EUCEL - Nước tẩy rửa sinh học từ thiên nhiên. Cam kết mang đến sản phẩm an toàn, thân thiện với môi trường và hiệu quả cao.
              </p>
              <p className="text-gray-400 text-sm">
                © 2024 EUCEL. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2">
                <li><a href="#gioi-thieu" className="text-gray-400 hover:text-green-400 transition-colors">Giới thiệu</a></li>
                <li><a href="#tam-nhin" className="text-gray-400 hover:text-green-400 transition-colors">Tầm nhìn</a></li>
                <li><a href="#san-pham" className="text-gray-400 hover:text-green-400 transition-colors">Sản phẩm</a></li>
                <li><a href="#lien-he" className="text-gray-400 hover:text-green-400 transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-lg mb-4">Hỗ trợ</h4>
              <ul className="space-y-2">
                <li><a href="/chinh-sach-bao-mat" className="text-gray-400 hover:text-green-400 transition-colors">Chính sách bảo mật</a></li>
                <li><a href="/dieu-khoan-su-dung" className="text-gray-400 hover:text-green-400 transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="/chinh-sach-doi-tra" className="text-gray-400 hover:text-green-400 transition-colors">Chính sách đổi trả</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-green-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Được thiết kế với ❤️ vì một tương lai xanh hơn</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactInfo;
