using Volo.Abp.Modularity;

namespace cms.app;

[DependsOn(
    typeof(appDomainModule),
    typeof(appTestBaseModule)
)]
public class appDomainTestModule : AbpModule
{

}
