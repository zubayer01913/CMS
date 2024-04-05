import type { ConentMenuDto, ContentManagementDto, CreateOrUpdateContentManagementDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentManagementService {
  apiName = 'Default';
  

  create = (input: CreateOrUpdateContentManagementDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContentManagementDto>({
      method: 'POST',
      url: '/api/app/content-management',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/content-management/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContentManagementDto>({
      method: 'GET',
      url: `/api/app/content-management/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getContentMenu = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ConentMenuDto[]>({
      method: 'GET',
      url: '/api/app/content-management/content-menu',
    },
    { apiName: this.apiName,...config });
  

  getDataBySlug = (input: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContentManagementDto>({
      method: 'GET',
      url: '/api/app/content-management/data-by-slug',
      params: { input },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ContentManagementDto>>({
      method: 'GET',
      url: '/api/app/content-management',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  insertOrUpdate = (id: string, input: CreateOrUpdateContentManagementDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContentManagementDto>({
      method: 'POST',
      url: `/api/app/content-management/${id}/or-update`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateOrUpdateContentManagementDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContentManagementDto>({
      method: 'PUT',
      url: `/api/app/content-management/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
