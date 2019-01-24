import axios from 'axios'

axios.defaults.baseURL = 'http://msg.doadc.com/';
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns
 */

export function fetch(url,params){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
      .then(response => {
        resolve(response);
      },err => {
        reject(err)
      })
   })
 }
/*首页轮播图*/
export const getIndexBanner = () => fetch('index/index/getIndexBanner')
/*首页分类图标*/
export const getCategory = () => fetch('index/index/post_cate')