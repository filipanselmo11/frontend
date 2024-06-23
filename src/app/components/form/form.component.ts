import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent, CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() loginForm: any;
  @Output('submit') onSubmit = new EventEmitter();

}
