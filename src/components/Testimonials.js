import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chị Nguyễn Thị Mai",
      role: "Nội trợ - Hà Nội",
      avatar: "👩",
      rating: 5,
      comment: "Tôi đã sử dụng EUCEL được 6 tháng và rất hài lòng. Sản phẩm tẩy sạch hiệu quả mà không gây kích ứng da tay như các loại nước tẩy rửa hóa học khác. Mùi thơm nhẹ nhàng, tự nhiên rất dễ chịu."
    },
    {
      name: "Anh Trần Văn Hùng",
      role: "Chủ nhà hàng - TP.HCM",
      avatar: "👨",
      rating: 5,
      comment: "Nhà hàng của tôi đã chuyển sang dùng EUCEL để rửa bát đĩa và vệ sinh nhà bếp. Nhân viên rất thích vì không hại da, khách hàng cũng yên tâm hơn khi biết chúng tôi dùng sản phẩm an toàn và thân thiện môi trường."
    },
    {
      name: "Chị Lê Thu Hà",
      role: "Giáo viên - Đà Nẵng",
      avatar: "👩‍🏫",
      rating: 5,
      comment: "Con tôi bị dị ứng da nên tôi rất cẩn thận trong việc chọn sản phẩm tẩy rửa. EUCEL Sensitive là sự lựa chọn hoàn hảo cho gia đình tôi. Sản phẩm dịu nhẹ, an toàn tuyệt đối."
    },
    {
      name: "Anh Phạm Minh Tuấn",
      role: "Chủ khách sạn - Nha Trang",
      avatar: "👨‍💼",
      rating: 5,
      comment: "Khách sạn của chúng tôi cam kết bảo vệ môi trường biển. EUCEL giúp chúng tôi thực hiện cam kết này với sản phẩm phân hủy sinh học hoàn toàn. Hiệu quả vệ sinh tốt, giá thành hợp lý."
    },
    {
      name: "Chị Võ Thị Lan",
      role: "Chủ tiệm giặt là - Cần Thơ",
      avatar: "👩‍💻",
      rating: 5,
      comment: "Tôi đã thử nhiều loại nước tẩy vết bẩn nhưng EUCEL là sản phẩm tốt nhất. Không chỉ tẩy sạch các vết bẩn khó như dầu mỡ, cà phê mà còn giữ được màu sắc vải, không làm phai."
    },
    {
      name: "Anh Hoàng Văn Nam",
      role: "Kỹ sư môi trường - Hải Phòng",
      avatar: "👨‍🔬",
      rating: 5,
      comment: "Với tư cách là người làm việc trong lĩnh vực môi trường, tôi rất ấn tượng với EUCEL. Sản phẩm thực sự thân thiện với môi trường, phân hủy hoàn toàn, không gây ô nhiễm nguồn nước. Đáng để khuyến khích sử dụng rộng rãi."
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-amber-400 text-amber-400" />
    ));
  };

  return (
    <section id="phan-hoi" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hàng nghìn khách hàng hài lòng đã tin dùng sản phẩm EUCEL
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-green-600" />
              </div>

              {/* Avatar and Info */}
              <div className="flex items-center mb-6 relative z-10">
                <div className="text-5xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-amber-500 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <p className="text-white/90">Khách hàng hài lòng</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9/5</div>
              <p className="text-white/90">Đánh giá trung bình</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-white/90">Tỷ lệ quay lại</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-white/90">Tỉnh thành phủ sóng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
