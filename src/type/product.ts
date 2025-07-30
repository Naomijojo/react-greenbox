export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export interface FavoriteState {
  favorites: Product[]
  loading: boolean
  error: string | null
}