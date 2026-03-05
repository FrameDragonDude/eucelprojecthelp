import React from 'react';

const ProductGallery = () => {
  const productImages = [
    { src: '/picture/sp.png', title: 'EUCEL Compressed Pad Sensitive' }
  ];

  const merchandiseImages = [
    { src: '/picture/aothun.png', title: 'Áo thun', desc: 'Thời trang thân thiện môi trường' },
    { src: '/picture/tui.png', title: 'Túi vải', desc: 'Túi tái sử dụng tiện lợi' },
    { src: '/picture/sotay.png', title: 'Sổ tay', desc: 'Giấy tái chế cao cấp' },
    { src: '/picture/butbi.png', title: 'Bút bi', desc: 'Bút viết thân thiện môi trường' },
    { src: '/picture/mubaohiem.png', title: 'Mũ bảo hiểm', desc: 'An toàn và phong cách' }
  ];

  return (
    <section id="san-pham" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sản Phẩm Của Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá dòng sản phẩm tẩy rửa sinh học và các sản phẩm thân thiện với môi trường
          </p>
        </div>

        {/* Main Product Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Sản Phẩm Chính
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {productImages.map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.src}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h4 className="text-white font-bold text-lg">{product.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Merchandise Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Sản Phẩm Quảng Cáo & Lưu Niệm
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {merchandiseImages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EUCEL Compressed Pad Original Section */}
        <div className="my-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl shadow-lg p-8 md:p-12 border-2 border-green-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-green-900 text-center mb-6">
              EUCEL Compressed Pad Original
            </h3>
            <p className="text-gray-700 text-lg leading-8 text-center mb-6">
              Theo đó, dòng EUCEL Compressed Pad Original được định giá khoảng <span className="font-bold text-green-700">1.350–1.550 đồng</span> cho mỗi lần sử dụng, tương ứng <span className="font-bold text-green-700">135.000–155.000 đồng</span> cho hộp 100 viên. Mức giá này cao hơn bông cotton thông thường nhưng thấp hơn các dòng bông tẩy trang cao cấp nhập khẩu, phản ánh sự khác biệt về vật liệu sinh học và tính tiện lợi của sản phẩm.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🌿</div>
                <p className="text-sm font-bold text-gray-900">Vật liệu sinh học</p>
                <p className="text-xs text-gray-600">100% tự nhiên</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">✨</div>
                <p className="text-sm font-bold text-gray-900">Tiện lợi cao</p>
                <p className="text-xs text-gray-600">Dễ sử dụng</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💰</div>
                <p className="text-sm font-bold text-gray-900">Giá hợp lý</p>
                <p className="text-xs text-gray-600">Chất lượng cao</p>
              </div>
            </div>
          </div>
        </div>

        {/* EUCEL Compressed Pad Sensitive Section */}
        <div className="my-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl shadow-lg p-8 md:p-12 border-2 border-purple-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-purple-900 text-center mb-6">
              EUCEL Compressed Pad Sensitive
            </h3>
            <p className="text-gray-700 text-lg leading-8 text-center mb-6">
              Đối với dòng EUCEL Compressed Pad Sensitive, được thiết kế dành cho da nhạy cảm với yêu cầu cao hơn về xử lý sợi lyocell và kiểm soát chất lượng, mức giá được điều chỉnh lên khoảng <span className="font-bold text-purple-700">1.650–1.850 đồng</span> cho mỗi lần sử dụng, tương ứng <span className="font-bold text-purple-700">165.000–185.000 đồng</span> cho hộp 100 viên. Mức giá này phù hợp với nhóm khách hàng sẵn sàng chi trả cao hơn để đảm bảo sự an toàn và cảm giác yên tâm khi sử dụng lâu dài.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm font-bold text-gray-900">Thiết kế chuyên biệt</p>
                <p className="text-xs text-gray-600">Da nhạy cảm</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⭐</div>
                <p className="text-sm font-bold text-gray-900">Chất lượng cao</p>
                <p className="text-xs text-gray-600">Kiểm soát nghiêm ngặt</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💎</div>
                <p className="text-sm font-bold text-gray-900">Giá trị cao</p>
                <p className="text-xs text-gray-600">Sử dụng lâu dài</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-amber-500 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">
            Ưu Điểm Vượt Trội
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🌿</div>
              <h4 className="font-bold mb-2">100% Tự Nhiên</h4>
              <p className="text-white/90 text-sm">Chiết xuất từ vỏ quả bồ hòn</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✨</div>
              <h4 className="font-bold mb-2">Hiệu Quả Cao</h4>
              <p className="text-white/90 text-sm">Tẩy sạch mọi vết bẩn cứng đầu</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💚</div>
              <h4 className="font-bold mb-2">An Toàn</h4>
              <p className="text-white/90 text-sm">Không gây hại cho da tay</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">♻️</div>
              <h4 className="font-bold mb-2">Thân Thiện</h4>
              <p className="text-white/90 text-sm">Phân hủy sinh học 100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
