/*
 * Turntable: View which encompasses one deck that can play a record, and modify
 * the speed by + or - 8%:
 */

import * as React from "react";

import Pitch from "../Pitch/component";
import Record from "../Record/component";
import RecordBag from "../RecordBag/component";
import EmptyState from "../../types/EmptyState";
import { lerpFactory } from "../../utils/Math";
import { TurntableProps } from "./types";

// -----------------------------------------------------------------------------

class Turntable extends React.PureComponent<TurntableProps, EmptyState> {

    render () {
        return (
            <div className="App-Turntable">
                <RecordBag
                    id={this.props.id}
                    default={this.props.videoId}
                />
                <Record
                    speed={this.props.speed}
                    playing={this.props.playing}
                    videoId={this.props.videoId}
                />
                <Pitch
                    id={this.props.id}
                    lerp={lerpFactory(0.92, 1.08)}
                />
            </div>
        );
    }

}

// -----------------------------------------------------------------------------

export default Turntable;
