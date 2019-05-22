import { RecordingProperties } from './RecordingProperties';
/**
 * See [[OpenVidu.startRecording]]
 */
export declare class Recording {
    /**
     * Recording unique identifier
     */
    id: string;
    /**
     * Session associated to the recording
     */
    sessionId: string;
    /**
     * Time when the recording started in UTC milliseconds
     */
    createdAt: number;
    /**
     * Size of the recording in bytes (0 until the recording is stopped)
     */
    size: number;
    /**
     * Duration of the recording in seconds (0 until the recording is stopped)
     */
    duration: number;
    /**
     * URL of the recording. You can access the file from there. It is `null` until recording is stopped or if OpenVidu Server configuration property `openvidu.recording.public-access` is false
     */
    url: string;
    /**
     * Status of the recording
     */
    status: Recording.Status;
    /**
     * Technical properties of the recorded file
     */
    properties: RecordingProperties;
    /**
     * @hidden
     */
    constructor(json: JSON);
}
export declare namespace Recording {
    /**
     * See [[Recording.status]]
     */
    enum Status {
        /**
         * The recording is starting (cannot be stopped)
         */
        starting = "starting",
        /**
         * The recording has started and is going on
         */
        started = "started",
        /**
         * The recording has finished OK
         */
        stopped = "stopped",
        /**
         * The recording is available for downloading. This status is reached for all
         * stopped recordings if [OpenVidu Server configuration](https://openvidu.io/docs/reference-docs/openvidu-server-params/)
         * property `openvidu.recording.public-access` is true
         */
        available = "available",
        /**
         * The recording has failed
         */
        failed = "failed"
    }
    /**
     * See [[RecordingProperties.outputMode]]
     */
    enum OutputMode {
        /**
         * Record all streams in a grid layout in a single archive
         */
        COMPOSED = "COMPOSED",
        /**
         * Record each stream individually
         */
        INDIVIDUAL = "INDIVIDUAL"
    }
}
