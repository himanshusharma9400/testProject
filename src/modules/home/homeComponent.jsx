import React from 'react'
import {Container, NoResults} from "./homeStyles";
import PropTypes from 'prop-types'
import ShowCard from "./showCard";
import {noop} from "../../commons/utils";
import strings from "../../language/strings";

const HomeComponent = props => {
    const {data, cardClick} = props
    return (
        <Container>
            {
                data && !data.length &&
                    <NoResults>
                        {strings.noResultsFound}
                    </NoResults>
            }
            {
                data && data.map((item, index) => (
                    <ShowCard
                        key={`show_${index}`}
                        cardData={item}
                        cardClick={() => cardClick(item)}
                    />
                ))
            }
        </Container>
    )
}

HomeComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    cardClick: PropTypes.func
}

HomeComponent.defaultProps = {
    data: [],
    cardClick: noop
}

export default HomeComponent