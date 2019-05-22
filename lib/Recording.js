"use strict";
/*
 * (C) Copyright 2017-2019 OpenVidu (https://openvidu.io/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var RecordingLayout_1 = require("./RecordingLayout");
/**
 * See [[OpenVidu.startRecording]]
 */
var Recording = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    /**
     * @hidden
     */
    function Recording(json) {
        /**
         * Size of the recording in bytes (0 until the recording is stopped)
         */
        this.size = 0;
        /**
         * Duration of the recording in seconds (0 until the recording is stopped)
         */
        this.duration = 0;
        this.id = json['id'];
        this.sessionId = json['sessionId'];
        this.createdAt = json['createdAt'];
        this.size = json['size'];
        this.duration = json['duration'];
        this.url = json['url'];
        this.status = json['status'];
        this.properties = {
            name: !!(json['name']) ? json['name'] : this.id,
            outputMode: !!(json['outputMode']) ? json['outputMode'] : Recording.OutputMode.COMPOSED,
            hasAudio: !!(json['hasAudio']),
            hasVideo: !!json['hasVideo']
        };
        if (this.properties.outputMode.toString() === Recording.OutputMode[Recording.OutputMode.COMPOSED]) {
            this.properties.resolution = !!(json['resolution']) ? json['resolution'] : '1920x1080';
            this.properties.recordingLayout = !!(json['recordingLayout']) ? json['recordingLayout'] : RecordingLayout_1.RecordingLayout.BEST_FIT;
            if (this.properties.recordingLayout.toString() === RecordingLayout_1.RecordingLayout[RecordingLayout_1.RecordingLayout.CUSTOM]) {
                this.properties.customLayout = json['customLayout'];
            }
        }
    }
    return Recording;
}());
exports.Recording = Recording;
(function (Recording) {
    /**
     * See [[Recording.status]]
     */
    var Status;
    (function (Status) {
        /**
         * The recording is starting (cannot be stopped)
         */
        Status["starting"] = "starting";
        /**
         * The recording has started and is going on
         */
        Status["started"] = "started";
        /**
         * The recording has finished OK
         */
        Status["stopped"] = "stopped";
        /**
         * The recording is available for downloading. This status is reached for all
         * stopped recordings if [OpenVidu Server configuration](https://openvidu.io/docs/reference-docs/openvidu-server-params/)
         * property `openvidu.recording.public-access` is true
         */
        Status["available"] = "available";
        /**
         * The recording has failed
         */
        Status["failed"] = "failed";
    })(Status = Recording.Status || (Recording.Status = {}));
    /**
     * See [[RecordingProperties.outputMode]]
     */
    var OutputMode;
    (function (OutputMode) {
        /**
         * Record all streams in a grid layout in a single archive
         */
        OutputMode["COMPOSED"] = "COMPOSED";
        /**
         * Record each stream individually
         */
        OutputMode["INDIVIDUAL"] = "INDIVIDUAL";
    })(OutputMode = Recording.OutputMode || (Recording.OutputMode = {}));
})(Recording = exports.Recording || (exports.Recording = {}));
exports.Recording = Recording;
//# sourceMappingURL=Recording.js.map