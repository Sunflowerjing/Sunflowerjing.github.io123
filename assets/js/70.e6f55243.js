(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{301:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[s._v("#")]),s._v(" shell")]),s._v(" "),a("ol",[a("li",[s._v("首先创建一个目录: "),a("code",[s._v("vi hello.sh")])]),s._v(" "),a("li",[s._v("编写shell第一行: "),a("code",[s._v("#!/bin/bash")]),s._v(" (为了声明是shell脚本,第一行都要这么写)")]),s._v(" "),a("li",[s._v("添加注释: "),a("code",[s._v("#")]),s._v("  (加#的这一行是不生效的)")]),s._v(" "),a("li",[s._v("执行脚本: "),a("code",[s._v("./hello.sh")]),s._v(" 或 "),a("code",[s._v("bash hello.sh")])]),s._v(" "),a("li",[s._v("Shell 变量: "),a("code",[s._v('your_name="runoob.com"')]),s._v(" "),a("ul",[a("li",[s._v("变量名和等号之间不能有空格")]),s._v(" "),a("li",[s._v("中间不能有空格，可以使用下划线（_）")])])]),s._v(" "),a("li",[s._v("搜索文件夹下面的所有 HTML, 并且插入脚本"),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash\n# 判断参数路径是否存在\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" then\n    echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"parameters missed OR folder '$1' not exists\"")]),s._v("\n    exit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nfi\n# 过滤文件夹中全部的 html 文件\nfiles"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("find "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n# 存在的脚本\nreg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'<script\\s*type="text/javascript">window.BUILD_ENV\\s*=\\s*"beta"<\/script>\'')]),s._v("\n# 插入的脚本\nrep"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'s/<head>/<head><script type="text\\/javascript">window.BUILD_ENV = "beta"<\\/script>/\'')]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" filename "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" $files\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    grep "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Eq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$reg"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filename"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$OSTYPE"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"darwin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" then\n            # macos 系统\n            sed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$rep"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filename"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n            # 其他系统\n            sed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$rep"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$filename"')]),s._v("\n        fi\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndone\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);