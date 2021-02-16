
import { fetchMovies, fetchMovie, fetchActor, fetchSerie , fetchSeries, fetchActors} from '@api/request';
import { URL } from '@api/config';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      movies: [],
      peoples: [],
      tvs: [],
      active_tv: undefined,
      active_people: undefined,
      active_movie: undefined,
      lang: URL.LANG_ES,
      page_movie: URL.PAGE,
      page_people: URL.PAGE,
      page_tv: URL.PAGE,
		},
		actions: {
      

      loadAll: (lang, page_movie, page_people, page_tv) => {
        
        fetchMovies(lang,page_movie)
        .then((data) => {
          console.log('movies',data);
          getActions().setListMovies(data.results, data);
        })

        fetchActors(lang,page_people)
        .then((data) => {
          // console.log(data);
          getActions().setListPeoples(data.results, data);
        })

        fetchSeries(lang,page_tv)
        .then((data) => {
          // console.log(data);
          getActions().setListTvs(data.results, data);
        })
      },

      pageMovie: (page) =>{
        setStore({ page_movie: page})
      },

      pagePeople: (page) =>{
        setStore({ page_people: page})
      },

      pageTv: (page) =>{
        setStore({ page_tv: page})
      },

      loadMovie: (id,lang) => {
        if(id){
          fetchMovie(id,lang)
          .then((data) => {
            console.log('movie',data);
            getActions().setMovie(id, data);
          })
        }
      },

      loadActor: (id,lang) => {
        if(id){
          fetchActor(id,lang)
          .then((data) => {
            console.log('movie',data);
            getActions().setActor(id, data);
          })
        }
      },

      loadTv: (id,lang) => {
        if(id){
          fetchSerie(id,lang)
          .then((data) => {
            
            getActions().setTv(id, data);
          })
        }
      },

      setListMovies: (lista, lista2) => {
        setStore({ movies: lista, paginatemovies: lista2 });
      },
      setListTvs: (lista, lista2) => {
        setStore({ tvs: lista, paginatetv: lista2  });
      },
      setListPeoples: (lista, lista2) => {
        setStore({ peoples: lista, paginatepeople: lista2  });
      },
      setMovie: (id, data) => {
        setStore( { active_movie: data })
      },
      setActor: (id, data) => {
        setStore( { active_people: data })
      },
      setTv: (id, data) => {
        setStore( { active_tv: data })
      }
		}
	};
};

export default getState;