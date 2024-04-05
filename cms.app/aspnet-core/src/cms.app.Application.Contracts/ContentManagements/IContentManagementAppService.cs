using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace cms.app.ContentManagements
{
    public interface IContentManagementAppService : ICrudAppService<ContentManagementDto, Guid, PagedAndSortedResultRequestDto, CreateOrUpdateContentManagementDto>
    {
        Task<ContentManagementDto> InsertOrUpdateAsync(Guid? id, CreateOrUpdateContentManagementDto input);
        Task<List<ConentMenuDto>> GetContentMenuAsync();
        Task<ContentManagementDto> GetDataBySlugAsync(string input);
    }
}
