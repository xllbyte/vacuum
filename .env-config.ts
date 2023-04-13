/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

/** 不同请求服务的环境配置
 *  开发时接口地址只需修改dev即可全局引用
 */
const serviceEnv: ServiceEnv = {
  dev: {
    url: 'http://127.0.0.1:8088',
    urlPattern: '/url-pattern',
    secondUrl: 'http://127.0.0.1:8088',
    secondUrlPattern: '/second-url-pattern'
  },
  test: {
    url: 'http://0.0.0.0:8088',
    urlPattern: '/url-pattern',
    secondUrl: 'http://0.0.0.0:8088',
    secondUrlPattern: '/second-url-pattern'
  },
  prod: {
    url: 'http://0.0.0.0:8088',
    urlPattern: '/url-pattern',
    secondUrl: 'http://0.0.0.0:8088',
    secondUrlPattern: '/second-url-pattern'
  }
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv) {
  const { VITE_SERVICE_ENV = 'dev' } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return config;
}
