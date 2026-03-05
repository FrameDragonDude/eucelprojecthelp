import React from 'react';
import { Factory, ShoppingBag, Users, Globe } from 'lucide-react';

const BusinessAreas = () => {
  const areas = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Sản xuất",
      description: "Nhà máy sản xuất hiện đại với công nghệ chiết xuất tiên tiến, đảm bảo chất lượng sản phẩm ổn định và đồng nhất.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Phân phối",
      description: "Hệ thống phân phối rộng khắp, mang sản phẩm EUCEL đến gần hơn với người tiêu dùng trên toàn quốc.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Tư vấn",
      description: "Đội ngũ chuyên gia tư vấn giải pháp tẩy rửa sinh học phù hợp cho từng nhu cầu sử dụng.",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Xuất khẩu",
      description: "Hướng đến thị trường quốc tế, lan tỏa giá trị sản phẩm xanh Việt Nam ra thế giới.",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lĩnh Vực Hoạt Động
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EUCEL hoạt động đa dạng trong nhiều lĩnh vực, mang đến giải pháp toàn diện về sản phẩm tẩy rửa sinh học
          </p>
        </div>

        {/* Business Area Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative p-8 text-white h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  {area.title}
                </h3>
                <p className="text-center text-white/90 flex-grow">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Cam Kết Của Chúng Tôi
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-600">Tự nhiên</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">0%</div>
                <p className="text-gray-600">Hóa chất độc hại</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-gray-600">Hỗ trợ khách hàng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;
