import { Answer } from "./Answer"

export interface Question {
    id: number
    perguntador: any
    pergunta: string
    listaRespostas: Answer[] 
}