/*
 * Record: View which encompasses a YouTube video which represents a "record"
 * being played.
 */

import * as React from "react";
import Youtube from "react-youtube";

import * as T from './types';
import EmptyState from "../../types/EmptyState";

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

    async componentWillReceiveProps(nextProps: T.RecordProps) : Promise<void> {
        if (this.videoElRef) {
            const ytIframe = await this.videoElRef.internalPlayer.getIframe();
            this.setIframePlayBackRate(ytIframe, this.props.speed);
        }
    }

    onYouTubeReady = (event: T.YouTubePlayerEvent) : void => {
        if (this.props.playing) {
            event.target.playVideo();
        }
    }

    setIframePlayBackRate = (iframe: any, speed: number) : void {
        iframe.contentDocument.querySelector('video').playbackRate = speed;
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
