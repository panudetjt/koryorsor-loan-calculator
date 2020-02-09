import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

// https://stackoverflow.com/questions/37800841/mask-for-an-input-to-allow-phone-numbers

@Directive({
  selector: '[appMaskNumber]'
})
export class MaskNumberDirective {

  constructor(
    public ngControl: NgControl
  ) {
  }

  @HostListener('ionChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event.target.value, false);
  }

  onInputChange(event, backspace: boolean) {
    // https://stackoverflow.com/a/1990554 : for regex commas
    let newValue = event.replace(/\D/g, '')
    this.ngControl.control.setValue(newValue)
    this.ngControl.valueAccessor.writeValue(newValue.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
  }
}
