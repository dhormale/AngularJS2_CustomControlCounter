import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.ts';
import { CounterInputComponent } from './counter-input.component.ts';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CounterInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}