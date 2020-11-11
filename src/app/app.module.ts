import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AudioRecorderComponent } from './audio-recorder/audio-recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioRecorderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
