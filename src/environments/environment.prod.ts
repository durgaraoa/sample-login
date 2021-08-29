import { domain, clientId, audience, apiUri } from '../../auth_config.json';

export const environment = {
  production: true,
  auth: {
    domain:"",
    clientId:""
    
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
