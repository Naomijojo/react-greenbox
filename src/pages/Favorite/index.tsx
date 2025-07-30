import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { removeFromFavorites } from '@/store/slices/favoritesSlice'
import { useState } from 'react'

const Favorite = () => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(state => state.favorites.favorites)

  const [imageErr, setImageErr] = useState<Set<number>>(new Set())

  const handleRemoveFavorite = (productId: number) => {
    dispatch(removeFromFavorites(productId))
  }

  const handleImageError = (productId: number) => {
    setImageErr(prev => new Set(prev).add(productId))
  }

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>我的收藏( {favorites.length} )</h2>
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">還沒有收藏任何商品</p>
          <p className="text-gray-400 text-sm mt-2">回商品列表挑選喜歡的商品吧！</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6">
          {favorites.map(product => (
            <div key={product.id} className="w-[380px] border-2 border-red-400 p-4 rounded-lg bg-white shadow-sm">
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
              <h3 className="text-lg font-semibold mt-3 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">價格 ${product.price}</p>
              <button
                onClick={() => handleRemoveFavorite(product.id)}
                className="w-full py-2 px-4 rounded text-white font-medium bg-red-500"
              >
                取消收藏
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorite