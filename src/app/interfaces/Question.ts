import { Answer } from "./Answer"

export interface Question {
    id: number
    perguntador: any
    pergunta: string
    data: string
    listaRespostas: Answer[] 
}