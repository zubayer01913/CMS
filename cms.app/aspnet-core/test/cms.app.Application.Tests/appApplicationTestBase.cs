using Volo.Abp.Modularity;

namespace cms.app;

public abstract class appApplicationTestBase<TStartupModule> : appTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
