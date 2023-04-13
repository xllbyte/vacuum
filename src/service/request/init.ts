import { getServiceEnvConfig } from '~/.env-config';
import { initRequest} from './request';

const { url } = getServiceEnvConfig(import.meta.env);
export const requestFinal = initRequest({ baseURL: url });
