using Volo.Abp.Modularity;

namespace cms.app;

/* Inherit from this class for your domain layer tests. */
public abstract class appDomainTestBase<TStartupModule> : appTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
