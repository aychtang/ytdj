/*
 * Pitch: View which encompasses a pitch fader which controls turntable speed:
 */

import * as React from "react";
import { connect, Dispatch } from "react-redux";

import * as T from "./types";
import EmptyState from "../../types/EmptyState";
import { setTurntablePitch } from '../../actions/pureActionCreators';

// -----------------------------------------------------------------------------

class Pitch extends React.PureComponent<T.PitchProps, EmptyState> {

    onPitchChange = (evt : React.FormEvent<HTMLInputElement>) : void => {
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
                onChange={this.onPitchChange}
            />
        );
    }

}

// -----------------------------------------------------------------------------

export default connect<any, T.PitchDispatchFromProps, void>(
    () => ({}),
    (dispatch: Dispatch<T.PitchDispatchFromProps>) => ({
        setPitch: (id: number, speed: number) : void => {
            dispatch(setTurntablePitch(id, speed))
        }
    })
)(Pitch);
