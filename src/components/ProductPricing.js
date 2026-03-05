import React from 'react';
import { Package, Star } from 'lucide-react';

const ProductPricing = () => {
  const pricingPlans = [
    {
      name: "EUCEL Original",
      subtitle: "Dòng sản phẩm gốc",
      price: "1.350–1.550 đ/lần",
      priceBox: "135.000–155.000 đ",
      icon: <Package className="w-12 h-12" />,
      features: [
        "Chiết xuất từ vỏ quả bồ hòn tự nhiên",
        "Công thức chuẩn, hiệu quả cao",
        "An toàn cho mọi lứa tuổi",
        "Phân hủy sinh học 100%",
        "Đa dạng dung tích: 500ml, 1L, 5L",
        "Phù hợp sử dụng gia đình"
      ],
      gradient: "from-green-400 to-green-600",
      popular: true
    },
    {
      name: "EUCEL Sensitive",
      subtitle: "Dòng dành cho da nhạy cảm",
      price: "1.650–1.850 đ/lần",
      priceBox: "165.000–185.000 đ",
      icon: <Star className="w-12 h-12" />,
      features: [
        "Công thức đặc biệt cho da nhạy cảm",
        "pH cân bằng, siêu dịu nhẹ",
        "Không mùi, không màu",
        "Thành phần thiên nhiên 100%",
        "Kiểm định an toàn da liễu",
        "Lý tưởng cho trẻ em và người lớn tuổi"
      ],
      gradient: "from-amber-400 to-amber-600",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bảng Giá Sản Phẩm
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn sản phẩm phù hợp với nhu cầu của bạn
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-all ${
                plan.popular ? 'ring-4 ring-green-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold rounded-bl-2xl">
                  Phổ biến nhất
                </div>
              )}

              {/* Header with Gradient */}
              <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white`}>
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">{plan.name}</h3>
                <p className="text-center text-white/90 mb-6">{plan.subtitle}</p>
                <div className="text-center">
                  <div className="text-5xl font-bold">{plan.price}</div>
                  <p className="text-white/90 mt-2 text-lg font-semibold">{plan.priceBox}/hộp 100 viên</p>
                </div>
              </div>

              {/* Features List */}
              <div className="bg-white p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full mt-8 bg-gradient-to-r ${plan.gradient} text-white font-bold py-4 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all`}>
                  Liên hệ đặt hàng
                </button>
                <p className="text-center text-gray-500 text-sm mt-3 font-semibold">
                  Từ {plan.priceBox}/hộp 100 viên
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Chính Sách Đặc Biệt
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-bold text-gray-900 mb-2">Ưu đãi số lượng</h4>
              <p className="text-gray-600 text-sm">Giảm giá đặc biệt cho đơn hàng lớn</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="font-bold text-gray-900 mb-2">Miễn phí vận chuyển</h4>
              <p className="text-gray-600 text-sm">Với đơn hàng trên 1 triệu đồng</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-bold text-gray-900 mb-2">Đổi trả dễ dàng</h4>
              <p className="text-gray-600 text-sm">Trong vòng 30 ngày nếu không hài lòng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPricing;
