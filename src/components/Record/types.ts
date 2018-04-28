export interface RecordProps {
    videoId: string;

    speed?: number;
    playing?: boolean;
}

export interface YouTubePlayerEvent {
    target: any,
}

interface PlayerVars {
    controls: 0 | 1;
    disablekb: 0 | 1;
}

export interface PlayerOptions {
    playerVars: PlayerVars;
}
