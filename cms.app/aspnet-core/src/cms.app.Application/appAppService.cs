using System;
using System.Collections.Generic;
using System.Text;
using cms.app.Localization;
using Volo.Abp.Application.Services;

namespace cms.app;

/* Inherit your application services from this class.
 */
public abstract class appAppService : ApplicationService
{
    protected appAppService()
    {
        LocalizationResource = typeof(appResource);
    }
}
