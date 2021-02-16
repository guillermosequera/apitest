import { URL } from '@api/config';



export const fetchMovies = (lang, page) => {
    return fetch(`${URL.BASE}/movie/popular${URL.TOKEN}${lang}${page}`).then((resp) => resp.json());
}

export function fetchSeries (lang,page)  {
    return fetch(`${URL.BASE}/tv/popular${URL.TOKEN}${lang}${page}`).then((resp) => resp.json());
}

export function fetchActors (lang,page)  {
    return fetch(`${URL.BASE}/person/popular${URL.TOKEN}${lang}${page}`).then((resp) => resp.json());
}

//individual
export const fetchMovie = (id, lang ) => {
    return fetch(`${URL.BASE}/movie/${id}${URL.TOKEN}${lang}`).then((resp) => resp.json());
}

export const fetchSerie = (id, lang ) => {
    return fetch(`${URL.BASE}/tv/${id}${URL.TOKEN}${lang}`).then((resp) => resp.json());
}

export const fetchActor = (id, lang ) => {
    return fetch(`${URL.BASE}/person/${id}${URL.TOKEN}${lang}`).then((resp) => resp.json());
}