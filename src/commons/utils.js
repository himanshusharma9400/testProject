export const noop = () => null

export const getTransformedListingData = (listingData) => {
    if(!listingData || !listingData.length){
        return []
    }
    return listingData
}