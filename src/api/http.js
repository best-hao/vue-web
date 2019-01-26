import axios from 'axios'
import qs from 'qs';

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
    	console.log(response.data)
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

 export function post(url,data){
   return new Promise((resolve,reject) => {
	     axios.post(url,{
	     	data:qs.stringify(data)
	     })
      .then(response => {      	
        resolve(response);
      })
      .catch(err => {
      	reject(err)
      })
   })
 }
/*首页轮播图*/
export const getIndexBanner = () => fetch('index/index/getIndexBanner')
/*首页分类图标*/
export const getCategory = () => fetch('index/index/post_cate')
/*发布*/
export const sendPosts = params => fetch('index/posts/send_posts',params)

export const sendPost = data => post('index/posts/send_posts',data)
