/*
 * Record: View which encompasses a YouTube video which represents a "record"
 * being played.
 */

import * as T from './types';
import * as React from "react";

import EmptyState from "../../types/EmptyState";

import Youtube from "react-youtube";

// -----------------------------------------------------------------------------

// Options to disable video controls:
const PLAYER_OPTIONS : T.PlayerOptions = {
    playerVars: {
        controls: 0,
        disablekb: 1,
    }
};

class Record extends React.PureComponent<T.RecordProps, EmptyState> {

    /*
     * onYouTubeReady: Define behaviour for when YT player has initialised. In
     * this case, we start the video if the Record should be playing.
     */
    onYouTubeReady = (event: T.YouTubePlayerEvent) : void => {
        if (this.props.playing) {
            event.target.playVideo();
        }
    }

    render () {
        return (
            <Youtube
                opts={PLAYER_OPTIONS}
                videoId={this.props.videoId}
                onReady={this.onYouTubeReady}
            />
        );
    }

}

// -----------------------------------------------------------------------------

export default Record;
