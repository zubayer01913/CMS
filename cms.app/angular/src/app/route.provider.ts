import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { ContentManagementService } from '@proxy/content-managements';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService, ContentManagementService], multi: true },
];

function configureRoutes(routesService: RoutesService , contentManagementService : ContentManagementService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
    ]);

    routesService.add([
      {
        path: '/content-management',
        name: 'Content Management',
        iconClass: 'fas fa-blog',
        order: 2,
        layout: eLayoutType.application,
      },
    ]);

    contentManagementService.getContentMenu().subscribe(response => {
      response.forEach((menuItem, index) => {
        routesService.add([{
          path: `/content-management/${menuItem.slug}`,
          name: `${menuItem.title}`,
          iconClass: 'fa fa-clipboard',
          order: index + 2, 
          layout: eLayoutType.application,
        },
        ]);
      });
     
    });


  };
}
