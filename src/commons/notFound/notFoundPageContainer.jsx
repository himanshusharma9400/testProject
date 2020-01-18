import React, {useEffect} from 'react'
import {Container} from "./notFoundPageStyles";
import strings from "../../language/strings";
import {actions as navBarActions} from "../../redux-store/reducers/navBarDuck";
import connect from "react-redux/es/connect/connect";

const NotFoundPageContainer = props => {
    useEffect(() => {
        props.hideNavBar()
        return () => {
            props.showNavBar()
        };
    }, []);
    return (
        <Container>
            {strings.invalidPage}
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    hideNavBar: () => dispatch(navBarActions.hideNavBar()),
    showNavBar: () => dispatch(navBarActions.showNavBar())
})

export default connect(
    null,
    mapDispatchToProps
)(NotFoundPageContainer)