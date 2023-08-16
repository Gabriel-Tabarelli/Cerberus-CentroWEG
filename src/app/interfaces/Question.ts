import { Answer } from "./Answer"
import { ProductMinimized } from "./Product/ProdutctMinimized"

export interface Question {
    id: number
    perguntador: any
    pergunta: string
    data: string
    listaRespostas: Answer[] 
    produto: ProductMinimized
}