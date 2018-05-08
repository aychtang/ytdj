/*
 * Pitch: View which encompasses a pitch fader which controls turntable speed:
 */

import * as T from './types';
import * as React from "react";
import { connect } from 'react-redux'

import Turntable from '../Turntable/component';
import EmptyState from "../../types/EmptyState";
import { SET_TURNTABLE_PITCH } from "../../actions/constants"

// -----------------------------------------------------------------------------

class Pitch extends React.PureComponent<T.PitchProps, EmptyState> {

    onChange = (evt : T.PitchEvent) : void => {
        this.props.setPitch(this.props.id, +evt.target.value);
    }

    render () {
        return (
            <div>
                <input
                    min="0"
                    max="100"
                    type="range"
                    onChange={this.onChange}
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
