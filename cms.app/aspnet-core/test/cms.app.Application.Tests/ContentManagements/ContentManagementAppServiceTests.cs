using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Xunit;

namespace cms.app.ContentManagements
{
    public class ContentManagementAppServiceTests<TStartupModule> : appApplicationTestBase<TStartupModule>
    where TStartupModule : IAbpModule
    {
        private readonly IContentManagementAppService _userAppService;

        protected ContentManagementAppServiceTests()
        {
            _userAppService = GetRequiredService<IContentManagementAppService>();
        }


    }
}
