//主页模块
import Home from '@/components/home'
import dash from '@/components/view/view'
import dash2 from '@/components/view/view2'

//登录模块
import Login from '@/components/login/login'

//机器人列表模块
import RobotList from '@/components/robot_list/RobotList'

//用户管理模块
import GeneralAccount from '@/components/user_management/GeneralAccount'
import SpecialAccount from '@/components/user_management/SpecialAccount'
import AddSpecialAccount from '@/components/user_management/AddSpecialAccount'

//平台管理模块
import ModuleManagement from '@/components/platform_management/ModuleManagement'
import RoleManagement from '@/components/platform_management/RoleManagement'
import UserManagement from '@/components/platform_management/UserManagement'
import UserManagementMain from '@/components/platform_management/UserManagementMain/UserManagementMain'

//基本管理模块
import RobotList2 from '@/components/basic_settings/RobotList2'
import IQ_processing from '@/components/basic_settings/IQ_processing'
import Feedback from '@/components/basic_settings/Feedback'
import FullList from '@/components/basic_settings/FullList'
import Collaborator from '@/components/basic_settings/Collaborator'
import CollaboratorsList from '@/components/basic_settings/CollaboratorsList'
import AutoPolling from '@/components/basic_settings/AutoPolling'
import GCustomer from '@/components/basic_settings/GCustomer'
import AccountInquiry from '@/components/basic_settings/AccountInquiry'
import OrderList from '@/components/basic_settings/OrderList'
import SuccessfulOrder from '@/components/basic_settings/SuccessfulOrder'
import FailureOrder from '@/components/basic_settings/FailureOrder'
import RejectionOrder from '@/components/basic_settings/RejectionOrder'
import NonrecordOrder from '@/components/basic_settings/NonrecordOrder'
import Dictionaries from '@/components/basic_settings/Dictionaries'
import QueryRecord from '@/components/basic_settings/QueryRecord'
import QueryProcessing from '@/components/basic_settings/QueryProcessing'
import QueryProcessing_operation from '@/components/basic_settings/QueryProcessing_operation'
import QueryProcessing_img from '@/components/basic_settings/QueryProcessing_img'
import OrderList_Handle from '@/components/basic_settings/OrderList_Handle'

//手机端设置
import VersionList from '@/components/mobile_sectting/VersionList'
import ContentConfiguration from '@/components/mobile_sectting/ContentConfiguration'
import BrandList from '@/components/mobile_sectting/BrandList'
import CompanyInsurance from '@/components/mobile_sectting/CompanyInsurance'
import Coupon from '@/components/mobile_sectting/Coupon'
import Push from '@/components/mobile_sectting/Push'
import BannerImage from '@/components/mobile_sectting/BannerImage'
import ActivityList from '@/components/mobile_sectting/ActivityList'

//机器人派单
import RobotDispatch from '@/components/robot_dispatch/robotDispatch'

//车商模块
import QueryDetails from '@/components/carDealer/QueryDetails'
import InformationManagement from '@/components/carDealer/InformationManagement'

//404页面
import error from '@/components/404'

//图标
import icon from '@/components/icon/icon'

