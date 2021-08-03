import { AbstractControl } from "@angular/forms";

export function cssValidacaoForm(control: AbstractControl) {
    if (control.touched) {
      return control.errors ? 'is-invalid' : 'is-valid';
    }
    return '';
}