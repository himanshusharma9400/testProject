import React, {useCallback} from 'react'
import HomeComponent from "./homeComponent";
import { connect } from 'react-redux'
import {getListingData} from "../../redux-store/selectors/listingSelector";

const HomeContainer = props => {
    const { listingData } = props
    const cardClick = useCallback(
        (item) => {
            props.history.push(`/${item.imdbID}`)
        },
        [props.history],
    );

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
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)
