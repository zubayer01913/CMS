import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentManagementDto, ContentManagementService } from '@proxy/content-managements';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-management-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-management-details.component.html',
  styleUrl: './content-management-details.component.scss'
})
export class ContentManagementDetailsComponent implements OnInit {

  content: ContentManagementDto;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _contentManagementService : ContentManagementService
  ) {}


  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      let slug = params['slug'];
      this.loadData(slug);
    });
  }

    loadData(slug: string) {
      this._contentManagementService.getDataBySlug(slug).subscribe(response => {
          this.content = response;
      });
    }

}
