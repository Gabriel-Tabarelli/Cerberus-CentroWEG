import { Answer } from "./Answer"

export interface Question {
    id: number
    pessoa: any
    pergunta: string
    data: string
    listaRespostas: Answer[] 
}