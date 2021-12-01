const initialState = [];

const outfitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'outfits/fetchOutfitsRequested':
            return [...state, action.isLoading];
        case 'outfits/fetchOutfitsSucceeded':
            return [...action.outfits, action.isLoading];
        case 'outfits/addOutfitRequested':
            return [...state, action.isLoading];
        case 'outfits/addOutfitSucceeded':
            return [action.outfits, action.isLoading];
        case 'outfits/editOutfitsRequested':
            return [action.outfits, action.isLoading];
        case 'outfits/editOutfitsSucceeded':
            return [{ data: action.outfits }, action.isLoading];
        default: return state;
    }
}

export default outfitsReducer;