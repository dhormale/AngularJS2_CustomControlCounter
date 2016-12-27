import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createCounterRangeValidator } from './counter-input.component';

@Component({
  selector: 'my-app',
  template: `
    <h2>Inside Form</h2>
    <div>
      <label>Change min value:</label>
      <input [(ngModel)]="minValue">
    </div>
    <div>
      <label>Change max value:</label>
      <input [(ngModel)]="maxValue">
    </div>
    <form [formGroup]="form">
      <p>Control value: {{form.controls.counter.value}}</p>
      <p>Min Value: {{minValue}}</p>
      <p>Max Value: {{maxValue}}</p>
      <p>Form Value:</p>
      <pre>{{ form.value | json }}</pre>
      
      <counter-input
        formControlName="counter"
        [counterRangeMax]="maxValue"
        [counterRangeMin]="minValue"
        [counterValue]="50"
        ></counter-input>
    </form>

    <p *ngIf="!form.valid">Form is invalid!</p>

    
    <h2>Standalone</h2>
    <counter-input
      counterMinValue="0"
      counterMaxValue="3"
      [counterValue]="counterValue"></counter-input>
  `
})
export class AppComponent {

  form:FormGroup;
  counterValue = 3;
  minValue = 0;
  maxValue = 12;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      counter: this.counterValue
    });
  }

  // Remove comments to apply validation imperatively
  // Also remove [counterRangeMax|Min] from <custom-counter> to see effect
  /*
  ngOnInit() {
    this.form = this.fb.group({
      counter: [this.counterValue, createCounterRangeValidator(this.maxValue, this.minValue)]
    });
  }
  */
}