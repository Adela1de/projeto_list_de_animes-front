import { anime } from "./anime/anime.model";

export interface user
{
    id?: string,
    name: string,
    email: string,
    password: string,
    favorites?: anime[]
}