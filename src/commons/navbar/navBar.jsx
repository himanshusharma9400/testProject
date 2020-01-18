import React from 'react'
import { connect } from 'react-redux'
import {BackButton, Container, SearchBarContainer, TitleText} from "./navBarStyles";
import { createBrowserHistory } from "history";
import strings from "../../language/strings";
import SearchBar from "../searchBar/searchBar";
import {actions} from "../../redux-store/reducers/listingDuck";
import {Link} from "react-router-dom";

const NavBar = props => {
    if(!props.navBarState.navBarVisible){
        return null
    }
    const history = createBrowserHistory()
    return (
        <Container>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <TitleText>{strings.navBarTitle}</TitleText>
            </Link>
            {
                props.navBarState.searchBarState &&
                    <SearchBarContainer>
                        <SearchBar searchFunction={props.filterShowsList} placeholder={strings.search}/>
                    </SearchBarContainer>
            }
            {
                props.navBarState.backButtonState &&
                    <BackButton onClick={() => history.goBack()}>
                        {strings.back}
                    </BackButton>
            }
        </Container>
    )
}

const mapStateToProps = state => ({
    navBarState : state.navBarDuck
})

const mapDispatchToProps = dispatch => ({
    filterShowsList: showItem => dispatch(actions.filterList(showItem))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)