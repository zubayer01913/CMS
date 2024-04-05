import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContentManagementComponent } from './content-management.component';
import { ContentManagementDetailsComponent } from './content-management-details.component';

const routes: Routes = [
  { 
   path: '', 
  component: ContentManagementComponent 
  },
  {
    path: ':slug',
    component: ContentManagementDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentManagementRoutingModule {}
