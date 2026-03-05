import React from 'react';
import { Target, Lightbulb, Shield, Sprout, Heart } from 'lucide-react';

const VisionMission = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "An toàn",
      description: "Sản phẩm an toàn tuyệt đối cho sức khỏe",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Bền vững",
      description: "Phát triển bền vững với môi trường",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Sáng tạo",
      description: "Đổi mới và cải tiến liên tục",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Trách nhiệm",
      description: "Trách nhiệm với xã hội và cộng đồng",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Chất lượng",
      description: "Cam kết chất lượng cao nhất",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="tam-nhin" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tầm Nhìn & Sứ Mệnh
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto"></div>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700"></div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 mr-4" />
                <h3 className="text-3xl font-bold">Tầm Nhìn</h3>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Trở thành thương hiệu dẫn đầu trong lĩnh vực sản xuất và cung cấp sản phẩm tẩy rửa sinh học tại Việt Nam, góp phần xây dựng một xã hội xanh, bền vững.
              </p>
              <p className="text-lg leading-relaxed">
                Hướng đến tương lai nơi mọi gia đình đều sử dụng sản phẩm an toàn cho sức khỏe và thân thiện với môi trường.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-700"></div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-12 h-12 mr-4" />
                <h3 className="text-3xl font-bold">Sứ Mệnh</h3>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cung cấp sản phẩm tẩy rửa sinh học chất lượng cao, an toàn tuyệt đối</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bảo vệ sức khỏe người tiêu dùng và môi trường sống</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Nâng cao nhận thức cộng đồng về sản phẩm xanh</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Đóng góp vào phát triển bền vững của đất nước</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Giá Trị Cốt Lõi
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color}`}></div>
                <div className="relative p-6 text-white text-center">
                  <div className="flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm opacity-90">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
