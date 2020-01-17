import React from 'react'
import HomeComponent from "./homeComponent";
import { connect } from 'react-redux'
import {getListingData} from "../../redux-store/selectors/listingSelector";

const HomeContainer = props => {
    const { listingData } = props
    return (
        <HomeComponent
            data={listingData}
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
