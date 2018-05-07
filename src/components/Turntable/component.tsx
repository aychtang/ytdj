/*
 * Turntable: View which encompasses one deck that can play a record, and modify
 * the speed by + or - 8%:
 */

import * as React from "react";

import { TurntableProps } from "./types";
import EmptyState from "../../types/EmptyState";

import Record from "../Record/component";

// -----------------------------------------------------------------------------

class Turntable extends React.PureComponent<TurntableProps, EmptyState> {

    render () {
        return (
            <div className="App-Turntable">
                <Record
                    speed={1}
                    playing={this.props.playing}
                    videoId={this.props.videoId}
                />
            </div>
        );
    }

}

// -----------------------------------------------------------------------------

export default Turntable;
