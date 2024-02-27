import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { Page3Component } from './page-3/page-3.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    children: [
      { path: '', component: Page1Component, title: 'MFE Ext | Page 1' },
      { path: 'page-2', component: Page2Component, title: 'MFE Ext | Page 2' },
      { path: 'page-3', component: Page3Component, title: 'MFE Ext | Page 3' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
