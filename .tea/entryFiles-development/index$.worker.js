if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=cf602cd75ee4e4840726dc22379165d890c7a03f');
require('../../pages/chatAssist/chatAssist?hash=cf602cd75ee4e4840726dc22379165d890c7a03f');
require('../../pages/VM/vm?hash=cf602cd75ee4e4840726dc22379165d890c7a03f');
require('../../pages/liveChat/liveChat?hash=cf602cd75ee4e4840726dc22379165d890c7a03f');
require('../../pages/collectionDetails/collectionDetails?hash=cf602cd75ee4e4840726dc22379165d890c7a03f');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}