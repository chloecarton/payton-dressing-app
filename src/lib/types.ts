
export interface ApiResponse {
    data: Object
}

export interface ProductListResponse {
    data: Product[]
}

export interface Product {
    id: string
    reference: string
    title: string
    featuredImage?: Media
    medias: Media[]
    description: string
    price: number
    brand?: string
    color?: string
    size?: string
    composition?: string
}

export interface Media {
    id: string
    fileId: string
    url: string
    productReference: string
}