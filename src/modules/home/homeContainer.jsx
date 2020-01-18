import React, {useCallback, useEffect} from 'react'
import HomeComponent from "./homeComponent";
import { connect } from 'react-redux'
import {getListingData} from "../../redux-store/selectors/listingSelector";
import {actions} from "../../redux-store/reducers/listingDuck";

const HomeContainer = props => {
    const { listingData } = props
    const cardClick = useCallback(
        (item) => {
            props.history.push(`/${item.imdbID}`)
        },
        [props.history],
    );

    useEffect(() => {
        return () => {
            props.filterShowsList('')
        };
    }, []);


    return (
        <HomeComponent
            data={listingData}
            cardClick={cardClick}
        />
    )
}

const mapStateToProps = state => ({
    listingData: getListingData(state)
})

const mapDispatchToProps = dispatch => ({
    filterShowsList: showItem => dispatch(actions.filterList(showItem))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)
