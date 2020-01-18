import React from 'react'
import {
    Container, IFrameStyle,
    ShowDate, ShowDescription,
    ShowDetailsDiv, ShowImage,
    ShowNotFound,
    ShowRatings,
    ShowRatingsDiv,
    ShowTitle
} from "./showDetailsStyles";
import PropTypes from "prop-types";
import strings from "../../language/strings";
import {POSTER_IMAGES_LINK} from "../home/homeConstants";

const ShowDetailsComponent = props => {
    const {showData, rating, showVideoUrl} = props
    return (
        <Container>
            {
                !showData &&
                    <ShowNotFound>
                        {strings.showNotFound}
                    </ShowNotFound>
            }
            {
                showData &&
                    <React.Fragment>
                        <ShowDetailsDiv>
                            <ShowTitle>{showData.title}</ShowTitle>
                            <ShowDate>{`(${showData.year})`}</ShowDate>
                            <ShowRatingsDiv>
                                <ShowRatings>{strings.rating}</ShowRatings>
                                <ShowRatings>{rating}</ShowRatings>
                            </ShowRatingsDiv>
                            <ShowImage src={`${POSTER_IMAGES_LINK}${showData.poster}`}/>
                            <ShowDescription>{showData.description}</ShowDescription>
                        </ShowDetailsDiv>
                        {
                            showVideoUrl &&
                            <iframe
                                title={showData.trailer}
                                style={IFrameStyle}
                                src={showVideoUrl}
                                frameBorder="0"
                                allowFullScreen=""/>
                        }
                    </React.Fragment>
            }
        </Container>
    )
}

ShowDetailsComponent.propTypes = {
    showData: PropTypes.object,
    rating: PropTypes.string,
    showVideoUrl: PropTypes.string
}

ShowDetailsComponent.defaultProps = {
    showData: null,
    rating: '-',
    showVideoUrl:''
}

export default ShowDetailsComponent