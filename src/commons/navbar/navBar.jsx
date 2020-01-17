import React from 'react'
import connect from "react-redux/es/connect/connect";
import {Container, SearchBarContainer, TitleText} from "./navBarStyles";
import strings from "../../language/strings";
import SearchBar from "../searchBar/searchBar";

const NavBar = props => {
    if(!props.navBarState.navBarVisible){
        return null
    }
    return (
        <Container>
            <TitleText>{strings.navBarTitle}</TitleText>
            {
                props.navBarState.searchBarState &&
                    <SearchBarContainer>
                        <SearchBar searchFunction={() => null} placeholder={strings.search}/>
                    </SearchBarContainer>
            }
        </Container>
    )
}

const mapStateToProps = state => ({
    navBarState : state.navBarDuck
})

export default connect(
    mapStateToProps,
    null
)(NavBar)