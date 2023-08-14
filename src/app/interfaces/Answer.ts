import { Question } from "./Question";
import { User } from "./User";

export interface Answer {
    id: number,
    respondedor: User,
    resposta: string,
    data: string,
    pergunta: Question
}