export default [
  {
    path:'/ActivityList',
    component:ActivityList,
    name:'ActivityList',
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/BannerImage',
    component:BannerImage,
    name:'BannerImage',
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/UserManagementMain',
    component: UserManagementMain,
    name:'UserManagementMain',
    meta: {
      // 添加该字段，表示进入这个路由是需要登录的
      requireAuth: true,
    },
  },
  {
    path: '/home',
    name:'Home',
    meta: {
      requireAuth: true
    },
    component: Home,
    children: [{
      path: 'dash',
      alias: '',
      component: dash2,
      meta: {
        requireAuth: true,
      },
      name: 'Dashboard'
    }]
  },
  {
    path: '/login',
    name:'Login',
    component: Login
  },
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/RobotList',
    name:'RobotList',
    component: RobotList,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/GeneralAccount',
    name:'GeneralAccount',
    component: GeneralAccount,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/SpecialAccount',
    component: SpecialAccount,
    name:'SpecialAccount',
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/SpecialAccount/AddSpecialAccount',
    meta: {
      requireAuth: true,
    },
    name: 'AddSpecialAccount',
    component: AddSpecialAccount
  },
  {
    path: '/ModuleManagement',
    name: 'ModuleManagement',
    component: ModuleManagement,
    meta: {
      requireAuth: true,
    },
    children: [{
    path: 'icon',
    component: icon,
    meta: {
      requireAuth: true,
    },
    name: 'icon'
  }]
  },
  {
    path: '/RoleManagement',
    component: RoleManagement,
    name: 'RoleManagement',
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/UserManagement',
    name: 'UserManagement',
    component: UserManagement,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/Robot2',
    name: 'RobotList2',
    component: RobotList2,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/IQ_processing',
    name: 'IQ_processing',
    meta: {
      requireAuth: true,
    },
    component: IQ_processing
  },
  {
    path: '/Feedback',
    name: 'Feedback',
    meta: {
      requireAuth: true,
    },
    component: Feedback
  },
  {
    path: '/FullList',
    name: 'FullList',
    meta: {
      requireAuth: true,
    },
    component: FullList
  },
  {
    path: '/Collaborator',
    name: 'Collaborator',
    meta: {
      requireAuth: true,
    },
    component: Collaborator
  },
  {
    path: '/CollaboratorsList',
    name: 'CollaboratorsList',
    meta: {
      requireAuth: true,
    },
    component: CollaboratorsList
  },
  {
    path: '/AutoPolling',
    name: 'AutoPolling',
    meta: {
      requireAuth: true,
    },
    component: AutoPolling
  },
  {
    path: '/GCustomer',
    name: 'GCustomer',
    meta: {
      requireAuth: true,
    },
    component: GCustomer
  },
  {
    path: '/AccountInquiry',
    name: 'AccountInquiry',
    meta: {
      requireAuth: true,
    },
    component: AccountInquiry
  },
  {
    path: '/OrderList',
    name: 'OrderList',
    meta: {
      requireAuth: true
    },
    component: OrderList
  },
  {
    path: '/SuccessfulOrder',
    name: 'SuccessfulOrder',
    meta: {
      requireAuth: true
    },
    component: SuccessfulOrder
  },
  {
    path: '/FailureOrder',
    name: 'FailureOrder',
    meta: {
      requireAuth: true
    },
    component: FailureOrder
  },
  {
    path: '/RejectionOrder',
    name: 'RejectionOrder',
    meta: {
      requireAuth: true
    },
    component: RejectionOrder
  },
  {
    path: '/NonrecordOrder',
    name: 'NonrecordOrder',
    meta: {
      requireAuth: true
    },
    component: NonrecordOrder
  },
  {
    path: '/Dictionaries',
    name: 'Dictionaries',
    meta: {
      requireAuth: true
    },
    component: Dictionaries
  },
  {
    path: '/QueryRecord',
    name: 'QueryRecord',
    meta: {
      requireAuth: true
    },
    component: QueryRecord
  },
  {
    path: '/VersionList',
    name: 'VersionList',
    meta: {
      requireAuth: true
    },
    component: VersionList
  },
  {
    path: '/ContentConfiguration',
    name: 'ContentConfiguration',
    meta: {
      requireAuth: true
    },
    component: ContentConfiguration
  },
  {
    path: '/BrandList',
    name: 'BrandList',
    meta: {
      requireAuth: true
    },
    component: BrandList
  },
  {
    path: '/CompanyInsurance',
    name: 'CompanyInsurance',
    meta: {
      requireAuth: true
    },
    component: CompanyInsurance
  },
  {
    path: '/Coupon',
    name: 'Coupon',
    meta: {
      requireAuth: true
    },
    component: Coupon
  },
  {
    path: '/Push',
    name: 'Push',
    meta: {
      requireAuth: true
    },
    component: Push
  },
  {
    path: '/QueryProcessing',
    name: 'QueryProcessing,',
    meta: {
      requireAuth: true
    },
    component: QueryProcessing,
    children: [{
      path: 'icon',
      component: icon,
      meta: {
        requireAuth: true,
      },
      name: 'icon'
    }]
  },
  {
    path: '/QueryDetails',
    name: 'QueryDetails',
    meta: {
      requireAuth: true
    },
    component: QueryDetails
  },
  {
    path: '/InformationManagement',
    name: 'InformationManagement',
    meta: {
      requireAuth: true
    },
    component: InformationManagement
  },
  {
    path: '/OrderList_Handle',
    name: 'OrderList_Handle',
    meta: {
      requireAuth: true
    },
    component: OrderList_Handle
  },
  {
    path: '/dash',
    name: 'dash',
    meta: {
      requireAuth: true
    },
    component: dash
  },
  {
    path: '/QueryProcessing_operation',
    name: 'QueryProcessing_operation',
    meta: {
      requireAuth: true
    },
    component: QueryProcessing_operation
  },
  {
    path: '/QueryProcessing_img',
    name: 'QueryProcessing_img',
    meta: {
      requireAuth: true
    },
    component: QueryProcessing_img
  },
  {
    path: '/RobotDispatch',
    name: 'RobotDispatch',
    meta: {
      requireAuth: true
    },
    component: RobotDispatch
  },
  {
    path: '*',
    name:'error',
    meta: {
      requireAuth: true,
    },
    component: error
  }

]

