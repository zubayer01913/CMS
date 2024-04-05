using Xunit;

namespace cms.app.EntityFrameworkCore;

[CollectionDefinition(appTestConsts.CollectionDefinitionName)]
public class appEntityFrameworkCoreCollection : ICollectionFixture<appEntityFrameworkCoreFixture>
{

}
