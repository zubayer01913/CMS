using System.Threading.Tasks;

namespace cms.app.Data;

public interface IappDbSchemaMigrator
{
    Task MigrateAsync();
}
