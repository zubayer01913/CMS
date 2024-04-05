import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'app',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44370/',
    redirectUri: baseUrl,
    clientId: 'app_App',
    responseType: 'code',
    scope: 'offline_access app',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44370',
      rootNamespace: 'cms.app',
    },
  },
} as Environment;
