import React from 'react'
import connect from "react-redux/es/connect/connect";
import ShowDetailsComponent from "./showDetailsComponent";

const ShowDetailsContainer = props => {
    return (
        <ShowDetailsComponent/>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowDetailsContainer)