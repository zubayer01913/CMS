import { LIST_QUERY_DEBOUNCE_TIME, ListService, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentManagementDto, ContentManagementService, CreateOrUpdateContentManagementDto} from '@proxy/content-managements';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrl: './content-management.component.scss',
  providers: [
    ListService,
    { provide: LIST_QUERY_DEBOUNCE_TIME, useValue: 500 },
  ],
  template: `
    
  `,
})
export class ContentManagementComponent  implements OnInit {

  inProgress: boolean;
  isModalOpen: boolean;
  id: string;
  form = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });
  
  items: ContentManagementDto[] = [];
  count = 0;
  constructor(
    public readonly list: ListService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    private toaster: ToasterService,
    private _contentManagementService : ContentManagementService
  ) {}


  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    let input = new PagedAndSortedResultRequestDto();
    this._contentManagementService.getList(input).subscribe( response =>{
       this.items = response.items;
       this.count = response.totalCount;
    });
  }

  editRow(data: ContentManagementDto){
      this.id = data.id;
      this.isModalOpen = true;

     this.form.patchValue({
      title: data.title,
      description: data.description
    });

  }

  deleteRow(data: ContentManagementDto){
    this.confirmation
    .warn(data.title+' will be deleted', { key: '::AreYouSure', defaultValue: 'Are you sure?' })
    .subscribe((status: Confirmation.Status) => {
      if(status == "confirm"){
        this._contentManagementService.delete(data.id).subscribe(x => {
          this.toaster.success("Deleted Successfully");
          location.reload();
        });
      }
    });
  }

  save() {
    if (this.form.invalid) return;

    this.inProgress = true;
    this.form.value
    let input = this.form.value as CreateOrUpdateContentManagementDto;
    if(this.id){
      this._contentManagementService.update(this.id, input).subscribe(() => {
        this.id = null;
        this.reloadPage();
      });
    }else{
      this._contentManagementService.create(input).subscribe(() => {
        this.reloadPage();
      });
    } 
  }

  reloadPage() {
    this.inProgress = false;
    this.isModalOpen = false;
    location.reload();
    // this.getAll();
    // this.form.reset();
  }

}
