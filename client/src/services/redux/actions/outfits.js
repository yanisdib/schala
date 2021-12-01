export const fetchOutfitsRequest = () => ({ type: 'outfits/fetchOutfitsRequested', isLoading: true });

export const fetchOutfitsSuccess = (outfits) => ({
    type: 'outfits/fetchOutfitsSucceeded',
    outfits,
    isLoading: false
});

export const addOutfitRequest = (outfit = [{}]) => ({
    type: 'outfits/addOutfitRequested',
    outfit,
    isLoading: true
});

export const addOutfitSuccess = (outfits) => ({
    type: 'outfits/addOutfitSucceeded',
    outfits,
    isLoading: false
});

export const updateOutfitRequest = (id, updates = {}) => ({
    type: 'outfits/editOutfitRequested',
    id,
    updates,
    isLoading: true
});

export const updateOutfitSuccess = (outfits) => ({
    types: 'outfits/updateOutfitSucceeded',
    outfits,
    isLoading: false
});

export const deleteOutfitRequest = ({ id = undefined }) => ({
    type: 'outfits/deleteOufitRequested',
    id,
    isLoading: true
});

export const deleteOutfitSuccess = (outfits) => ({
    type: 'outfits/deleteOutfitSucceeded',
    outfits,
    isLoading: false
});