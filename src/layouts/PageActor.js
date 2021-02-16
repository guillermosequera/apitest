import React, { useContext }  from 'react'
import { Context } from "@store/appContext";
import Pagination from 'react-bootstrap/Pagination';

function PageActor() {
    const [ state ] = useContext(Context);
    console.log('pagTV',state.store.paginatepeople);
    const paginate = () => {
        if(state.store.paginatepeople){
            return state.store.paginatepeople.page
        }
        
    }

    const paginatelast = () => {
        if(state.store.paginatepeople){
            return state.store.paginatepeople.total_pages
        }
        
    }

    const handlePage = (e) => {
        state.actions.pagePeople(e);
        state.actions.loadAll(state.store.lang, state.store.page_movie, state.store.page_people, state.store.page_tv); 
        // console.log('store2', state);
    }

    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev onClick={() => handlePage(`&page=${paginate()-1}`)} />
            { paginate() > 1 &&  <Pagination.Item onClick={() => handlePage(`&page=1`)}>{1}</Pagination.Item>  }
            { paginate() > 1 && <Pagination.Ellipsis />}
    
            {paginate()-2 > 0 && <Pagination.Item onClick={() => handlePage(`&page=${paginate()-2}`)}>{paginate()-2}</Pagination.Item>}
            {paginate()-1 > 0 && <Pagination.Item onClick={() => handlePage(`&page=${paginate()-1}`)}>{paginate()-1}</Pagination.Item>}
            <Pagination.Item active>{paginate()}</Pagination.Item>
            {paginate()+1 < paginatelast() && <Pagination.Item onClick={() => handlePage(`&page=${paginate()+1}`)}>{paginate()+1}</Pagination.Item>}
            {paginate()+2 < paginatelast() && <Pagination.Item onClick={() => handlePage(`&page=${paginate()+1}`)}>{paginate()+2}</Pagination.Item>}
            

            <Pagination.Ellipsis />
            <Pagination.Item onClick={() => handlePage(`&page=${paginatelast()}`)}>{paginatelast()}</Pagination.Item>
            <Pagination.Next onClick={() => handlePage(`&page=${paginate()+1}`)} />
            <Pagination.Last />
        </Pagination>
    )
}


export default PageActor;