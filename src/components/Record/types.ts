export interface RecordProps {
    speed: number;
    videoId: string;

    playing?: boolean;
}

export interface YouTubePlayerEvent {
    target: {
        playVideo: () => void,
    }
}

interface PlayerVars {
    controls: 0 | 1;
    disablekb: 0 | 1;
}

export interface PlayerOptions {
    playerVars: PlayerVars;
}
