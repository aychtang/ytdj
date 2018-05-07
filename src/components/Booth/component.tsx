/*
 * Booth: View which encompasses a set of turntables:
 */

import * as T from './types';
import * as React from "react";

import Turntable from '../Turntable/component';
import EmptyState from "../../types/EmptyState";

// -----------------------------------------------------------------------------

class Booth extends React.PureComponent<T.BoothProps, EmptyState> {

    render () {
        return (
            <div>
                {
                    this.props.turntables.map((x: T.Turntable) =>
                        <Turntable
                            key={x.id}
                            playing={x.playing}
                            videoId={x.videoId}
                        />
                    )
                }
            </div>
        );
    }

}

// -----------------------------------------------------------------------------

export default Booth;
