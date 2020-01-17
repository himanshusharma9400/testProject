import React, {useEffect, useRef} from 'react'
import {Container, InputDiv} from "./searchBarStyles";
import PropTypes from 'prop-types'
import {noop} from "../utils";
import {SEARCH_TIMEOUT} from "../constants";

const SearchBar = props => {
    const {placeholder, searchFunction} = props

    const timer = useRef(false)

    useEffect(() => {
        timer.current = null
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const handleInputChange = event => {
        const {value} = event.target
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            searchFunction(value)
        }, SEARCH_TIMEOUT)
    }

    return (
        <Container>
            <InputDiv
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </Container>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    searchFunction: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
    placeholder: '',
    searchFunction: noop
}

export default SearchBar