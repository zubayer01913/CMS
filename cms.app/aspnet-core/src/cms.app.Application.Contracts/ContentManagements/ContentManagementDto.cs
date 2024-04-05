using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace cms.app.ContentManagements
{
    public class ContentManagementDto : AuditedEntityDto<Guid>
    {
        public  string Title { get; set; }
        public  string Description { get; set; }
    }
}
