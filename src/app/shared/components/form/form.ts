import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  flag:boolean=true

  @Input() control!:any
  @Input() type!:string
  @Input() id!:string
  @Input() label!:string 



}
