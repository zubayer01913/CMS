using cms.app.Samples;
using Xunit;

namespace cms.app.EntityFrameworkCore.Applications;

[Collection(appTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<appEntityFrameworkCoreTestModule>
{

}
