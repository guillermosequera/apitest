import React, { useState, useEffect } from "react";
import getState from "./flux.js";


export const Context = React.createContext(null);


const injectContext = PassedComponent => {
	const StoreWrapper = props => {

		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {

			  state.actions.loadAll(state.store.lang, state.store.page_movie, state.store.page_people, state.store.page_tv); 
			  state.actions.pageMovie(state.store.page_movie);
			  state.actions.pagePeople(state.store.page_people);
			  state.actions.pageTv(state.store.page_tv);
			  state.actions.loadMovie(state.store.active_movie, state.store.lang);
			  state.actions.loadActor(state.store.active_people, state.store.lang);
			  state.actions.loadTv(state.store.active_tv, state.store.lang);
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);


		return (
			<Context.Provider value={[state, setState]}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext; 