//对于axios进行二次封装
import axios from "axios";
//获取仓库:存储数据
import store from '@/store'
//引入进度条
import nprogress from 'nprogress'
//start:进度条开始  done:进度条结束
//引入相关进度条的样式
import 'nprogress/nprogress.css';


//axios.create方法执行,其实返回一个axios和request一样的
const requests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api",
    //超时的设置
    timeout: 5000
});

//请求拦截器:将来项目中【N个请求】，只要发请求,会触发请求拦截器!!!
requests.interceptors.request.use(config => {
    
    //进度条开始动
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //判断需要携带token返回服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    nprogress.start();
    return config;

});


//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    //进度条结束
    nprogress.done();
    return res.data;
}, (err) => {
    return err.message
});

//最后需要暴露:暴露的是添加新的功能的axios,即为requests
export default requests;













