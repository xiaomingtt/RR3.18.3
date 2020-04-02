var app=angular.module("myapp",[]);app.controller("farm",["$scope","$http",function(d,o){d.colors=[{"background-color":"#d57e8c",color:"#d57e8c"},{"background-color":"#f1ba98",color:"#f1ba98"},{"background-color":"#b3da9d",color:"#b3da9d"},{"background-color":"#afbbd3",color:"#afbbd3"}],d.change_num=0,d.newlist=[],d.userInfo={},d.friendlist=[],d.repotlist=[],d.moodpram={background:"",picture:"",autograph:""},d.presentation=[],d.loading=function(t){$("body").loading({loadingWidth:120,title:t,name:"test",discription:"",direction:"column",type:"origin",originDivWidth:40,originDivHeight:40,originWidth:6,originHeight:6,smallLoading:!1,loadingMaskBg:"rgba(0,0,0,0.2)"})},d.exhibition=0,d.show_img=function(t){d.exhibition=t,$(".img_browse").children().eq(t).addClass("img_bor").siblings().removeClass("img_bor"),d.moodpram.picture=d.mood.picture_list[d.exhibition].picture},d.clo_mood=function(){d.exhibition=0,$(".bg-model").hide(),$("body").css({overflow:"visible"})};var n=window.location.href;n=(n=n.replace(/^https:\/\/[^/]+/,"")).split("&r")[0],d.getUrlParams=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(e);return null!=a?unescape(a[2]):null};d.getUrlParams("i");d.allocation={},d.configure=function(){d.loading(""),o.get(n+"&r=open_farm.configure.getInfo").then(function(t){1===t.data.code&&(t.data.data.name&&"null"!==t.data.data.name?(document.title=t.data.data.name,d.allocation=t.data.data,1==t.data.data.force_follow&&$(".qrcode_box").css("bottom","15%"),localStorage.setItem("config",JSON.stringify(t.data.data)),wx.ready(function(){sharedata={title:d.allocation.title,desc:d.allocation.describe,link:d.allocation.url,imgUrl:d.allocation.show_logo,success:function(){},cancel:function(){}},wx.onMenuShareAppMessage(sharedata)})):document.title="人人农场"),removeLoading("test")},function(){})},d.configure(),d.we_Info=function(){d.loading(""),o.get(n+"&r=open_farm.user.getInfo").then(function(t){1===t.data.code&&"0"==t.data.data.follow&&($(".bg-model_qrcode").fadeTo(300,1),$("body").css({overflow:"hidden"})),removeLoading("test")},function(){})},d.we_Info(),d.mall_url="",d.farmset={},d.mall=function(){d.loading(""),o.post(n+"&r=open_farm.seting.getInfo",{}).then(function(t){if(1===t.data.code){if(d.mall_url=t.data.data.shop,d.farmset=t.data.data,0!=d.userInfo.lay_eggs_eat&&d.userInfo.lay_eggs_eat){var e=parseFloat(d.userInfo.lay_eggs_sum)/parseFloat(d.userInfo.lay_eggs_eat);isNumber(e)?($(".result").css("width",parseInt(d.userInfo.lay_eggs_sum)/parseInt(d.userInfo.lay_eggs_eat)*100+"%"),100<parseInt(100*e)?$(".result_text").html("99%"):$(".result_text").html(parseInt(100*e)+"%")):($(".result").css("width",0),$(".result_text").html("0%"))}else{e=parseFloat(d.userInfo.lay_eggs_sum)/parseFloat(t.data.data.lay_eggs_eat);isNumber(e)?($(".result").css("width",parseInt(d.userInfo.lay_eggs_sum)/parseInt(t.data.data.lay_eggs_eat)*100+"%"),100<parseInt(100*e)?$(".result_text").html("99%"):$(".result_text").html(parseInt(100*e)+"%")):($(".result").css("width",0),$(".result_text").html("0%"))}removeLoading("test")}},function(){})},d.mall();var a=!0;d.getuserInfo=function(){o.get(n+"&r=open_farm.chicken.getInfo").then(function(t){if(1===t.data.code)if(d.userInfo=t.data.data,a)d.mall(),a=!1;else{var e=parseFloat(t.data.data.lay_eggs_sum)/parseFloat(t.data.data.lay_eggs_eat);isNumber(e)?(100<parseInt(100*e)?$(".result_text").html("99%"):$(".result_text").html(parseInt(100*e)+"%"),$(".result").css("width",100*e+"%")):($(".result").css("width",0),$(".result_text").html("0%"))}},function(){})},d.getuserInfo(),d.speak_index=-1;var u=!0;d.prompt=!0,d.speak=function(){return!!d.prompt&&(0!=d.talking.length&&(!!u&&(u=!1,d.speak_index++,d.speak_index===d.talking.length&&(d.speak_index=0),void $(".wrap").fadeIn(1e3,function(){$this=$(this),setTimeout(function(){$this.fadeOut(4e3,function(){u=!0})},700)}))))},d.talking=[],d.chicken_content=function(){d.loading(""),o.get(n+"&r=open_farm.reply.getList").then(function(t){1===t.data.code&&(d.talking=t.data.data),removeLoading("test")},function(){})},d.chicken_content(),d.exchange=function(t){var e,a,o,n,i="000";if((t="string"==typeof(t/=1e3)?parseInt(t):t)&&!(t<0)){-1!=t.toString().indexOf(".")?(i=t.toString().split(".")[1],(i=Math.floor(i/10))<10&&(i+="0")):i="00",e=t/86400|0,a=(t=Math.floor(t)-24*e*3600)/3600|0,o=(t=Math.floor(t)-3600*a)/60|0,n=Math.floor(t)-60*o,Math.floor(e)<10&&(e=0<e?"0"+e:""),Math.floor(a)<10&&(a="0"+a),Math.floor(o)<10&&(o="0"+o),Math.floor(n)<10&&(n="0"+n);return i&&(n=n+"."+i),"进食剩余"+(e?e+"天"+a+"时"+o+"分"+n+"秒":a+"时"+o+"分"+n+"秒")}},d.time_exchange=function(t,e){var a,o="00";if((e="string"==typeof e?parseInt(e):e)&&!(e<0))return a=-1!=e.toString().indexOf(".")?(1===(o=e.toString().split(".")[1]).length&&(o+="0"),e.toString().split(".")[0]):(o="00",e),o=Math.floor(1e3*parseFloat("0."+o)),t.setMilliseconds(t.getMilliseconds()+o),t.setSeconds(t.getSeconds()+parseInt(a)),t.valueOf()},d.go_mall=function(){location.href=d.mall_url},d.getInfo=function(){d.loading(""),o.get(n+"&r=open_farm.chicken.downloadPortrait").then(function(t){o.post(n+"&r=open_farm.mood.getInfo",{}).then(function(t){1===t.data.code&&(d.mood=t.data.data,d.moodpram.background=t.data.data.background,d.moodpram.picture=d.mood.picture_list[0].picture,setTimeout(function(){$(".img_browse").children().eq(0).addClass("img_bor")}))},function(){}),removeLoading("test")},function(){})},d.go_task=function(e){var a={id:d.repotlist[e].id,category:d.repotlist[e].category,value:d.repotlist[e].value};"任务中心"===d.repotlist[e].category?(d.loading(""),o.post(n+"&r=task.picktask&id="+d.repotlist[e].core,{}).then(function(t){isNaN(parseInt(t.data.result.message))||(a.rid=t.data.result.message),d.receiveTask(a,e),removeLoading("test")},function(){})):(d.receiveTask(a,e),removeLoading("test"))},d.receiveTask=function(t,e){d.loading(""),o.post(n+"&r=open_farm.task.receiveTask",t).then(function(t){if(t.data.url)return location.href=t.data.url,!1;1===t.data.code?"签到"===d.repotlist[e].category||"会员领取"===d.repotlist[e].category?(d.repotlist[e].status=2,d.getuserInfo()):d.repotlist[e].status=1:showtoastFromDiv(t.data.message),removeLoading("test")},function(){})},d.receive_awards=function(e){var t={id:d.repotlist[e].id,category:d.repotlist[e].category,value:d.repotlist[e].value};d.loading(""),o.post(n+"&r=open_farm.task.receive",t).then(function(t){1===t.data.code?(d.repotlist[e].status=2,d.getuserInfo(),showtoastFromDiv("领取成功")):showtoastFromDiv(t.data.message),removeLoading("test")},function(){})},d.getList=function(){d.loading(""),d.task_page={page:1},d.task_content={is_scroll:!1,text:"上拉加载更多"},o.post(n+"&r=open_farm.task.getList",d.task_page).then(function(t){1===t.data.code&&(d.repotlist=t.data.data,d.repotlist.forEach(function(t,e){t.sty=d.colors[e%4]}),0===t.data.data.length&&(d.task_content.is_scroll=!0,d.task_content.text="暂无数据")),removeLoading("test")},function(){})},d.task_page={page:1},d.task_content={is_scroll:!1,text:"上拉加载更多"},$(".task_list_box").scroll(function(t){var e=$(this).height();if($(this)[0].scrollHeight-1<=e+$(this)[0].scrollTop){if(d.task_content.is_scroll)return!1;t.preventDefault(),d.task_page.page+=1,d.loading(""),o.post(n+"&r=open_farm.task.getList",d.task_page).then(function(t){if(1===t.data.code){if(0===t.data.data.length)return d.task_content.is_scroll=!0,d.task_content.text="已加载全部信息",removeLoading("test"),!1;t.data.data.forEach(function(t,e){t.sty=d.colors[e%4],d.repotlist.push(t)})}removeLoading("test")},function(){})}}),d.noticeList=function(){d.loading(""),d.notice_page={page:1},d.notice_content={is_scroll:!1,text:"上拉加载更多"},o.post(n+"&r=open_farm.notice.getList",d.notice_page).then(function(t){1===t.data.code&&(d.newlist=t.data.data,0===t.data.data.length&&(d.notice_content.is_scroll=!0,d.notice_content.text="暂无数据")),removeLoading("test")},function(){})},d.notice_page={page:1},d.notice_content={is_scroll:!1,text:"上拉加载更多"},$(".Tips_list_new").scroll(function(t){var e=$(this).height();if($(this)[0].scrollHeight-1<=e+$(this)[0].scrollTop){if(d.notice_content.is_scroll)return!1;d.notice_page.page+=1,d.loading(""),o.post(n+"&r=open_farm.notice.getList",d.notice_page).then(function(t){if(1===t.data.code){if(0===t.data.data.length)return d.notice_content.is_scroll=!0,d.notice_content.text="已加载全部信息",removeLoading("test"),!1;t.data.data.forEach(function(t){d.newlist.push(t)})}removeLoading("test")},function(){})}}),d.presen=function(){d.loading(""),d.Presentation_page={page:1},d.Presentation_content={is_scroll:!1,text:"上拉加载更多"},o.post(n+"&r=open_farm.presentation.getList",d.Presentation_page).then(function(t){1===t.data.code&&(d.presentation=t.data.data,0===t.data.data.length&&(d.Presentation_content.is_scroll=!0,d.Presentation_content.text="暂无数据")),removeLoading("test")},function(){})},d.Presentation_page={page:1},d.Presentation_content={is_scroll:!1,text:"上拉加载更多"},$(".Tips_list_present").scroll(function(){var t=$(this).height();if($(this)[0].scrollHeight-1<=t+$(this)[0].scrollTop){if(d.Presentation_content.is_scroll)return!1;d.Presentation_page.page+=1,d.loading(""),o.post(n+"&r=open_farm.presentation.getList",d.Presentation_page).then(function(t){if(1===t.data.code){if(0===t.data.data.length)return d.Presentation_content.is_scroll=!0,d.Presentation_content.text="已加载全部信息",removeLoading("test"),!1;t.data.data.forEach(function(t){d.presentation.push(t)})}removeLoading("test")},function(){})}}),d.add=function(){d.moodpram.picture=d.mood.picture_list[d.exhibition].picture,d.loading("努力生成中"),o.post(n+"&r=open_farm.mood.generateMood",d.moodpram).then(function(t){if(1===t.data.code){var e=location.href;localStorage.removeItem("img")&&localStorage.removeItem("img"),localStorage.setItem("img",t.data.data+"?"+Math.random()),location.href=e.split("&r=open_farm")[0]+"&r=open_farm.mood"+e.split("&r=open_farm")[1]}removeLoading("test")},function(){}),removeLoading("test")},d.is_eat=!1,d.is_color=!1,d.tishi="",d.eggshell={},d.integral_val="",d.time_error=!1,d.feeding=function(){return!(parseInt(d.userInfo.feed_stock)<=0)&&(!d.is_eat&&(d.finished_start(),d.loading(""),o.get(n+"&r=open_farm.chicken.feeding").then(function(t){if(1===t.data.code){var e=new Date,a=e.valueOf();d.is_eat=!0,parseInt(d.userInfo.feed_stock)<=parseInt(d.farmset.bowl)?d.userInfo.feed_stock=0:d.userInfo.feed_stock=parseInt(d.userInfo.feed_stock)-parseInt(d.farmset.bowl);var o=parseFloat(t.data.data.time),n=d.time_exchange(e,o),i=setInterval(function(){o=(parseInt(100*o)-1)/100;var t=n-(new Date).valueOf();if(t<=0)return clearInterval(i),xh(),$(".tiao_clock").html(""),$(".tiao").css("width","0"),d.time_error=!0,d.finished_eating(!0),d.is_eat=!1,d.tishi=d.farmset.eat_tips,$(".wrap1").fadeIn(1e3,function(){$this=$(this),setTimeout(function(){$this.fadeOut(4e3,function(){})},100)}),!1;$(".tiao").css("width",9*(1-t/(n-a))+"rem"),$(".tiao_clock").html(d.exchange(t))},10)}removeLoading("test")},function(){}),void to_eat()))},d.is_coupon=!0,d.coupon_type="",d.coupon_num="",d.uncollected=function(){d.loading(""),o.get(n+"&r=open_farm.chicken.getSurprised").then(function(t){1===t.data.code&&t.data.data&&"{}"!==JSON.stringify(t.data.data)&&"[]"!==JSON.stringify(t.data.data)&&(d.eggshell=t.data.data),d.finished_eating(),removeLoading("test")},function(){})},d.uncollected(),d.is_firstopen=!0,d.finished_start=function(){var i=1;d.loading(""),o.get(n+"&r=open_farm.chicken.checkFeedingEnd").then(function(e){if(e.data&&1===e.data.code){if(0!==e.data.data.surprised.length){var t=!0,a=e.data.data.surprised.length-1;if($(".suspension").css("display","block"),d.eggshell=e.data.data.surprised[a],i=1+a,showtoastFromDiv("您共获取1颗彩蛋"),1==i);else for(var o=1;o<i;o++)setTimeout(function(){showtoastFromDiv("您共获取1颗彩蛋")},1200*o);d.tishi="主人我下彩蛋了，过期不领是会消失的",d.prompt=!1,$(".wrap1").fadeIn(1e3,function(){$this=$(this),$this.fadeOut(4e3,function(){u=!0,d.prompt=!0})}),"积分"===d.eggshell.category?(d.integral_val=d.eggshell.value,d.is_coupon=!1):"优惠券"===d.eggshell.category&&(d.is_coupon=!0,"0"===d.eggshell.backtype?(d.coupon_type="立减",d.coupon_num=d.eggshell.deduct):"1"===d.eggshell.backtype?(d.coupon_type="打折",d.coupon_num=e.$scope.eggshell.discount):"2"===d.eggshell.backtype&&(d.eggshell.backmoney?(d.coupon_type="返余额",d.coupon_num=d.eggshell.backmoney):d.eggshell.backcredit?(d.coupon_type="返积分",d.coupon_num=e.$scope.eggshell.backcredit):d.eggshell.backredpack&&(d.coupon_type="返现金",d.coupon_num=d.eggshell.backredpack),d.coupon_num=d.eggshell.discount))}if(0===e.data.data.bowl&&0===e.data.data.time&&e.data.data.egg&&0!==e.data.data.egg)if(d.getEggs(),t){for(var n=0;n<e.data.data.eggs.length;n++)!function(t){setTimeout(function(){showtoastFromDiv("您共获取"+e.data.data.eggs[t]+"颗蛋")},1200*(i+n))}(n);setTimeout(function(){d.tishi=d.farmset.lay_eggs_tips,$(".wrap1").fadeIn(1e3,function(){$this=$(this),setTimeout(function(){$this.fadeOut(4e3,function(){u=!0})},700)})},1e3)}else{for(n=0;n<e.data.data.eggs.length;n++)!function(t){setTimeout(function(){showtoastFromDiv("您共获取"+e.data.data.eggs[t]+"颗蛋")},1200*(i+n))}(n);d.tishi=d.farmset.lay_eggs_tips,$(".wrap1").fadeIn(1e3,function(){$this=$(this),setTimeout(function(){$this.fadeOut(4e3,function(){u=!0})},700)})}}removeLoading("test")},function(){})},d.finished_eating=function(c,t){var l=1,g=!0;d.loading(""),o.get(n+"&r=open_farm.chicken.checkFeedingEnd").then(function(e){if(e.data&&1===e.data.code){var t=new Date;t.valueOf();if(0!==e.data.data.surprised.length){var a=e.data.data.surprised.length-1;if($(".suspension").css("display","block"),d.eggshell=e.data.data.surprised[a],c)if(d.tishi="主人我下彩蛋了，过期不领是会消失的",d.prompt=!1,$(".wrap1").fadeIn(1e3,function(){$this=$(this),$this.fadeOut(4e3,function(){u=!0,d.prompt=!0,d.tishi=d.farmset.lay_eggs_tips})}),l=1+a,showtoastFromDiv("您共获取1颗彩蛋"),1==l);else for(var o=1;o<l;o++)setTimeout(function(){showtoastFromDiv("您共获取1颗彩蛋")},1200*o)}if("{}"!=JSON.stringify(d.eggshell)&&"[]"!=JSON.stringify(d.eggshell)&&(d.is_firstopen||c||(showtoastFromDiv("您共获取1颗彩蛋"),d.tishi="主人我下彩蛋了，过期不领是会消失的",d.prompt=!1,$(".wrap1").fadeIn(1e3,function(){$this=$(this),$this.fadeOut(4e3,function(){u=!0,d.prompt=!0,d.tishi=d.farmset.lay_eggs_tips})})),g=!1,$(".suspension").css("display","block"),"积分"===d.eggshell.category?(d.integral_val=d.eggshell.value,d.is_coupon=!1):"优惠券"===d.eggshell.category&&(d.is_coupon=!0,"0"===d.eggshell.backtype?(d.coupon_type="立减",d.coupon_num=d.eggshell.deduct):"1"===d.eggshell.backtype?(d.coupon_type="打折",d.coupon_num=e.$scope.eggshell.discount):"2"===d.eggshell.backtype&&(d.eggshell.backmoney?(d.coupon_type="返余额",d.coupon_num=d.eggshell.backmoney):d.eggshell.backcredit?(d.coupon_type="返积分",d.coupon_num=e.$scope.eggshell.backcredit):d.eggshell.backredpack&&(d.coupon_type="返现金",d.coupon_num=d.eggshell.backredpack),d.coupon_num=d.eggshell.discount))),0===e.data.data.bowl&&0===e.data.data.time){if(e.data.data.eggs&&0!==e.data.data.eggs.length){if(d.getEggs(),g)for(n=0;n<e.data.data.eggs.length;n++)!function(t){setTimeout(function(){showtoastFromDiv("您共获取"+e.data.data.eggs[t]+"颗蛋")},1200*(l+n))}(n);else for(var n=0;n<e.data.data.eggs.length;n++)!function(t){setTimeout(function(){showtoastFromDiv("您共获取"+e.data.data.eggs[t]+"颗蛋")},1200*(l+n))}(n);"{}"!=JSON.stringify(d.eggshell)||(d.tishi=d.farmset.lay_eggs_tips,$(".wrap1").fadeIn(1e3,function(){$this=$(this),setTimeout(function(){$this.fadeOut(4e3,function(){u=!0})},700)}))}xh(),d.is_eat=!1}else if(0!==e.data.data.time){d.is_eat=!0;var i=parseFloat(e.data.data.time),s=d.time_exchange(t,i),r=setInterval(function(){i=(parseInt(100*i)-1)/100;var t=s-(new Date).valueOf();if(t<=0)return clearInterval(r),xh(),$(".tiao_clock").html(""),$(".tiao").css("width","0"),d.time_error=!0,d.finished_eating(!0),d.is_eat=!1,d.tishi=d.farmset.eat_tips,$(".wrap1").fadeIn(1e3,function(){$this=$(this),setTimeout(function(){$this.fadeOut(4e3,function(){})},100)}),!1;$(".tiao").css("width",9*(1-t/(d.farmset.bowl*d.farmset.eat_time*((100-d.userInfo.accelerate)/100)*1e3))+"rem"),$(".tiao_clock").html(d.exchange(t)),d.time_error||(to_eat(),d.time_error=!1)},10)}else{d.is_eat=!0;i=parseInt(e.data.data.bowl*d.farmset.eat_time*d.userInfo.accelerate)/100;i=parseFloat(i);s=d.time_exchange(t,i),r=setInterval(function(){i=(parseInt(100*i)-1)/100;var t=s-(new Date).valueOf();if(t<=0)return clearInterval(r),xh(),$(".tiao_clock").html(""),$(".tiao").css("width","0"),d.time_error=!0,d.finished_eating(!0),d.is_eat=!1,d.tishi=d.farmset.eat_tips,$(".wrap1").fadeIn(1e3,function(){$this=$(this),setTimeout(function(){$this.fadeOut(4e3,function(){})},100)}),!1;$(".tiao").css("width",9*(1-t/(d.farmset.bowl*d.farmset.eat_time*((100-d.userInfo.accelerate)/100)*1e3))+"rem"),$(".tiao_clock").html(d.exchange(t)),d.time_error||(to_eat(),d.time_error=!1)},10)}c&&d.getuserInfo()}removeLoading("test"),d.is_firstopen=!1},function(){})},d.egg_nums=0,d.add_chnum=function(){if(d.change_num+100>d.userInfo.egg_stock)return showtoastFromDiv("您剩余的鸡蛋不足以兑换积分"),!1;d.change_num+=100,d.egg_nums=parseInt(d.change_num*d.farmset.rate)},d.jian_chnum=function(){if(d.change_num-=100,d.change_num<=0)return!1;d.egg_nums=parseInt(d.change_num*d.farmset.rate)},d.integral=function(){if(0===d.change_num)return!1;param={egg:d.change_num,integral:parseInt(d.change_num*d.farmset.rate)},d.loading(""),o.post(n+"&r=open_farm.integral.addInfo",param).then(function(t){1===t.data.code?(showtoastFromDiv(t.data.message),d.change_num=0,d.egg_nums=0,d.getuserInfo()):0===t.data.code&&showtoastFromDiv(t.data.message),removeLoading("test")},function(){})},d.Lead_roll=function(){d.loading(""),o.post(n+"&r=sale.coupon.detail.pay&id="+d.eggshell.value).then(function(t){1===t.data.status?o.post(n+"&r=sale.coupon.detail.payresult&id="+d.eggshell.value+"&logid="+t.data.result.logid).then(function(t){if(1===t.data.status){var e={id:d.eggshell.id,category:d.eggshell.category,surprised_id:d.eggshell.surprised_id};t.data.result.dataid&&(e.dataid=t.data.result.dataid),o.post(n+"&r=open_farm.chicken.coupon",e).then(function(t){1===t.data.code&&(showtoastFromDiv(t.data.message),d.eggshell={},d.receive_end(),$(".suspension").css("display","none"),$(".bg-model_red").css("display","none")),location.href=t.data.url},function(){})}else showtoastFromDiv(t.data.message)},function(){}):(o.post(n+"&r=open_farm.surprised.deleteUserSurprised",{id:d.eggshell.id}).then(function(t){t.data&&1===t.data.code&&($(".suspension").css("display","none"),$(".bg-model_red").css("display","none"),d.receive_end())},function(){}),showtoastFromDiv(t.data.result.message)),removeLoading("test")},function(){})},d.integral_roll=function(){d.loading(""),o.post(n+"&r=open_farm.chicken.coupon",{id:d.eggshell.id,category:d.eggshell.category,surprised_id:d.eggshell.surprised_id}).then(function(t){1===t.data.code&&(showtoastFromDiv(t.data.message),d.eggshell={},d.receive_end(),$(".suspension").css("display","none"),$(".bg-model_red").css("display","none")),removeLoading("test")},function(){})},d.receive_end=function(){d.loading(""),o.get(n+"&r=open_farm.chicken.getSurprised").then(function(t){t.data&&1===t.data.code&&t.data.data&&"{}"!==JSON.stringify(t.data.data)&&"[]"!==JSON.stringify(t.data.data)&&(d.eggshell=t.data.data,$(".suspension").css("display","block")),removeLoading("test")},function(){})},d.collar_egg=!1,d.collar_num_egg=0,d.getEggs=function(){d.loading(""),o.get(n+"&r=open_farm.chicken.getEggs").then(function(t){1===t.data.code&&(0!=t.data.data&&(d.collar_egg=!0,d.collar_num_egg=t.data.data),d.getuserInfo()),removeLoading("test")},function(){})},d.receiveEgg=function(){if(!d.collar_egg)return!1;d.loading(""),o.get(n+"&r=open_farm.chicken.receiveEgg").then(function(t){1===t.data.code&&(d.collar_egg=!1,showtoastFromDiv("领取"+d.collar_num_egg+"颗蛋"),d.getuserInfo()),removeLoading("test")},function(){})},d.getEggs(),d.$watch("change_num",function(t,e){d.change_num||(d.change_num=0),d.change_num<0&&(d.change_num=0),0!==d.change_num&&(d.change_num=10*d.change_num/10),d.change_num>d.userInfo.egg_stock&&(d.change_num=parseInt(d.userInfo.egg_stock),showtoastFromDiv("您的鸡蛋不足以兑换更多积分")),-1!==String(d.change_num*d.farmset.rate).indexOf(".")?(d.change_num=0,d.egg_nums=0,showtoastFromDiv("不符合兑换规则")):d.farmset.rate&&(d.egg_nums=parseInt(d.change_num)*parseFloat(d.farmset.rate))}),d.close_code=function(){$(".bg-model_qrcode").hide(),$("body").css({overflow:"visible"})},d.bank_close=function(){d.change_num=0,d.egg_nums,$(".bg-model_bank").hide(),$(".front_chicken").css("display","block"),$("body").css({overflow:"visible"})}}]);