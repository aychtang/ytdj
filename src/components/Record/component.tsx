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
        controls: 1,
        disablekb: 1,
    }
};

class Record extends React.PureComponent<T.RecordProps, EmptyState> {

    videoElRef: any;

    componentWillReceiveProps(nextProps: T.RecordProps) : void {
        if (this.videoElRef) {
            this.videoElRef.internalPlayer.getIframe().then((x : any) => {
                x.contentDocument.querySelector('video').playbackRate = this.props.speed;
            });
        }
    }

    /*
     * onYouTubeReady: To be run when YT player is initialised:
     */
    onYouTubeReady = (event: T.YouTubePlayerEvent) : void => {
        if (this.props.playing) {
            event.target.playVideo();
        }
    }

    render () {
        return (
            <Youtube
                ref={ref => this.videoElRef = ref}
                opts={PLAYER_OPTIONS}
                videoId={this.props.videoId}
                onReady={this.onYouTubeReady}
            />
        );
    }

}

// -----------------------------------------------------------------------------

export default Record;
