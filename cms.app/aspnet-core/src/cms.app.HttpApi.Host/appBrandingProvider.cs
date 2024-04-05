using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace cms.app;

[Dependency(ReplaceServices = true)]
public class appBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "app";
}
