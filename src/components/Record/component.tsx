import * as React from "react";

import { RecordProps } from "./types";
import { UnitState } from "../../types/UnitState";

import Youtube from "react-youtube";

/*
 * Record: View which encompasses a YouTube video which represents a "record"
 * being played.
 */
class Record extends React.PureComponent<RecordProps, UnitState> {
    constructor (props: RecordProps) {
        super(props, {});

        this.onYouTubeReady = this.onYouTubeReady.bind(this);
    }

    onYouTubeReady (event: any) {
        if (this.props.playing) {
            event.target.playVideo();
        }
    }

    render () {
        return (
            <Youtube
                videoId={this.props.videoId}
                onReady={this.onYouTubeReady}
            />
        );
    }
}

export default Record;
