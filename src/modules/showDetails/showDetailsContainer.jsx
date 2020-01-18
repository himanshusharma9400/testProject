import React, {useCallback, useEffect, useMemo, useState} from 'react'
import connect from "react-redux/es/connect/connect";
import ShowDetailsComponent from "./showDetailsComponent";
import {actions as navBarActions} from "../../redux-store/reducers/navBarDuck";
import {actions as showDetailsActions} from "../../redux-store/reducers/showDetailsDuck";
import * as LISTING_DATA from './../../dataStore/listingData'
import {IMDB_API_KEY} from "../../commons/constants";
import {getVideoLink} from "../../commons/utils";

const ShowDetailsContainer = props => {
    const [rating, setRatings] = useState('-');

    useEffect(() => {
        props.hideSearchBar()
        getIMDBRating()
        return () => {
            props.showSearchBar()
        };
    }, []);

    const getIMDBRating = useCallback(() => {
        const show = props.match.params.show
        if(!show){
            return null
        }
        const params = {
            i:show,
            apikey:IMDB_API_KEY
        }
        props.getIMDBRating({
            params:params,
            onSuccess:data => setRatings(data && data.imdbRating),
            onError:error => alert(error)
        })
    }, [props.match.params]);

    const showData = useMemo(() => {
        const show = props.match.params.show
        const showData = LISTING_DATA.shows.find((item) => item.imdbID === show)
        return showData || null
    }, [props.match.params]);

    const showVideoUrl = useMemo(() => {
        return getVideoLink(showData)
    }, [showData])

    return (
        <ShowDetailsComponent
            showData={showData}
            rating={rating}
            showVideoUrl={showVideoUrl}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    hideSearchBar: () => dispatch(navBarActions.hideSearchBar()),
    showSearchBar: () => dispatch(navBarActions.showSearchBar()),
    getIMDBRating: (payload) => dispatch(showDetailsActions.getIMDBRating(payload))
})

export default connect(
    null,
    mapDispatchToProps
)(ShowDetailsContainer)