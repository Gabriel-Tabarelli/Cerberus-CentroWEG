import { Question } from "../Question"

export interface Product {
    id: number
    nome: string
    urlImagem: string
    descricao: string
    categoriaId: number
    especificacoes: string[]
    commentList: Question[]
}