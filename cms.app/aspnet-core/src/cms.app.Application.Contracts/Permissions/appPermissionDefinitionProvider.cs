using cms.app.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace cms.app.Permissions;

public class appPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(appPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(appPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<appResource>(name);
    }
}
