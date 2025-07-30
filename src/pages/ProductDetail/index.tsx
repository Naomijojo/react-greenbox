import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { fakeData } from '@/components/ProductList'
import { Product } from '@/type/product'

const ProductDetail = () => {
  const { id } = useParams()
  const [imageErr, setImageErr] = useState<Set<number>>(new Set())

  const product = fakeData.find((product: Product) => product.id === Number(id))
  const handleImageError = (productId: number) => {
    setImageErr(prev => new Set(prev).add(productId))
  }

  if (!product) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">商品不存在</h2>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">商品詳情</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {imageErr.has(product.id) ? (
            <div className="w-full h-36 flex items-center justify-center bg-gray-100 text-gray-600 text-sm border border-dashed border-gray-300 rounded">
              圖片來源有誤
            </div>
          ) : (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-36 object-cover rounded"
              onError={() => handleImageError(product.id)}
            />
          )}
          
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                收到後請先冷藏．建議3~5天內食用完畢風味最佳
              </p>
            </div>
            
            <div className="mt-6">
              <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors">
                加入菜籃
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail 