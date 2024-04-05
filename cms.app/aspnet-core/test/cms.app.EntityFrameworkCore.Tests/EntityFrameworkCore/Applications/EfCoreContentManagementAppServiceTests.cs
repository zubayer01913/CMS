using cms.app.ContentManagements;
using cms.app.Samples;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace cms.app.EntityFrameworkCore.Applications
{
    [Collection(appTestConsts.CollectionDefinitionName)]
    public class EfCoreContentManagementAppServiceTests : ContentManagementAppServiceTests<appEntityFrameworkCoreTestModule>
    {

    }
}
