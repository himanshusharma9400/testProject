export const noop = () => null

export const getTransformedListingData = (listingData) => {
    if(!listingData || !listingData.length){
        return []
    }
    return listingData
}

export const getVideoLink = show => {
    if(!show || !show.trailer){
        return ''
    }
    return `https://www.youtube-nocookie.com/embed/${show.trailer}?rel=0&amp;amp;controls=0&amp;amp;showinfo=0`
}