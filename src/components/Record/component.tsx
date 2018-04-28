/*
 * Record: View which encompasses a YouTube video which represents a "record"
 * being played.
 */

import * as React from "react";

import {
    RecordProps,
    YouTubePlayerEvent,
} from "./types";

import { UnitState } from "../../types/UnitState";

import Youtube from "react-youtube";

// -----------------------------------------------------------------------------

class Record extends React.PureComponent<RecordProps, UnitState> {

    constructor (props: RecordProps) {
        super(props, {});

        this.onYouTubeReady = this.onYouTubeReady.bind(this);
    }

    /*
     * onYouTubeReady: Define behaviour for when YT player has initialised. In
     * this case, we start the video if the Record should be playing.
     */
    onYouTubeReady (event: YouTubePlayerEvent) : void {
        if (this.props.playing) {
            event.target.playVideo();
        }
    }

    render () {
        return (
            <Youtube
                opts={{
                    playerVars: {
                        controls: 0,
                        disablekb: 1,
                    }
                }}
                videoId={this.props.videoId}
                onReady={this.onYouTubeReady}
            />
        );
    }

}

// -----------------------------------------------------------------------------

export default Record;
