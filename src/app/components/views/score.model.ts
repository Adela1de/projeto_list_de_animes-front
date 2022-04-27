import { anime } from "./anime/anime.model";
import { user } from "./user.model";

export interface score
{
    user: user,
    anime: anime,
    entry: string
}