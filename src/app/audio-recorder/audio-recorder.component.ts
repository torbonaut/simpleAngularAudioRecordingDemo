import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export type CurrentAction = 'inactive' | 'recording' | 'playback' | 'recording_paused' | 'playback_paused';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioRecorderComponent implements OnInit {

  currentAction: CurrentAction = 'inactive';
  constraints = { audio: true };
  chunks = [];

  constructor() { }

  ngOnInit(): void {
  }

  isRecordingSupported(): boolean {
    return !!navigator.mediaDevices;
  }

}
