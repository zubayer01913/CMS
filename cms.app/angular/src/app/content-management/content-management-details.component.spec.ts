import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagementDetailsComponent } from './content-management-details.component';

describe('ContentManagementDetailsComponent', () => {
  let component: ContentManagementDetailsComponent;
  let fixture: ComponentFixture<ContentManagementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentManagementDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
