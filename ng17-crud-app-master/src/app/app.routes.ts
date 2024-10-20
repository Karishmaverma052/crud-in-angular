import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FormComponent } from './form/form.component';

export const routes: Routes =
 [
    { path: '', component: EmployeeComponent },
    { path: 'form', component: FormComponent }
];
