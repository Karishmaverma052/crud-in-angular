import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
   user: any = {
    name: '',
    LastName: '',
    password:'',
    
  };
  onSubmit(){
    console.log(this.user);
  }
}
