import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component : MainpageComponent
  }
]

@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),  ]
})
export class PagesModule { }

