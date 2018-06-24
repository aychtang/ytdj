export interface RecordBagProps {
    id: number;
    default?: string;
    setRecord?: (id: number, videoId: string) => void;
}

export interface RecordBagDispatchFromProps {
    setRecord: (id: number, videoId: string) => void;
}
