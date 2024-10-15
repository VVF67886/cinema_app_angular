import { Component, ChangeDetectionStrategy, EventEmitter, output, Output } from '@angular/core';
import { NativeDateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  standalone: true,
  styleUrl: './picker.component.css',
  imports: [MatFormFieldModule, MatDatepickerModule, MatInputModule],
  providers: [
    provideNativeDateAdapter()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickerComponent extends NativeDateAdapter {
  startDate: any;
  endDate: any;

  @Output() dates = new EventEmitter<string[]>();


  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.startDate = dateRangeStart.value.toString();
    this.endDate = dateRangeEnd.value.toString();
    this.dates.emit([this.startDate, this.endDate]);
  }

  
}


