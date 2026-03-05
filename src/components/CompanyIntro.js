import React from 'react';
import { Leaf, Recycle, Heart } from 'lucide-react';

const CompanyIntro = () => {
  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Sản phẩm Thiên nhiên",
      description: "100% từ nguyên liệu tự nhiên, an toàn cho sức khỏe"
    },
    {
      icon: <Recycle className="w-12 h-12 text-green-600" />,
      title: "Thân thiện Môi trường",
      description: "Phân hủy sinh học, không gây ô nhiễm"
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: "An toàn tuyệt đối",
      description: "Không chứa hóa chất độc hại, phù hợp mọi lứa tuổi"
    }
  ];

  return (
    <section id="gioi-thieu" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Giới Thiệu Về <span className="text-green-600">EUCEL</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Introduction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong className="text-green-600">EUCEL</strong> (ECO-FRIENDLY UNIVERSAL CLEANING EXTRACTION LIQUID) là công ty chuyên sản xuất và cung cấp nước tẩy rửa sinh học từ vật liệu tự nhiên. Chúng tôi cam kết mang đến những sản phẩm an toàn, thân thiện với môi trường và hiệu quả cao.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Đặc điểm nổi bật:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Nguồn gốc tự nhiên:</strong> Sản phẩm được chiết xuất từ vỏ quả bồ hòn, hoàn toàn tự nhiên</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>An toàn tuyệt đối:</strong> Không chứa hóa chất độc hại, không gây kích ứng da</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Thân thiện môi trường:</strong> Phân hủy sinh học 100%, không gây ô nhiễm nguồn nước</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Hiệu quả cao:</strong> Khả năng tẩy rửa mạnh mẽ, loại bỏ vết bẩn đa dạng</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Đa năng:</strong> Sử dụng cho nhiều bề mặt và vật liệu khác nhau</span>
              </li>
            </ul>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl border-l-4 border-green-500">
              <p className="text-gray-800 italic">
                "EUCEL không chỉ là sản phẩm tẩy rửa, mà còn là lời cam kết của chúng tôi trong việc bảo vệ sức khỏe con người và môi trường sống xanh, sạch, đẹp cho thế hệ tương lai."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
