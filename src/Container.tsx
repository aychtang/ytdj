/*
 * Container: Application container component:
 */

import * as React from "react";
import { connect } from 'react-redux'
import { values } from "lodash";

import * as T from "./types/ContainerTypes";
import Booth from "./components/Booth/component";
import EmptyState from "./types/EmptyState";

// -----------------------------------------------------------------------------

class Container extends React.PureComponent<T.ContainerProps, EmptyState> {

    render () {
        return <Booth turntables={this.props.turntables} />;
    }

}

// -----------------------------------------------------------------------------

const mapStateToProps = (state: T.AppState) => ({
    turntables: values(state.turntables),
});

export default connect(mapStateToProps, () => ({}))(Container);
