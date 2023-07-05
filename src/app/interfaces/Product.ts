import { Question } from "./Question"

export interface Product {
    id: number
    productName: string
    url: string
    description: string
    category: number
    specificationList: string[]
    commentList: Question[]
}