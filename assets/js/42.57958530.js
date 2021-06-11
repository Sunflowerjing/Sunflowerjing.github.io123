(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{312:function(_,v,e){"use strict";e.r(v);var l=e(0),o=Object(l.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"pm2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[_._v("#")]),_._v(" PM2")]),_._v(" "),e("ul",[e("li",[_._v("PM2是一个带有 "),e("code",[_._v("负载均衡")]),_._v(" 功能的Node应用的进程管理器。")]),_._v(" "),e("li",[_._v("PM2可以利用服务器上的"),e("code",[_._v("所有CPU")]),_._v("，并保证进程永远都活着，"),e("code",[_._v("0秒的重载")]),_._v("，部署管理"),e("code",[_._v("多个Node项目")]),_._v("。")])]),_._v(" "),e("ol",[e("li",[_._v("基本指令\n"),e("ul",[e("li",[_._v("全局安装: "),e("code",[_._v("npm install -g pm2@latest")]),_._v("(@latest表示安装最新的版本)")]),_._v(" "),e("li",[_._v("启动服务，入口文件是app.js: "),e("code",[_._v("pm2 start app.js")])]),_._v(" "),e("li",[_._v("为一个服务指定名字: "),e("code",[_._v("pm2 start app.js --name order")])]),_._v(" "),e("li",[_._v("列出所有进程状态\n"),e("ul",[e("li",[e("code",[_._v("pm2 list")])]),_._v(" "),e("li",[_._v("列出未经加工的JSON数据（进程信息）: "),e("code",[_._v("pm2 jlist")])]),_._v(" "),e("li",[_._v("优雅的列出JSON数据（进程信息）: "),e("code",[_._v("pm2 prettylist")])]),_._v(" "),e("li",[_._v("展示一个进程的详细信息: "),e("code",[_._v("pm2 describe（show） order")])]),_._v(" "),e("li",[_._v("监听所有进程信息: "),e("code",[_._v("pm2 monit")])]),_._v(" "),e("li",[_._v("重新加载所有日志: "),e("code",[_._v("pm2 reloadLogs")])])])]),_._v(" "),e("li",[_._v("日志显示:\n"),e("ul",[e("li",[_._v("显示所有进程的日志: "),e("code",[_._v("pm2 logs")])]),_._v(" "),e("li",[_._v("显示指定进程的日志: "),e("code",[_._v("pm2 logs order")])]),_._v(" "),e("li",[_._v("清空所有日志文件: "),e("code",[_._v("pm2 flush")])])])]),_._v(" "),e("li",[_._v("进程操作:\n"),e("ul",[e("li",[_._v("停止所有进程: "),e("code",[_._v("pm2 stop all")])]),_._v(" "),e("li",[_._v("根据进程名停止进程: "),e("code",[_._v("pm2 stop order")])]),_._v(" "),e("li",[_._v("重启所有进程: "),e("code",[_._v("pm2 restart all")])]),_._v(" "),e("li",[_._v("从pm2列表里面删除全部进程: "),e("code",[_._v("pm2 delete all")])]),_._v(" "),e("li",[_._v("根据进程名删除进程: "),e("code",[_._v("pm2 delete order")])]),_._v(" "),e("li",[_._v("0秒停机重载进程 (用于 NETWORKED 进程): "),e("code",[_._v("pm2 reload all")])]),_._v(" "),e("li",[_._v("优雅的重载所有的进程，首先发送退出消息，然后重载: "),e("code",[_._v("pm2 gracefulReload all")])])])]),_._v(" "),e("li",[_._v("重启服务: "),e("code",[_._v("npm restart [name or id]")])]),_._v(" "),e("li",[_._v("与rastart功能相同，但是可以实现0s的无缝衔接。如果有nginx的使用经验，可以对比"),e("code",[_._v("nginx reload")]),_._v("指令: "),e("code",[_._v("npm reload [name or id]")])]),_._v(" "),e("li",[_._v("当内存超过1024M时自动重启。 如果工程中有比较棘手的内存泄露问题，这个算是一个折中方案: "),e("code",[_._v("pm2 start app.js --max_memory_restart 1024M")])])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);