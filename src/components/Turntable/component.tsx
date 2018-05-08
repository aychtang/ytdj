/*
 * Turntable: View which encompasses one deck that can play a record, and modify
 * the speed by + or - 8%:
 */

import * as React from "react";

import { TurntableProps } from "./types";
import EmptyState from "../../types/EmptyState";

import Record from "../Record/component";
import Pitch from "../Pitch/component";

// -----------------------------------------------------------------------------

class Turntable extends React.PureComponent<TurntableProps, EmptyState> {

    render () {
        console.log('rerender turntable', this.props.speed);
        return (
            <div className="App-Turntable">
                <Record
                    speed={this.props.speed}
                    playing={this.props.playing}
                    videoId={this.props.videoId}
                />
                <Pitch id={this.props.id}/>
            </div>
        );
    }

}

// -----------------------------------------------------------------------------

export default Turntable;
