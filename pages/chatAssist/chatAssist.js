import hex_sha1 from './shaHandler';
import data from '../../content.js';
const app = getApp();

Page({
  data: {
    appData: app.appClass,
    buttonText1: data.buttonText.buttonText1,
    buttonText2: data.buttonText.buttonText2,
    slectedQOneValue: '',
    qOneResLoading: false,
    assistData: data.assistData,
    renderQuestions: {}
  },
  userResHandler(e) {
    const { userRes, id } = e.currentTarget.dataset.index;

    switch (userRes) {
      case "VR Beauty Try-On":
        setTimeout(() => {
          my.navigateTo({
            url: '../VM/vm'
          });
        }, 2000);
        break;
      
      case "Available consultant":
        setTimeout(() => {
          my.navigateTo({
            url: '../liveChat/liveChat'
          });
        }, 2000);
        break;
    
      default:
        break;
    }

    const toUpdateIndex = this.data.renderQuestions.findIndex(item => item.id === id);
    const newQues = this.data.assistData.find(item => item.renderQuestion ===  userRes)
    
    let newArr = this.data.renderQuestions;
      newArr[toUpdateIndex] = {...newArr[toUpdateIndex], userResponse: userRes};
      newArr = [
        ...newArr,
        newQues
      ]
      
    this.setData({
      renderQuestions: newArr
    });
  },
  onLoad() {
    const updateCurrQues = this.data.assistData.find(item => item.id === 1 );
    this.setData({
      renderQuestions: [...this.data.renderQuestions, updateCurrQues]
    });

    // 页面加载
//     console.info(body);
//   my.request({
//       url: `https://livedemo.srijan-sites.com/bigbluebutton/api/isMeetingRunning?meetingID=69d8f763b1aea7b257294c00b929ec98e3fd3a3a&checksum=9787ed8f1150c78d89492067f92de750ff21fab8`,
//       method: 'POST',
//       success: (res) => {

//         console.log(res);
//         console.log(hex_sha1('isMeetingRunningmeetingID=69d8f763b1aea7b257294c00b929ec98e3fd3a3a8bPWMb9h7R7Bcc65iaAGEnTGtIGtCe6b6SVLtKltNA'));
// 'https://livedemo.srijan-sites.com/bigbluebutton/api/isMeetingRunning?meetingID=random-2228801&checksum=d8a1e9dd30dc51381280066ea0110d20276b9ed7'
//        'meetingID=69d8f763b1aea7b257294c00b929ec98e3fd3a3a'
//       }
//     });
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
