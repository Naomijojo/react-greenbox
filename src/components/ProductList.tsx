import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { addToFavorites, removeFromFavorites } from '../store/slices/favoritesSlice'
import { Product } from '../type/product'
import Loading from './Loading'

// 靜態商品數據
export const fakeData: Product[] = [
  { id: 1, name: "棗子", price: 100, image: "https://www.uho.com.tw/userfiles/sm/sm1200675_images_A1/2025012064083165.jpg" },
  { id: 2, name: "草莓", price: 200, image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "哈密瓜", price: 300, image: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "牛奶果", price: 400, image: "https://taiwan-bonbon-farmer.com/wp-content/uploads/2023/03/%E7%89%9B%E5%A5%B6%E6%9E%9C900.jpg" },
  { id: 5, name: "小番茄", price: 500, image: "https://images.unsplash.com/photo-1749776016433-229308a6b262?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "蓮霧", price: 600, image: "https://www.newsmarket.com.tw/files/2024/01/1%E2%94%80%E9%BB%91%E7%8F%8D%E7%8F%A0%E8%93%AE%E9%9C%A7%EF%BC%88%E7%85%A7%E7%89%87%E4%BE%86%E6%BA%90%EF%BC%8F%E6%9E%8B%E5%AF%AE%E8%BE%B2%E6%9C%83%E8%87%89%E6%9B%B8%EF%BC%89.jpg" },
  { id: 7, name: "百香果", price: 700, image: "https://i.epochtimes.com/assets/uploads/2020/07/shutterstock_674014366-600x400.jpg" },
  { id: 8, name: "黃金果", price: 800, image: "https://blog.life.com.tw/album/48/954041.jpeg?t=1562211357" },
  { id: 9, name: "芭樂", price: 800, image: "https://fruitbox.blob.core.windows.net/products/Images/20211208161519.webp" },
]

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(state => state.favorites.favorites)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [displayCount, setDisplayCount] = useState(4)
  const [imageErr, setImageErr] = useState<Set<number>>(new Set())

  const products = fakeData.slice(0, displayCount)
  const hasMore = displayCount < fakeData.length

  // 是否為收藏
  const isFavorite = (productId: number) => {
    return favorites.some(product => product.id === productId)
  }
  
  const handleToggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      dispatch(removeFromFavorites(product.id))
    } else {
      dispatch(addToFavorites(product))
    }
  }

  //載入更多 - 延1.5s  
  const loadMore = async () => {
    if (loading || !hasMore) return
    
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setDisplayCount(prev => prev + 4)
    setLoading(false)
    console.log('products->', products)
  }

  // 滾動監聽
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100 && hasMore) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore, loading])

  const handleImageError = (productId: number) => {
    setImageErr(prev => new Set(prev).add(productId))
  }

  const goToProductDetail = (productId: number) => {
    navigate(`/product/${productId}`)
  }

  return ( 
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>商品列表</h2>
      
      <div className="flex justify-center items-center flex-wrap gap-6">
        {products.map(product => (
          <div key={product.id} className="w-[500px] border border-gray-300 p-4 rounded-lg bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => goToProductDetail(product.id)}>
            {imageErr.has(product.id) ? (
              <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-600 text-sm border border-dashed border-gray-300 rounded">
                圖片來源有誤
              </div>
            ) : (
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded"
                onError={() => handleImageError(product.id)}
              />
            )}
            <h3 className="text-lg font-semibold mt-3 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-3">價格 ${product.price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation()  
                handleToggleFavorite(product)
              }}
              className={`w-full py-2 px-4 rounded text-white font-medium ${
                isFavorite(product.id) 
                  ? 'bg-red-500 hover:bg-red-600 transition-colors' 
                  : 'bg-green-500 hover:bg-green-600 transition-colors'
              }`}
            >
              {isFavorite(product.id) ? '取消收藏' : '加入收藏'}
            </button>
          </div>
        ))}
      </div>
      
      {/* 載入狀態 */}
      <div className="flex justify-center mt-8">
        {loading && (
          <div className="flex items-center space-x-2">
            <Loading />
            <span className="text-gray-600">載入中...</span>
          </div>
        )}
        
        {!hasMore && products.length > 0 && (
          <div className="text-gray-500">
            已載入所有商品 ({products.length})
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList;