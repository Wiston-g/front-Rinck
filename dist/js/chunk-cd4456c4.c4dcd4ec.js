(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd4456c4"],{"3bea":function(e,t,s){"use strict";s.r(t);var a=s("7a23"),o=s("bf32"),r=s.n(o);const c={class:"home"},n={class:"row"},l=Object(a["g"])("div",{class:"col-lg-6"},[Object(a["g"])("div",{class:"img-cont"},[Object(a["g"])("img",{alt:"Vue logo",src:r.a,class:"img-logo"}),Object(a["g"])("h2",{class:"text-center text-lg-end"},"Podras tener toda la informacion de tus personajes favoritos")])],-1),i={class:"col-lg-6"};function m(e,t,s,o,r,m){const u=Object(a["A"])("FormComponents"),b=Object(a["A"])("card-components");return Object(a["s"])(),Object(a["f"])("div",c,[Object(a["g"])("div",n,[l,Object(a["g"])("div",i,[Object(a["h"])(b,{class:"mx-auto card-comp"},{default:Object(a["G"])(()=>[Object(a["h"])(u,{btns:r.btnArray},null,8,["btns"])]),_:1})])])])}var u=s("49c0");const b=Object(a["g"])("h2",null,"Login",-1),d=["rules"],p={class:"mb-3 mt-3"},g=Object(a["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Correo Electronico:",-1),j={class:"mb-3 mt-3"},O=Object(a["g"])("label",{for:"exampleInputPassword1",class:"form-label"},"Contraseña",-1),f={class:"d-grid gap-2"};function h(e,t,s,o,r,c){const n=Object(a["A"])("alerts-components");return Object(a["s"])(),Object(a["f"])(a["a"],null,[b,s.btns.formu==e.login?(Object(a["s"])(),Object(a["f"])("form",{key:0,ref:"usuario",rules:r.rules,onSubmit:t[2]||(t[2]=Object(a["I"])(e=>c.saveForm(),["prevent"]))},[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(r.alertArray,e=>(Object(a["s"])(),Object(a["d"])(n,{key:e.txt,alertas:r.alertArray},null,8,["alertas"]))),128)),Object(a["g"])("div",p,[g,Object(a["H"])(Object(a["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.user.email=e),type:"email",class:"form-control","aria-describedby":"emailHelp"},null,512),[[a["E"],r.user.email]])]),Object(a["g"])("div",j,[O,Object(a["H"])(Object(a["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.user.password=e),type:"password",class:"form-control"},null,512),[[a["E"],r.user.password]])]),Object(a["g"])("div",f,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(s.btns,e=>(Object(a["s"])(),Object(a["f"])("button",{key:e.txt,type:"submit",class:Object(a["o"])(["btn mt-2",e.class])},Object(a["C"])(e.txt),3))),128))])],40,d)):Object(a["e"])("",!0)],64)}s("14d9");var v=s("1dc0"),y={name:"FormComponents",props:["btns"],components:{AlertsComponents:v["a"]},data(){return{alertArray:[],valicion:{valido:!1},users:[],user:{name:"",email:"",password:"",password_confirmation:""},rules:{email:[{required:!0,message:"Campo required"}],password:[{required:!0,message:"Campo required"},{min:8,message:"limite de caracteres min 8"}],password_confirmation:[{required:!0,message:"Campo required"},{min:8,message:"limite de caracteres min 8"}]}}},methods:{validacionFormulario(e){this.$ref["user"].validate(e=>this.validacion.valido=!!e)},saveForm(){const e={"Content-Type":"application/json",Accept:"application/json"};let t={email:this.user.email,password:this.user.password};this.users.push(t);let s={method:"POST",headers:e,body:JSON.stringify(t),redirect:"follow"};console.log(t),fetch("http://localhost:8000/api/login",s).then(e=>e.json()).then(e=>{if(console.log(e),0==e.status){let t=e.msg,s={class:"alert-danger text-danger",txt:t};this.alertArray.push(s),setTimeout(()=>{this.alertArray.length=0},2e3),this.user.password="",this.user.password_confirmation=""}if(1==e.status){let t=e.msg,s={class:"alert-success text-success",txt:t};this.alertArray.push(s),console.log(e.access_token),localStorage.setItem("Token",e.access_token),setTimeout(()=>{this.alertArray.length=0},2e3),setTimeout(this.$router.push("/profile"),5e3)}}).catch(e=>console.log(e))}}},w=s("6b0d"),A=s.n(w);const x=A()(y,[["render",h]]);var C=x,k={name:"Login",components:{CardComponents:u["a"],FormComponents:C},data(){return{btnArray:[{txt:"Iniciar sesión",class:"btn-primary",formu:"login"}]}}};s("e3aa");const q=A()(k,[["render",m]]);t["default"]=q},"9e91":function(e,t,s){},e3aa:function(e,t,s){"use strict";s("9e91")}}]);
//# sourceMappingURL=chunk-cd4456c4.c4dcd4ec.js.map