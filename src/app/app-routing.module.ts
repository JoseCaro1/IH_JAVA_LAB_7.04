import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: '**',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
