import { Answer } from "./Answer"

export interface Question {
    id: number
    user: string
    question: string
    answerList: Answer[] 
}