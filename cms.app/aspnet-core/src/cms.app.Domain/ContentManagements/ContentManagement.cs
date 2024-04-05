using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace cms.app.ContentManagements
{
    public class ContentManagement : FullAuditedAggregateRoot<Guid>
    {
        public string Title { get; set; }
        public string? Slug { get; set; }
        public string Description { get; set; }
        public string? Tag { get; set; }
        public string? ImageName { get; set; }

    }
}
