const getState = scope => {
	return {
		store: {
			albums: []
			// meetups: [],
			// session: {}
		},
		actions: {
			changeColor: (element, color) => {
				let store = scope.state.store;
				store.demo[element].background = color;
				scope.setState({ store });
			}
		}
	};
};

export default getState;
