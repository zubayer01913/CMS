using cms.app.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace cms.app.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class appController : AbpControllerBase
{
    protected appController()
    {
        LocalizationResource = typeof(appResource);
    }
}
