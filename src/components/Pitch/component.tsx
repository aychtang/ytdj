/*
 * Pitch: View which encompasses a pitch fader which controls turntable speed:
 */

import * as T from "./types";
import * as React from "react";
import { connect } from "react-redux";

import { lerpFactory } from "../../utils/Math";
import Turntable from "../Turntable/component";
import EmptyState from "../../types/EmptyState";
import { SET_TURNTABLE_PITCH } from "../../actions/constants";

// -----------------------------------------------------------------------------

const lerp = lerpFactory(0.92, 1.08);

class Pitch extends React.PureComponent<T.PitchProps, EmptyState> {

    onMouseUp = (evt : T.PitchEvent) : void => {
        this.props.setPitch(this.props.id, lerp(+evt.target.value / 100));
    }

    render () {
        return (
            <div>
                <input
                    min="0"
                    max="100"
                    type="range"
                    onMouseUp={this.onMouseUp}
                />
            </div>
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
    () => {},
    mapDispatchToProps,
)(Pitch);
