using cms.app.Samples;
using Xunit;

namespace cms.app.EntityFrameworkCore.Domains;

[Collection(appTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<appEntityFrameworkCoreTestModule>
{

}
