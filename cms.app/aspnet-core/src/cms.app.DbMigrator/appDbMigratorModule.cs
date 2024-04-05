using cms.app.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace cms.app.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(appEntityFrameworkCoreModule),
    typeof(appApplicationContractsModule)
    )]
public class appDbMigratorModule : AbpModule
{
}
