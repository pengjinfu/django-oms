webpackJsonp([31],{WS0W:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".table-expand{font-size:0}.table-expand .el-form-item{margin:0;width:100%}.table-expand .el-form-item .el-form-item__label{width:90px;color:#99a9bf}.table-expand .el-form-item .el-form-item__content{width:80%}",""])},hB7h:function(e,t,a){"use strict";function r(e){a("r/O3")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("iVC1"),n=a("8TIX"),l={components:{sesectHosts:n.default},data:function(){return{ruleForm:{name:"",code_repo:"svn",code_url:"",desc:""},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],code_url:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},addenvForm:!1,envForm:{job:"",name:"",hosts:[],path:"",desc:""},actionTab:"",tabIndex:-1,TabValues:[]}},created:function(){},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(o.e)(t.ruleForm).then(function(e){'"Created"'===e.statusText&&(t.$message({type:"success",message:"恭喜你，新建成功"}),t.envForm.job=e.data.name,Object(o.d)(t.envForm))})})},resetForm:function(e){this.$refs[e].resetFields()},addTab:function(){this.addenvForm=!1;var e=++this.tabIndex+"";this.TabValues.push({title:this.envForm.name,name:e,content:this.envForm}),this.actionTab=e,this.envForm={}},removeTab:function(e){var t=this.TabValues,a=this.actionTab;a===e&&t.forEach(function(r,o){if(r.name===e){var n=t[o+1]||t[o-1];n&&(a=n.name)}}),this.actionTab=a,this.TabValues=t.filter(function(t){return t.name!==e})},getHosts:function(e){this.envForm.hosts=e}}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",{staticStyle:{"max-width":"800px"}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代码地址",prop:"code_url"}},[a("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.code_url,callback:function(t){e.$set(e.ruleForm,"code_url",t)},expression:"ruleForm.code_url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"配置环境"}},[a("el-tabs",{attrs:{type:"card",editable:""},on:{"tab-add":function(t){e.addenvForm=!0},"tab-remove":e.removeTab},model:{value:e.actionTab,callback:function(t){e.actionTab=t},expression:"actionTab"}},e._l(e.TabValues,function(t){return a("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[a("el-card",[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"right",inline:""}},[a("el-form-item",{attrs:{label:"环境名称"}},[a("span",[e._v(e._s(t.content.name))])]),e._v(" "),a("el-form-item",{attrs:{label:"发布路径"}},[a("span",[e._v(e._s(t.content.path))])]),e._v(" "),a("el-form-item",{attrs:{label:"发布主机"}},e._l(t.content.hosts,function(t){return a("el-tag",{key:t,staticStyle:{"margin-right":"5px"}},[e._v(e._s(t))])})),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("span",[e._v(e._s(t.content.desc))])])],1)],1)],1)}))],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addenvForm},on:{"update:visible":function(t){e.addenvForm=t}}},[a("el-form",{ref:"envForm",attrs:{"label-width":"70px"},model:{value:e.envForm,callback:function(t){e.envForm=t},expression:"envForm"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.envForm.name,callback:function(t){e.$set(e.envForm,"name",t)},expression:"envForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发布路径",prop:"path"}},[a("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.envForm.path,callback:function(t){e.$set(e.envForm,"path",t)},expression:"envForm.path"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选择主机",prop:"hosts"}},[a("sesect-hosts",{attrs:{selecthost:e.envForm.hosts},on:{gethosts:e.getHosts}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.envForm.desc,callback:function(t){e.$set(e.envForm,"desc",t)},expression:"envForm.desc"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addTab}},[e._v("确 定")])],1)],1)],1)},i=[],m={render:s,staticRenderFns:i},c=m,u=a("VU/8"),d=r,p=u(l,c,!1,d,null,null);t.default=p.exports},"r/O3":function(e,t,a){var r=a("WS0W");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("2d0cfebe",r,!0)}});