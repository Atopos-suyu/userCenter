/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';
import {message} from "antd";
import * as process from "process";


/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  prefix:process.env.NODE_ENV === 'production' ? 'http://user-backend.code-nav.cn' : undefined
  // requestType: 'form',
});

/**
 * 所以请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  return {
    url,
    options: {
      ...options,
      headers: {
      },
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const res = await response.clone().json();
  if(res.code !== 0){
    message.error(res.description)
  }
  //todo 这个地方，将收到的请求直接返回，没有对其处理，所以在使用的时候，需要取data
  return res;
});

export default request;
