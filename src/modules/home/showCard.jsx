import React from 'react'
import PropTypes from "prop-types";
import {CardDescription, CardDescriptionDiv, CardDiv, CardImage, CardSubTitle, CardTitle} from "./homeStyles";
import {DEFAULT_IMAGE, POSTER_IMAGES_LINK} from "./homeConstants";
import {noop} from "../../commons/utils";

const ShowCard = props => {
    const {cardData, cardClick} = props
    const {title,year,description,poster} = cardData
    return (
        <CardDiv onClick={cardClick}>
            <CardImage src={`${POSTER_IMAGES_LINK}${poster}`} alt={DEFAULT_IMAGE}/>
            <CardDescriptionDiv>
                <CardTitle>{title}</CardTitle>
                <CardSubTitle>{`(${year})`}</CardSubTitle>
                <CardDescription>{description}</CardDescription>
            </CardDescriptionDiv>
        </CardDiv>
    )
}

ShowCard.propTypes = {
    cardData: PropTypes.object,
    cardClick: PropTypes.func
}

ShowCard.defaultProps = {
    cardData: null,
    cardClick: noop
}

export default ShowCard