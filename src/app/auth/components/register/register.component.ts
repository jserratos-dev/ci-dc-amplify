import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/action';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
})

export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['ho', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private store: Store) {
      this.form.controls.email.disable()

  }

  onSubmit() {

    console.log('form', this.form.getRawValue())
    console.log('form', this.form.value)

    const  request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }
    
    this.store.dispatch(register({ request }));
  }

}
