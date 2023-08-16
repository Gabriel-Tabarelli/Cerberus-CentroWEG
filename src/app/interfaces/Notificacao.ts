import { Answer } from "./Answer"
import { Question } from "./Question"

export interface Notificacao {
    id: number,
    pergunta: Question,
    resposta: Answer
    visualizada: boolean
}