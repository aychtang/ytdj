import * as React from "react";

import { TurntableProps } from "./types";
import { UnitState } from "../../types/UnitState";

import Record from "../Record/component";

// -----------------------------------------------------------------------------

/*
 * Turntable: View which encompasses one deck that can play a record, and modify
 * the speed by + or - 8%:
 */
class Turntable extends React.PureComponent<TurntableProps, UnitState> {

    render () {
        return (
            <div>
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
