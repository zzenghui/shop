//当前页面进行统一的管理
import requests from './request'
import mockRequests from './mockAjax'


//三级联动文档
///api/product/getBaseCategoryList  get请求  无参数

export const reqCategoryList = () => {
    //发请求
    return requests({ url: 'product/getBaseCategoryList', method: 'get' });
}

export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqFloorList = () => mockRequests.get('/floor')

//获取搜索模块数据   /api/list  请求地址    post请求  需要带参

// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
// }


export const reqGetSearchInfo = (params) => requests({ url:'/list',method:"post",data:params})

//获取商品详情
export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`,method:"get"})

//产品添加到购物车中  /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddORUpdateShopCart = (skuId, skuNum) => requests({ url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})


export const reqCartList = () => requests({ url:'/cart/cartList',method:'get'})

//删除购物车
export const reqDeleteCArtById = (skuId) => requests({ url:`/cart/deleteCart/${skuId}`,method:'delete'})

//修改商品选中状态/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})


//获取验证码  /user/passport/sendCode/{phone}

export const reqGetCode = (phone) => requests({ url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册业务  /user/passport/register
export const reqRegister = (data) => requests({ url:'/user/passport/register',method:'post',data})

//登录业务 /user/passport/login
export const reqLogin = (data) => requests({ url:'/user/passport/login',method:'post',data})


//首页用户信息 /user/passport/auth/getUserInfo
export const reqUser = () => requests({ url: '/user/passport/auth/getUserInfo' , method: 'get'})

//退出登录   /user/passport/logout
export const reqlogout = () => requests({ url: '/user/passport/logout' , method: 'get'})

//用户地址 /api/user/userAddress/auth/findUserAddressList

export const reqAddress = () => requests({ url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//获取用户交易页信息
export const reqUserOrder = () => requests({ url:'/order/auth/trade',method:'get'})

//提交订单
export const reqsubmit = (tradeNo,data) => requests({ url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data})

//获取订单支付

export const reqPayInfo = (orderId) => requests({ url:`/payment/weixin/createNative/${orderId}`,method:'get'})


//查询订单支付情况
export const reqorderInfo = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get'})

//获取订单列表
export const reqMyOrder = (page, limit) => requests({ url:`/order/auth/${page}/${limit}`,method:'get'})