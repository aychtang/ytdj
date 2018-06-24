/*
 * Pitch: View which encompasses a pitch fader which controls turntable speed:
 */

import * as T from "./types";
import * as React from "react";
import { connect } from "react-redux";

import { lerpFactory } from "../../utils/Math";
import EmptyState from "../../types/EmptyState";
import { SET_TURNTABLE_PITCH } from "../../actions/constants";

// -----------------------------------------------------------------------------

const lerp = lerpFactory(0.92, 1.08);

class Pitch extends React.PureComponent<T.PitchProps, EmptyState> {

    onChange = (evt : React.FormEvent<HTMLInputElement>) : void => {
        this.props.setPitch(this.props.id, lerp(+evt.currentTarget.value / 100));
    }

    render () {
        return (
            <input
                min="0"
                max="100"
                type="range"
                className="App-Pitch"
                onChange={this.onChange}
            />
        );
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setPitch: (id: number, speed: number) : void =>
            dispatch({
                id,
                type: SET_TURNTABLE_PITCH,
                speed,
            })    
    };
};

// -----------------------------------------------------------------------------

export default connect<any, T.PitchDispatchFromProps, void>(
    () => ({}),
    mapDispatchToProps,
)(Pitch);
