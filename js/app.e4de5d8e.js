(function(){var e={87827:function(e,t,n){"use strict";var o=n(49963),i=n(98690),s=n(42551),r={region:"us-east-1",IdentityPoolId:"us-east-1_EvSxK48uq",UserPoolId:"us-east-1:320154951020",IdentityPoolIdLong:"us-east-1:b6cc4e89-39b9-4418-b47f-3f04f6d6824d",UserPoolIdNoPrefix:"320154951020",ClientId:"3osu9rcsd09eo4lenub4903tu6",s3SignedUrl:"https://rvv1a9to8j.execute-api.eu-west-1.amazonaws.com/dev/upload-node",bucket:"dev-imgur-clone-bucket",bucketRegion:"us-east-1",prod:!1,backendLocal:"http://localhost:3000",backendProd:"http://pictography-loadbalancer-1821690947.us-east-1.elb.amazonaws.com:3000"};class a{constructor(){this.userSession=null}isAuthenticated(e){console.log("isAuth function");let t=this.getCurrentUser();null!=t?t.getSession(((t,n)=>t?e(t,!1):e(n,!0))):e(null,!1)}configure(e){if("object"!==typeof e||Array.isArray(e))throw new Error("[CognitoAuth error] valid option object required");this.userPool=new s.AM({UserPoolId:e.IdentityPoolId,ClientId:e.ClientId}),i.Config.region=e.region,i.Config.credentials=new i.CognitoIdentityCredentials({IdentityPoolId:e.IdentityPoolId}),this.options=e}signup(e,t,n,o){let i=[new s.KC({Name:"email",Value:t})];this.userPool.signUp(e,n,i,null,o)}authenticate(e,t,n){let o={Username:e,Password:t},a=new s.sD(o),l={Username:e,Pool:this.userPool},u=new s.ws(l);u.authenticateUser(a,{onSuccess:function(e){var t={};t["cognito-idp."+r.region+".amazonaws.com/"+r.UserPoolId]=e.getIdToken().getJwtToken(),i.Config.credentials=new i.CognitoIdentityCredentials({IdentityPoolId:r.UserPoolId,Logins:t}),n(null,e)},onFailure:function(e){n(e)},newPasswordRequired:function(e,t){console.log("New Password Is Required")}})}getCurrentUser(){return this.userPool.getCurrentUser()}confirmRegistration(e,t,n){let o=new s.ws({Username:e,Pool:this.userPool});o.confirmRegistration(t,!0,n)}logout(){this.getCurrentUser().signOut()}getIdToken(e){if(null==this.getCurrentUser())return e(null,null);this.getCurrentUser().getSession(((t,n)=>t?e(t):n.isValid()?e(null,n.getIdToken().getJwtToken()):void e(Error("Session is invalid"))))}install(e,t){console.log("installing cognito inside"),e.config.globalProperties.$cognitoAuth=this,this.configure(t),e.mixin({beforeCreate(){console.log(this.$options),this.$options.cognitoAuth&&(this._cognitoAuth=this.$options.cognitoAuth,this._cognitoAuth.configure(t))}})}}a.install=function(e,t){console.log("installing cognito"),e.config.globalProperties.$cognitoAuth=()=>this.$root._cognitoAuth,e.mixin({beforeCreate(){this.$options.cognitoAuth&&(this._cognitoAuth=this.$options.cognitoAuth,this._cognitoAuth.configure(t))}})};var l=new a,u=n(66252);const c={id:"app"};function d(e,t,n,o,i,s){const r=(0,u.up)("NavBar"),a=(0,u.up)("router-view");return(0,u.wg)(),(0,u.iD)("div",c,[(0,u.Wm)(r),(0,u.Wm)(a)])}var g=n.p+"img/cameraBuddy.e8db4b2b.png";const p={class:"navbar navbar-expand-lg navbar-dark bg-dark"},m=(0,u._)("a",{class:"navbar-brand",href:"#"},null,-1),h=(0,u._)("img",{src:g,width:"80",height:"80",class:"d-inline-block",alt:""},null,-1),k=(0,u._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,u._)("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarText"},b={class:"navbar-nav mx-auto"},v={class:"form-inline"},_={key:0,class:"btn btn-info"},w={key:1,class:"btn btn-info"},y={key:2,class:"btn btn-info mr-3",type:"button"},D={key:3,class:"btn btn-info",type:"button"},U={key:4,class:"btn btn-info"};function C(e,t,n,i,s,r){const a=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)("nav",p,[m,(0,u.Wm)(a,{class:"nav-link",to:"/"},{default:(0,u.w5)((()=>[h,(0,u.Uk)(" Pictografy ")])),_:1}),k,(0,u._)("div",f,[(0,u._)("ul",b,[(0,u._)("form",v,[(0,u.wy)((0,u._)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search","onUpdate:modelValue":t[0]||(t[0]=e=>s.searchtext=e)},null,512),[[o.nr,s.searchtext]]),(0,u._)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:t[1]||(t[1]=e=>r.onClick(e))},"Go")])]),r.isLoggedIn()?((0,u.wg)(),(0,u.iD)("button",_,[(0,u.Wm)(a,{class:"nav-link",to:"profile"},{default:(0,u.w5)((()=>[(0,u.Uk)("Profile")])),_:1})])):(0,u.kq)("",!0),r.isLoggedIn()?((0,u.wg)(),(0,u.iD)("button",w,[(0,u.Wm)(a,{class:"nav-link",to:"upload"},{default:(0,u.w5)((()=>[(0,u.Uk)("Upload")])),_:1})])):(0,u.kq)("",!0),r.isLoggedIn()?(0,u.kq)("",!0):((0,u.wg)(),(0,u.iD)("button",y,[(0,u.Wm)(a,{class:"nav-link",to:"register"},{default:(0,u.w5)((()=>[(0,u.Uk)("Sign Up")])),_:1})])),r.isLoggedIn()?(0,u.kq)("",!0):((0,u.wg)(),(0,u.iD)("button",D,[(0,u.Wm)(a,{class:"nav-link",to:"login"},{default:(0,u.w5)((()=>[(0,u.Uk)("Sign In")])),_:1})])),r.isLoggedIn()?((0,u.wg)(),(0,u.iD)("button",U,[(0,u.Wm)(a,{class:"nav-link",to:"logout"},{default:(0,u.w5)((()=>[(0,u.Uk)("Sign Out")])),_:1})])):(0,u.kq)("",!0)])])}var L={name:"NavBar",data(){return{searchtext:""}},methods:{isLoggedIn:function(){return null!==this.$cognitoAuth.getCurrentUser()},onClick:function(e){e&&e.preventDefault(),this.$router.replace({path:"/",query:{text:this.searchtext}})}}},x=n(83744);const I=(0,x.Z)(L,[["render",C]]);var P=I,q={name:"app",components:{NavBar:P}};const A=(0,x.Z)(q,[["render",d]]);var z=A,S=n(22201);const T={class:"d-flex justify-content-between"},j={type:"button",class:"btn btn-success ml-2"},B={class:"btn-group btn-group-toggle my-2","data-toggle":"buttons"},R={class:"btn btn-secondary btn-warning"},$={class:"btn btn-secondary btn-warning"},O={class:"btn btn-secondary btn-warning mr-3"},N={class:"scrolling-component",ref:"scrollComponent"},Z={class:"container"},H={class:"row"};function W(e,t,n,o,i,s){const r=(0,u.up)("router-link"),a=(0,u.up)("post-component");return(0,u.wg)(),(0,u.iD)("div",null,[(0,u._)("div",T,[(0,u._)("button",j,[(0,u.Wm)(r,{class:"nav-link",to:"upload"},{default:(0,u.w5)((()=>[(0,u.Uk)("+ New Post")])),_:1})]),(0,u._)("div",B,[(0,u._)("label",R,[(0,u._)("input",{type:"radio",name:"options",id:"viral",onClick:t[0]||(t[0]=e=>s.changeSelection(e)),autocomplete:"off"}),(0,u.Uk)(" Most Viral ↓ ")]),(0,u._)("label",$,[(0,u._)("input",{type:"radio",name:"options",id:"newest",onClick:t[1]||(t[1]=e=>s.changeSelection(e)),autocomplete:"off"}),(0,u.Uk)(" Newest ↓ ")]),(0,u._)("label",O,[(0,u._)("input",{type:"radio",name:"options",id:"controversial",onClick:t[2]||(t[2]=e=>s.changeSelection(e)),autocomplete:"off"}),(0,u.Uk)(" Controversial ↓ ")])])]),(0,u._)("div",N,[(0,u._)("div",Z,[(0,u._)("div",H,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(i.posts,(e=>((0,u.wg)(),(0,u.j4)(a,{post:e,key:e},null,8,["post"])))),128))])])],512)])}n(57658);var M=n(50196),V=n(3577);const E={class:"card"},Y=["src"],K={class:"card-body"},F={class:"card-title"},G={class:"card-user"},J={class:"card-likes"},Q={class:"card-likes"},X=["post"],ee={class:"d-flex flex-row-reverse"};function te(e,t,n,o,i,s){const r=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)("div",E,[(0,u.Wm)(r,{to:`/${n.post.image_id}`},{default:(0,u.w5)((()=>[(0,u._)("img",{class:"card-img-top",src:n.post.imgURL,alt:""},null,8,Y)])),_:1},8,["to"]),(0,u._)("div",K,[(0,u._)("h5",F,(0,V.zw)(n.post.caption),1),(0,u._)("h6",G,(0,V.zw)(n.post.username),1),(0,u._)("h6",J,"Likes: "+(0,V.zw)(n.post.likes),1),(0,u._)("h6",Q,"Dislikes: "+(0,V.zw)(n.post.dislikes),1),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(this.post.tags,(e=>((0,u.wg)(),(0,u.iD)("div",{post:e,key:e},[(0,u.Wm)(r,{to:`/?tag=${e}`},{default:(0,u.w5)((()=>[(0,u.Uk)("#"+(0,V.zw)(e),1)])),_:2},1032,["to"])],8,X)))),128)),(0,u._)("div",ee,[(0,u._)("button",{class:"btn btn-danger ml-2",onClick:t[0]||(t[0]=(...e)=>s.dislike_button&&s.dislike_button(...e)),ref:"Dislike"},(0,V.zw)(i.Dislike),513),(0,u._)("button",{class:"btn btn-success ml-2",onClick:t[1]||(t[1]=(...e)=>s.like_button&&s.like_button(...e)),ref:"Like"},(0,V.zw)(i.Like),513)])])])}var ne={data(){return{Like:"Like",Dislike:"Dislike"}},props:{post:Object},mounted(){this.Like=void 0!==this.post.userLikes&&this.post.userLikes.liked?"Liked":"Like",this.Dislike=void 0!==this.post.userLikes&&this.post.userLikes.disliked?"Disliked":"Dislike"},methods:{getBackendUrl:function(){return r.prod?r.backendProd:r.backendLocal},import_like:function(){let e=this;l.getIdToken((function(t,n){if(t)return alert("There was an error with your account: "+t.message);M.ZP.post(e.getBackendUrl()+"/like",{image_id:e.post.image_id,username:l.getCurrentUser().getUsername(),like:"Liked"===e.Like,dislike:"Disliked"===e.Dislike,jwt:n},{params:{},headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})}))},like_button:function(){console.log("Clicked Like"),"Like"===this.Like?this.Like="Liked":"Liked"===this.Like&&(this.Like="Like"),this.Dislike="Dislike",this.import_like()},dislike_button:function(){console.log("Clicked Dislike"),"Dislike"===this.Dislike?this.Dislike="Disliked":"Disliked"===this.Dislike&&(this.Dislike="Dislike"),this.Like="Like",this.import_like()}}};const oe=(0,x.Z)(ne,[["render",te]]);var ie=oe;let se=null;const re=(e,t,n)=>{e&&(se=e);let o=[];if(n>se.length&&(n=se.length),t>se.length)return o;for(let i=t;i<t+n;i++)o.push({imgURL:se[i].imgURL,caption:se[i].title,username:se[i].username,likes:se[i].likes,dislikes:se[i].dislikes,tags:se[i].tags,image_id:se[i].image_id,userLikes:se[i].userLikes,comments:se[i].comments});return console.log(o),o};var ae=re,le=n(2262);const ue=(0,le.iH)(null);var ce={name:"HomePage",components:{PostComponent:ie},data(){return{posts:[],lastItem:0,text:null,sortBy:null,username:null,tag:null,router:(0,S.tv)(),route:(0,S.yj)()}},setup(){return{scrollComponent:ue}},methods:{changeSelection:function(e){console.log("Clicked "+e.target.id),this.getdata(null,null,e.target.id)},getBackendUrl:function(){return r.prod?r.backendProd:r.backendLocal},getdata:function(e,t,n,o){let i;this.text=e,this.sortBy=n,this.username=o,this.tag=t,null!=l.getCurrentUser()&&(i=l.getCurrentUser().getUsername()),M.ZP.get(this.getBackendUrl()+"/search?text="+e+"&sortby="+n+"&user="+o+"&currentuser="+i+"&tag="+t,{params:{}}).then((e=>{this.posts=ae(e.data,0,5),this.lastItem=5}))},getNextData:function(){window.onscroll=()=>{let e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&(this.posts.push(...ae(null,this.lastItem,5)),this.lastItem+=5)}},getUrlQueryParams:async function(){await this.router.isReady(),this.text=this.route.query.text,console.log("text: "+this.text),this.getdata(this.route.query.text)}},beforeMount(){},mounted(){this.getNextData(),this.getUrlQueryParams()},beforeRouteUpdate(e,t,n){console.log("before route update:"+e+"---"+t),void 0!==e.query.text&&null!==e.query.text||void 0!==e.query.tag&&null!==e.query.tag?this.getdata(e.query.text,e.query.tag):this.getdata(),n()}};const de=(0,x.Z)(ce,[["render",W]]);var ge=de;const pe=e=>((0,u.dD)("data-v-7ba92ff5"),e=e(),(0,u.Cn)(),e),me={class:"login-box"},he={class:"center-align"},ke={key:0,class:"loader loader--style1",title:"0"},fe=pe((()=>(0,u._)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"},[(0,u._)("path",{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n                    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n                    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}),(0,u._)("path",{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n                    C22.32,8.481,24.301,9.057,26.013,10.047z"},[(0,u._)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"})])],-1))),be=[fe],ve=pe((()=>(0,u._)("h4",null,"LOGIN",-1))),_e={key:0,class:"alert alert-warning"},we={class:"white-text"},ye=pe((()=>(0,u._)("p",null,"Login to upload your own images to the site!",-1))),De={class:"form-group"},Ue={class:"input-field"},Ce=pe((()=>(0,u._)("label",{for:"username"},"Username",-1))),Le={class:"input-field"},xe=pe((()=>(0,u._)("label",{for:"password"},"Password",-1))),Ie={class:"center-align"},Pe=pe((()=>(0,u._)("br",null,null,-1))),qe=pe((()=>(0,u._)("hr",null,null,-1)));function Ae(e,t,n,i,s,r){const a=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)("div",me,[(0,u._)("div",he,[s.loading?((0,u.wg)(),(0,u.iD)("div",ke,be)):(0,u.kq)("",!0)]),ve,null!=s.error?((0,u.wg)(),(0,u.iD)("div",_e,[(0,u._)("span",we,(0,V.zw)(s.error.message),1)])):(0,u.kq)("",!0),ye,(0,u._)("form",De,[(0,u._)("div",Ue,[Ce,(0,u.wy)((0,u._)("input",{id:"username",type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),required:""},null,512),[[o.nr,s.username]])]),(0,u._)("div",Le,[xe,(0,u.wy)((0,u._)("input",{id:"password",type:"password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>s.pass=e),required:""},null,512),[[o.nr,s.pass]])]),(0,u._)("div",Ie,[Pe,(0,u._)("button",{onClick:t[2]||(t[2]=e=>r.login(e)),class:"btn btn-default btn-large"},"login"),qe,(0,u._)("p",null,[(0,u.Uk)("Don't have an account? - "),(0,u.Wm)(a,{to:"Register"},{default:(0,u.w5)((()=>[(0,u.Uk)("Register Now")])),_:1})])])])])}var ze={name:"LogIn",data(){return{username:"",pass:"",error:null,loading:!1}},methods:{login(e){e&&e.preventDefault(),this.loading=!0,this.$cognitoAuth.authenticate(this.username,this.pass,(e=>{e?(this.error=e,this.loading=!1):this.$router.push("/profile")}))}}};const Se=(0,x.Z)(ze,[["render",Ae],["__scopeId","data-v-7ba92ff5"]]);var Te=Se;const je=e=>((0,u.dD)("data-v-dd3d2bea"),e=e(),(0,u.Cn)(),e),Be={class:"login-box"},Re=je((()=>(0,u._)("h4",null,"Register",-1))),$e=je((()=>(0,u._)("hr",null,null,-1))),Oe={key:0,class:"alert alert-warning"},Ne={class:"white-text"},Ze=je((()=>(0,u._)("p",null,"Don't have an account? Register for one now",-1))),He={class:"form-group"},We={class:"input-field"},Me=je((()=>(0,u._)("label",{for:"username"},"Username",-1))),Ve={class:"input-field"},Ee=je((()=>(0,u._)("label",{for:"email"},"Email",-1))),Ye={class:"input-field"},Ke=je((()=>(0,u._)("label",{for:"password"},"Password",-1))),Fe={class:"center-align"},Ge=je((()=>(0,u._)("hr",null,null,-1))),Je=je((()=>(0,u._)("hr",null,null,-1)));function Qe(e,t,n,i,s,r){const a=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)("div",Be,[Re,$e,null!=s.error?((0,u.wg)(),(0,u.iD)("div",Oe,[(0,u._)("span",Ne,(0,V.zw)(s.error.message),1)])):(0,u.kq)("",!0),Ze,(0,u._)("form",He,[(0,u._)("div",We,[Me,(0,u.wy)((0,u._)("input",{id:"username",type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),required:""},null,512),[[o.nr,s.username]])]),(0,u._)("div",Ve,[Ee,(0,u.wy)((0,u._)("input",{id:"email",type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e),required:""},null,512),[[o.nr,s.email]])]),(0,u._)("div",Ye,[Ke,(0,u.wy)((0,u._)("input",{id:"password",type:"password",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>s.pass=e),required:""},null,512),[[o.nr,s.pass]])]),(0,u._)("div",Fe,[Ge,(0,u._)("button",{onClick:t[3]||(t[3]=e=>r.authenticate(e)),class:"btn btn-primary btn-large"},"Register"),Je,(0,u._)("p",null,[(0,u.Uk)("Already have an account? - "),(0,u.Wm)(a,{to:"Login"},{default:(0,u.w5)((()=>[(0,u.Uk)("Login Now")])),_:1})])])])])}var Xe={name:"Register",data(){return{username:"",email:"",pass:"",error:null}},methods:{authenticate(e){e&&e.preventDefault(),this.$cognitoAuth.signup(this.username,this.email,this.pass,(e=>{console.log("error:"+e),e?this.error=e:this.$router.push({path:"/confirm"})}))}}};const et=(0,x.Z)(Xe,[["render",Qe],["__scopeId","data-v-dd3d2bea"]]);var tt=et;const nt={class:"scrolling-component",ref:"scrollComponent"},ot={class:"container"},it={class:"row"};function st(e,t,n,o,i,s){const r=(0,u.up)("post-component");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",null,[(0,u._)("h2",null,(0,V.zw)(this.username),1)]),(0,u._)("div",nt,[(0,u._)("div",ot,[(0,u._)("div",it,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(i.posts,(e=>((0,u.wg)(),(0,u.j4)(r,{post:e,key:e},null,8,["post"])))),128))])])],512)],64)}const rt=(0,le.iH)(null);var at={name:"Profile",components:{PostComponent:ie},data(){return{posts:[],lastItem:0,text:null,sortBy:null,username:null}},setup(){return{scrollComponent:rt}},methods:{changeSelection:function(e){console.log("Clicked "+e.target.id),this.getdata(null,e.target.id)},getBackendUrl:function(){return r.prod?r.backendProd:r.backendLocal},getdata:function(e,t,n){this.text=e,this.sortBy=t,this.username=n,M.ZP.get(this.getBackendUrl()+"/search?text="+e+"&sortby="+t+"&user="+n,{params:{}}).then((e=>{this.posts=ae(e.data,0,10),this.lastItem=10}))},getNextData:function(){window.onscroll=()=>{let e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&M.ZP.get(this.getBackendUrl()+"/search?text="+this.text+"&sortby="+this.sortBy+"&user="+this.username,{params:{}}).then((e=>{this.posts.push(...ae(e.data,this.lastItem,10)),this.lastItem+=10}))}}},beforeMount(){this.username=l.getCurrentUser().getUsername(),this.sortBy="newest",this.getdata(void 0,this.sortBy,this.username)},mounted(){this.getNextData()}};const lt=(0,x.Z)(at,[["render",st],["__scopeId","data-v-2922b8e0"]]);var ut=lt;const ct=e=>((0,u.dD)("data-v-13fbaebb"),e=e(),(0,u.Cn)(),e),dt={class:"imageContainer"},gt=["src"],pt={class:"imageInfo"},mt={class:"imageInfoLeft"},ht={class:"imageTitle"},kt={class:"imageLikes"},ft={class:"imageDislikes"},bt=["post"],vt={class:"imageInfoRight"},_t={class:"imageAuthor"},wt={class:"d-flex flex-row-reverse"},yt=ct((()=>(0,u._)("h1",{class:"comments"}," Comments ",-1))),Dt={key:0},Ut={class:"commentsContainer"},Ct=["post"],Lt=ct((()=>(0,u._)("hr",null,null,-1))),xt={class:"commentName"},It={class:"commentDate"},Pt={class:"commentText"},qt=ct((()=>(0,u._)("hr",null,null,-1)));function At(e,t,n,o,i,s){const r=(0,u.up)("router-link");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",dt,[(0,u.Wm)(r,{to:`/${i.post.image_id}`},{default:(0,u.w5)((()=>[(0,u._)("img",{class:"card-img-top",src:i.post.imgURL,alt:""},null,8,gt)])),_:1},8,["to"]),(0,u._)("div",pt,[(0,u._)("div",mt,[(0,u._)("h1",ht,[(0,u._)("strong",null,(0,V.zw)(i.post.caption),1)]),(0,u._)("h5",kt,"Likes: "+(0,V.zw)(i.post.likes),1),(0,u._)("h5",ft,"Dislikes: "+(0,V.zw)(i.post.dislikes),1),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(this.post.tags,(e=>((0,u.wg)(),(0,u.iD)("div",{post:e,key:e},[(0,u.Wm)(r,{to:`/?tag=${e}`},{default:(0,u.w5)((()=>[(0,u.Uk)("#"+(0,V.zw)(e),1)])),_:2},1032,["to"])],8,bt)))),128))]),(0,u._)("div",vt,[(0,u._)("h3",_t,[(0,u._)("i",null,(0,V.zw)(i.post.username),1)]),(0,u._)("div",wt,[(0,u._)("button",{class:"btn btn-danger ml-2",onClick:t[0]||(t[0]=(...e)=>s.dislike_button&&s.dislike_button(...e)),ref:"Dislike"},(0,V.zw)(i.Dislike),513),(0,u._)("button",{class:"btn btn-success ml-2",onClick:t[1]||(t[1]=(...e)=>s.like_button&&s.like_button(...e)),ref:"Like"},(0,V.zw)(i.Like),513)])])])]),yt,void 0!==this.post.comments&&this.post.comments.length>0?((0,u.wg)(),(0,u.iD)("div",Dt,[(0,u._)("div",Ut,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(i.post.comments,(e=>((0,u.wg)(),(0,u.iD)("div",{post:e,key:e},[Lt,(0,u._)("h3",xt,[(0,u._)("i",null,(0,V.zw)(e.username),1)]),(0,u._)("h6",It," ("+(0,V.zw)(new Date(e.comment_date).getMonth().toString())+"-"+(0,V.zw)(new Date(e.comment_date).getDay().toString())+"-"+(0,V.zw)(new Date(e.comment_date).getFullYear().toString())+") ",1),(0,u._)("div",Pt,(0,V.zw)(e.comment_contents),1)],8,Ct)))),128)),qt])])):(0,u.kq)("",!0)],64)}var zt={name:"SingleImage",data(){return{post:{image_id:0,imageUrl:""},Like:"Like",Dislike:"Dislike"}},mounted(){this.Like=void 0!==this.post.userLikes&&this.post.userLikes.liked?"Liked":"Like",this.Dislike=void 0!==this.post.userLikes&&this.post.userLikes.disliked?"Disliked":"Dislike"},methods:{getBackendUrl:function(){return r.prod?r.backendProd:r.backendLocal},onClick:function(e,t){e&&e.preventDefault(),this.$router.replace({path:"/",query:{tag:t}})},getdata:function(){let e=l.getCurrentUser().getUsername();M.ZP.get(this.getBackendUrl()+"/search?image_id="+this.$route.params.id+"&currentuser="+e,{params:{}}).then((e=>{this.post=ae(e.data,0,1)[0],this.Like=void 0!==this.post.userLikes&&this.post.userLikes.liked?"Liked":"Like",this.Dislike=void 0!==this.post.userLikes&&this.post.userLikes.disliked?"Disliked":"Dislike"}))},import_like:function(){let e=this;l.getIdToken((function(t,n){if(t)return alert("There was an error with your account: "+t.message);M.ZP.post(e.getBackendUrl()+"/like",{image_id:e.post.image_id,username:l.getCurrentUser().getUsername(),like:"Liked"===e.Like,dislike:"Disliked"===e.Dislike,jwt:n},{params:{},headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})}))},like_button:function(){console.log("Clicked Like"),"Like"===this.Like?this.Like="Liked":"Liked"===this.Like&&(this.Like="Like"),this.Dislike="Dislike",this.import_like()},dislike_button:function(){console.log("Clicked Dislike"),"Dislike"===this.Dislike?this.Dislike="Disliked":"Disliked"===this.Dislike&&(this.Dislike="Dislike"),this.Like="Like",this.import_like()}},beforeMount(){this.getdata()}};const St=(0,x.Z)(zt,[["render",At],["__scopeId","data-v-13fbaebb"]]);var Tt=St;const jt=e=>((0,u.dD)("data-v-2e10de58"),e=e(),(0,u.Cn)(),e),Bt={key:0},Rt={key:1},$t={key:0},Ot=jt((()=>(0,u._)("h4",{class:"upload-wrapper"},"You have chosen a file",-1)));function Nt(e,t,n,i,s,r){const a=(0,u.up)("post-component");return(0,u.wg)(),(0,u.iD)("div",null,[(0,u._)("div",(0,u.dG)({class:"dropzone"},this.getRootProps()),[(0,u._)("div",{class:(0,V.C_)(["border",{isDragActive:i.isDragActive}])},[(0,u._)("input",(0,V.vs)((0,u.F4)(this.getInputProps())),null,16),i.isDragActive?((0,u.wg)(),(0,u.iD)("p",Bt,"Drop the files here ...")):((0,u.wg)(),(0,u.iD)("p",Rt,"Drag and drop files here, or Click to select files"))],2)],16),i.state.files.length>0?((0,u.wg)(),(0,u.iD)("div",$t,[Ot,(0,u.Uk)(" Caption:"),(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.caption.text=e),placeholder:"enter caption here"},null,512),[[o.nr,i.caption.text]]),(0,u.Uk)(" Tags:"),(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.tags.text=e),placeholder:"enter tags here"},null,512),[[o.nr,i.tags.text]]),(0,u._)("button",{class:"btn btn-info",onClick:t[2]||(t[2]=(...e)=>i.upload&&i.upload(...e))},"Upload "),((0,u.wg)(),(0,u.j4)(a,{post:i.post,key:i.post},null,8,["post"]))])):(0,u.kq)("",!0)])}var Zt=n(29118);const Ht=n(98690);var Wt={name:"Upload",components:{PostComponent:ie},setup(){const e=(0,le.qj)({files:[]});let t=(0,le.qj)({imgUrl:null,caption:"No image",tags:"",username:l.getCurrentUser().getUsername()}),n=(0,le.qj)({text:""}),o=(0,le.qj)({text:""});function i(){return r.prod?r.backendProd:r.backendLocal}function s(){l.getIdToken((function(t,s){if(t)return alert("There was an error uploading your photo: "+t.message);{const t="cognito-idp.us-east-1.amazonaws.com/"+r.IdentityPoolId;Ht.config.update({region:r.bucketRegion,credentials:new Ht.CognitoIdentityCredentials({IdentityPoolId:r.IdentityPoolIdLong,Logins:{[t]:s}})});const p=e.files;if(!p.length)return alert("Please choose a file to upload first.");var a=p[0],u=a.name,c=l.getCurrentUser().getUsername()+"/",d=c+u,g=new Ht.S3.ManagedUpload({params:{Bucket:r.bucket,Key:d,Body:a}});const m=g.promise();m.then((function(e){console.log("Successfully uploaded photo: "+e.Location),alert("Successfully Uploaded photo: "+e.Key),M.ZP.post(i()+"/addimage",{objectId:d,username:l.getCurrentUser().getUsername(),caption:n.text,tags:o.text,jwt:s},{params:{},headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((e=>{console.log(e)}))}),(function(e){return alert("There was an error uploading your photo: "+e.message)}))}}))}function a(n,o){console.log(n),console.log(o),e.files=n,t.imgUrl=n[0].path,t.caption=n[0].name}const{getRootProps:c,getInputProps:d,isDragActive:g,...p}=(0,Zt.u)({onDrop:a});function m(){s()}return(0,u.YP)(e,(()=>{console.log("state",e)})),(0,u.YP)(g,(()=>{console.log("isDragActive",g.value,p)})),{getRootProps:c,getInputProps:d,isDragActive:g,post:t,state:e,caption:n,tags:o,upload:m,...p}},data:function(){return{error:"",status:""}},beforeMount(){},methods:{}};const Mt=(0,x.Z)(Wt,[["render",Nt],["__scopeId","data-v-2e10de58"]]);var Vt=Mt;const Et=e=>((0,u.dD)("data-v-2d3f78f6"),e=e(),(0,u.Cn)(),e),Yt={class:"login-box center-align"},Kt=Et((()=>(0,u._)("h4",null,"Confirm Signup",-1))),Ft={key:0,class:"card-panel red darken-2"},Gt={class:"white-text"},Jt=Et((()=>(0,u._)("p",null,"Enter the verification code you should have recieved via email",-1))),Qt={class:"form"},Xt={class:"input-field"},en=Et((()=>(0,u._)("label",{for:"username"},"Username",-1))),tn={class:"input-field"},nn=Et((()=>(0,u._)("label",{for:"confirmcode"},"Confirmation Code",-1))),on={class:"center-align"};function sn(e,t,n,i,s,r){return(0,u.wg)(),(0,u.iD)("div",Yt,[Kt,null!=s.error?((0,u.wg)(),(0,u.iD)("div",Ft,[(0,u._)("span",Gt,(0,V.zw)(s.error.message),1)])):(0,u.kq)("",!0),Jt,(0,u._)("form",Qt,[(0,u._)("div",Xt,[en,(0,u.wy)((0,u._)("input",{id:"username",type:"text",class:"validate","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),required:""},null,512),[[o.nr,s.username]])]),(0,u._)("div",tn,[nn,(0,u.wy)((0,u._)("input",{id:"confirmcode",type:"text",class:"validate","onUpdate:modelValue":t[1]||(t[1]=e=>s.confirmcode=e),required:""},null,512),[[o.nr,s.confirmcode]])]),(0,u._)("div",on,[(0,u._)("button",{onClick:t[2]||(t[2]=e=>r.confirm(e)),class:"btn btn-default btn-large"},"Verify Now")])])])}var rn={name:"Confirm",data(){return{username:"",confirmcode:"",error:null}},methods:{confirm(e){e&&e.preventDefault(),this.$cognitoAuth.confirmRegistration(this.username,this.confirmcode,(e=>{e?this.error=e:this.$router.push("/profile")}))}}};const an=(0,x.Z)(rn,[["render",sn],["__scopeId","data-v-2d3f78f6"]]);var ln=an;function un(e,t,n){l.isAuthenticated(((t,o)=>{if(t)return n();o?n():n({path:"/login",query:{redirect:e.fullPath}})}))}function cn(e,t,n){l.logout(),n("/")}const dn=[{path:"/",name:"Home",component:ge},{path:"/login",name:"Login",component:Te},{path:"/register",component:tt},{path:"/confirm",component:ln},{path:"/profile",component:ut},{path:"/:id",component:Tt},{path:"/upload",component:Vt,beforeEnter:un},{path:"/logout",beforeEnter:cn}],gn=(0,S.p7)({history:(0,S.PO)(),routes:dn});var pn=gn;(0,o.ri)(z).use(pn).use(l,r).mount("#app")},56249:function(){},28022:function(){},42480:function(){}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,s){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],s=e[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,s<r&&(r=s));if(a){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/pictografy/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,s,r=o[0],a=o[1],l=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(o);u<r.length;u++)s=r[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(87827)}));o=n.O(o)})();
//# sourceMappingURL=app.e4de5d8e.js.map