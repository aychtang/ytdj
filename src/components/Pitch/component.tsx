/*
 * Pitch: View which encompasses a pitch fader which controls turntable speed:
 */

import * as T from "./types";
import * as React from "react";
import { connect } from "react-redux";

import EmptyState from "../../types/EmptyState";
import { SET_TURNTABLE_PITCH } from "../../actions/constants";
import { setTurntablePitch } from '../../actions/pureActionCreators';

// -----------------------------------------------------------------------------

class Pitch extends React.PureComponent<T.PitchProps, EmptyState> {

    onChange = (evt : React.FormEvent<HTMLInputElement>) : void => {
        this.props.setPitch(
            this.props.id,
            this.props.lerp(+evt.currentTarget.value / 100),
        );
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

// -----------------------------------------------------------------------------

export default connect<any, T.PitchDispatchFromProps, void>(
    () => ({}),
    (dispatch: any) => ({
        setPitch: (id: number, speed: number) : void => {
            dispatch(setTurntablePitch(id, speed))
        }
    })
)(Pitch);
