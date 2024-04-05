using AutoMapper;
using cms.app.ContentManagements;

namespace cms.app;

public class appApplicationAutoMapperProfile : Profile
{
    public appApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */

        #region Content Management 
        CreateMap<ContentManagement, CreateOrUpdateContentManagementDto>().ReverseMap();
        CreateMap<ContentManagement, ContentManagementDto>().ReverseMap();
        CreateMap<ContentManagement, ConentMenuDto>().ReverseMap();
        #endregion
    }
}
