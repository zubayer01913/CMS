import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContentManagementRoutingModule } from './content-management-routing.module';
import { ContentManagementComponent } from './content-management.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [ContentManagementComponent],
  imports: [SharedModule, ContentManagementRoutingModule, QuillModule.forRoot()],
})
export class ContentManagementModule { }
