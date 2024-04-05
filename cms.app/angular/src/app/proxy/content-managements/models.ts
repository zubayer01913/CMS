import type { AuditedEntityDto } from '@abp/ng.core';

export interface ConentMenuDto {
  title?: string;
  slug?: string;
}

export interface ContentManagementDto extends AuditedEntityDto<string> {
  title?: string;
  description?: string;
}

export interface CreateOrUpdateContentManagementDto {
  title: string;
  slug?: string;
  description: string;
}
