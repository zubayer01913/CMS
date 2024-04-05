using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace cms.app.Data;

/* This is used if database provider does't define
 * IappDbSchemaMigrator implementation.
 */
public class NullappDbSchemaMigrator : IappDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
