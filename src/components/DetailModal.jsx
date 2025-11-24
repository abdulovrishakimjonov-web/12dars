import React from 'react'

const DetailModal = ({ item, onClose }) => {
  if (!item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg max-w-lg w-full p-6 z-10">
        <button className="absolute top-3 right-3 text-gray-600" onClick={onClose}>✕</button>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={item.avatar || item.image || '/img/qopcha.png'} alt={item.malumot} className="max-h-48 object-contain" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2">{item.malumot || 'No title'}</h3>
            <p className="text-sm text-gray-500 mb-3">Rating: {item.rating ?? '—'}</p>
            <p className="text-gray-700 mb-4">{item.description || item.info || 'Bu mahsulot haqida qo\'shimcha ma\'lumot mavjud emas.'}</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-[#1F2533]">{item.price ? `$${item.price}` : '$12.56'}</p>
              <button className="bg-emerald-100 text-[#359740] px-4 py-2 rounded-md">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailModal