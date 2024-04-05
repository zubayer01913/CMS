using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Drawing;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;

namespace cms.app.ContentManagements
{
    public class ContentManagementAppService : CrudAppService<ContentManagement, ContentManagementDto, Guid, PagedAndSortedResultRequestDto, CreateOrUpdateContentManagementDto>, IContentManagementAppService
    {
        public ContentManagementAppService(IRepository<ContentManagement, Guid> repository) : base(repository)
        {
       

        }

        public override async Task<ContentManagementDto> CreateAsync(CreateOrUpdateContentManagementDto input)
        {
         
          var output = await base.CreateAsync(input);
          return   output;
          
        }

        public async Task<ContentManagementDto> GetDataBySlugAsync(string input)
        {
            var data = (await Repository.GetQueryableAsync()).FirstOrDefault(x => x.Slug.ToLower() == input.ToLower());

            return ObjectMapper.Map<ContentManagement, ContentManagementDto>(data);
        }

        public async Task<List<ConentMenuDto>> GetContentMenuAsync()
        {
            var data = (await Repository.GetQueryableAsync()).ToList();

            return ObjectMapper.Map<List<ContentManagement>, List<ConentMenuDto>>(data);
        }


        //It is not used
        public async Task<ContentManagementDto> InsertOrUpdateAsync(Guid? id, CreateOrUpdateContentManagementDto input)
        {
            if (id.HasValue)
            {
                return await base.UpdateAsync(id.Value, input);
            }
            else
            {
                return await base.CreateAsync(input);
            }
        }
    }
}
