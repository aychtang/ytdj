/*
 * Booth: View which encompasses a set of turntables:
 */

import * as React from "react";

import * as T from './types';
import Turntable from '../Turntable/component';
import EmptyState from "../../types/EmptyState";

// -----------------------------------------------------------------------------

class Booth extends React.PureComponent<T.BoothProps, EmptyState> {

    render () {
        return (
            <div className="App-Booth">
                {
                    this.props.turntables.map((tt: T.Turntable) =>
                        <Turntable
                            id={tt.id}
                            key={tt.id}
                            speed={tt.speed}
                            playing={tt.playing}
                            videoId={tt.videoId}
                        />
                    )
                }
            </div>
        );
    }

}

// -----------------------------------------------------------------------------

export default Booth;
