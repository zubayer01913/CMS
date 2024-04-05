using Volo.Abp.Modularity;

namespace cms.app;

[DependsOn(
    typeof(appApplicationModule),
    typeof(appDomainTestModule)
)]
public class appApplicationTestModule : AbpModule
{

}
