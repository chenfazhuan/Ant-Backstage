import axios from 'axios'



//请求地址
var RobotList_url=''//机器人列表
var SpecialAccount_url=''//特殊用户
var RobotList_url2=''//机器人列表2
var AddSpecialAccount_url=''//特殊账号增加用户
var getModuleManagement_url=''//模块管理
var OrderList=''//订单列表
var OderLIstHandle=''//订单列表处理
var InformationManagement=''//车商管理地址
// var QueryDetails='http://dev.mayinvwang.com/car/api/v1/carDealerOrder/carDealerOrder'//车商详细信息
var QueryDetails=''//车商详细信息


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
var UserManagementAdd="";//用户管理添加

var GetRobotDispath=''
var PostRobotDispath=''


export function GetRobotDispath(id) {
  var data="brandId="+id
  return axios.post(GetRobotDispath,data).then((res) => {
    return Promise.resolve(res.data)
  })

}
export function PostRobotDispath(data) {
  return axios.post(PostRobotDispath,data).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function SetUserManagementAdd(username,password,repassword,viewname,tel,status,deptId) {
  //   let url=UserManagementAdd;
  // var p=new URLSearchParams();
  // p.append('username',username);
  // p.append('password',password);
  // p.append('repassword',repassword);
  // p.append('viewname',viewname);
  // p.append('tel',tel);
  // p.append('status',status);
  // p.append('deptId',deptId);
  //  return axios.post(url,p).then(function (res) {
  //   console.log(res);
  //   return Promise.resolve( res.data);
  // })

  return Promise.resolve('');

}

export function getRecommend(post,page,keyword){
  // var url='/getDiscList'
  // var u=''
  // if(post=='RobotList'){u=RobotList_url}
  // if(post=='SpecialAccount'){u=SpecialAccount_url}
  // if(keyword==undefined){keyword=''}
  // var data="keyWord="+keyword+"&currentPage="+page+"&url="+u
  // return axios.post(url,data)
  //   .then((res)=>{
  //   return Promise.resolve(res.data)
  // })
  return Promise.resolve('');
}

export function getAddSpecialAccount(phone){
  // var url='/getAddSpecialAccount'
  // var data="phone="+phone+"&url="+AddSpecialAccount_url
  // return axios.post(url,data)
  //   .then((res)=>{
  //     return Promise.resolve(res.data)
  //   })
  return Promise.resolve('');
}

export function getRobot2(queryId,vinCode,partnerId,partnerName,phone,startTime,endTime,currentPage){
  // var url='/getRobot2'
  // var data="queryId="+queryId+"&vinCode="+vinCode+"&partnerId="+partnerId+"&partnerName="+partnerName+"&phone="+phone+"&startTime="+startTime+"&endTime="+endTime+"&currentPage="+currentPage+"&url="+RobotList_url2
  // return axios.post(url,data)
  //   .then((res)=>{
  //     return Promise.resolve(res.data)
  //   })
  return Promise.resolve('');
}

export function getOrderList(keywords,phone,brand,startTime,endTime,currentPage){
  // var url='/getOrderList'
  // var data="keywords="+keywords+"&phone="+phone+"&brand="+brand+"&startTime="+startTime+"&endTime="+endTime+"&currentPage="+currentPage+"&url="+OrderList
  // return axios.post(url,data)
  //   .then((res)=>{
  //     return Promise.resolve(res.data)
  //   })
  return Promise.resolve('');
}

export function getModuleManagement(){
  // var url='/getModuleManagement'
  // var data='system=1'+"&url="+getModuleManagement_url
  // return axios.post(url,data)
  //   .then((res)=>{
  //     return Promise.resolve(res.data)
  //   })
  return Promise.resolve('');
}

export function getInformationManagement(conType, token, names, price, phone, city, operator, currentPage,status){
  // var url='/getInformationManagement'
  // var data="conType="+conType+"&token="+token+"&names="+names+"&price="+price+"&phone="+phone+"&city="+city+"&operator="+operator+"&status="+status+"&currentPage="+currentPage+"&url="+InformationManagement
  // return axios.post(url,data)
  //   .then((res)=>{
  //     return Promise.resolve(res.data)
  //   })
  return Promise.resolve('');
}

export function getQueryDetails(conType, token, currentPage,beginTime,endTime,carDealerName,phone,payStatus,queryStatus){
  var url='/getQueryDetails'
  var data="conType="+conType+"&token="+token+"&currentPage="+currentPage+"&beginTime="+beginTime+"&endTime="+endTime+"&carDealerName="+carDealerName+"&phone="+phone+"&payStatus="+payStatus+"&queryStatus="+queryStatus
  // return axios.post(url,data)
  //   .then((res)=>{
  //     return Promise.resolve(res.data)
  //   })
  // return Promise.resolve('');


  return axios.post(QueryDetails, data).then((res) => {
    return Promise.resolve(res.data)
  })

}

export function getOderLIstHandle(token){
  // var url='/getOderLIstHandle'
  // var data="token="+token+"&url="+OderLIstHandle
  // return axios.post(url,data)
  //   .then((res)=>{
  //     return Promise.resolve(res.data)
  //   })
  return Promise.resolve('');
}


