(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4852"],{9126:function(e,t,s){"use strict";s.r(t);var o=s("7a23");const a={class:"container"},r={class:"row"},l={class:"col-lg-3"},c={class:"d-grid gap-2"},n={class:"d-grid gap-2"},i={class:"d-grid gap-2"},m={key:0,class:"col-lg-9"},d={key:1,class:"col-lg-9 bg-secundary mt-2 pb-2"},p=Object(o["g"])("div",{class:"mt-2 mb-4"},[Object(o["g"])("h2",null,"Personajes Favoritos")],-1),b={key:2,class:"col-lg-9 bg-secundary mt-2 pb-2"},h=Object(o["g"])("div",{class:"mt-2 mb-4"},[Object(o["g"])("h2",null,"Todos los personajes")],-1),u=["onClick"];function j(e,t,s,j,g,f){const O=Object(o["A"])("card-components"),y=Object(o["A"])("FormPerComponents"),w=Object(o["A"])("CardComponents");return Object(o["s"])(),Object(o["f"])("div",a,[Object(o["g"])("div",r,[Object(o["g"])("div",l,[Object(o["h"])(O,{class:"mt-2 mx-auto card-comp"},{default:Object(o["G"])(()=>[Object(o["g"])("div",c,[Object(o["g"])("button",{class:"btn btn-dark",onClick:t[0]||(t[0]=e=>f.showPerFavorite())},"Personajes Favoritos")]),Object(o["g"])("div",n,[Object(o["g"])("button",{class:"btn btn-dark",onClick:t[1]||(t[1]=e=>f.showPerAll())},"Todos los personajes")]),Object(o["g"])("div",i,[Object(o["g"])("button",{class:"btn btn-dark",onClick:t[2]||(t[2]=e=>f.showForm())},"Completar Perfil")])]),_:1})]),1==g.showForms.estado?(Object(o["s"])(),Object(o["f"])("div",m,[Object(o["h"])(O,{class:"mt-2 mx-auto card-comp"},{default:Object(o["G"])(()=>[Object(o["h"])(y,{infoUser:g.user},null,8,["infoUser"])]),_:1})])):Object(o["e"])("",!0),1==g.showForms.personajesF?(Object(o["s"])(),Object(o["f"])("div",d,[p,(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(g.favorites,e=>(Object(o["s"])(),Object(o["d"])(w,{key:e.name,class:"mt-2 mx-auto single-post",title:e.name,parrafo:e.gender,picture:e.image},null,8,["title","parrafo","picture"]))),128))])):Object(o["e"])("",!0),1==g.showForms.allPer?(Object(o["s"])(),Object(o["f"])("div",b,[h,(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(g.allpersonajes,e=>(Object(o["s"])(),Object(o["d"])(O,{key:e.name,class:"mt-2 mx-auto single-post",title:e.name,parrafo:e.id,picture:e.image},{default:Object(o["G"])(()=>[Object(o["g"])("button",{class:"btn btn-primary mt-2",onClick:t=>(g.perso=e.id,f.savePerso())}," Agregar a favoritos",8,u)]),_:2},1032,["title","parrafo","picture"]))),128))])):Object(o["e"])("",!0)])])}s("14d9");var g=s("49c0");const f=Object(o["g"])("h2",null,"Completar perfil",-1),O={class:"mb-3 mt-3"},y=Object(o["g"])("label",{for:"name",class:"form-label"},"Nombre",-1),w=["onUpdate:modelValue"],v={class:"mb-3 mt-3"},F=Object(o["g"])("label",{for:"exampleInputEmail1",class:"form-label"},"Correo Electronico:",-1),A=["onUpdate:modelValue"],C={class:"mb-3 mt-3"},k=Object(o["g"])("label",{for:"address",class:"form-label"},"Direccion",-1),P=["onUpdate:modelValue"],T={class:"mb-3 mt-3"},U=Object(o["g"])("label",{for:"birthdate",class:"form-label"},"Fecha nacimiento",-1),x=["onUpdate:modelValue"],E={class:"mb-3 mt-3"},S=Object(o["g"])("label",{for:"city",class:"form-label"},"Ciudad",-1),V=["onUpdate:modelValue"],_={class:"mb-3 mt-3"},I=Object(o["g"])("label",{for:"exampleInputPassword1",class:"form-label"},"Contraseña",-1),H=["onUpdate:modelValue"],z={class:"mb-3 mt-3"},B=Object(o["g"])("label",{for:"Password2",class:"form-label"},"Confirmar Contraseña",-1),G=["onUpdate:modelValue"],J=Object(o["g"])("div",{class:"d-grid gap-2"},[Object(o["g"])("button",{type:"submit",class:"btn btn-primary mt-2"},"Completar perfil")],-1);function N(e,t,s,a,r,l){const c=Object(o["A"])("alerts-components");return Object(o["s"])(),Object(o["f"])(o["a"],null,[f,(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(s.infoUser,e=>(Object(o["s"])(),Object(o["f"])("form",{ref_for:!0,ref:"user",key:e.name,onSubmit:t[0]||(t[0]=Object(o["I"])(e=>l.saveForms(),["prevent"]))},[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(r.alertArray,e=>(Object(o["s"])(),Object(o["d"])(c,{key:e.txt,alertas:r.alertArray},null,8,["alertas"]))),128)),Object(o["g"])("div",O,[y,Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":t=>e.name=t,type:"text",class:"form-control"},null,8,w),[[o["E"],e.name]])]),Object(o["g"])("div",v,[F,Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":t=>e.email=t,type:"email",class:"form-control","aria-describedby":"emailHelp"},null,8,A),[[o["E"],e.email]])]),Object(o["g"])("div",C,[k,Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":t=>e.address=t,type:"text",class:"form-control"},null,8,P),[[o["E"],e.address]])]),Object(o["g"])("div",T,[U,Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":t=>e.birthdate=t,type:"date",class:"form-control"},null,8,x),[[o["E"],e.birthdate]])]),Object(o["g"])("div",E,[S,Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":t=>e.city=t,type:"text",class:"form-control"},null,8,V),[[o["E"],e.city]])]),Object(o["g"])("div",_,[I,Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":t=>e.password=t,type:"password",class:"form-control"},null,8,H),[[o["E"],e.password]])]),Object(o["g"])("div",z,[B,Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":t=>e.password_confirmation=t,type:"password",class:"form-control",autocomplete:"off"},null,8,G),[[o["E"],e.password_confirmation]])]),J],32))),128))],64)}var D=s("1dc0"),q={name:"FormPerComponents",props:["infoUser"],components:{AlertsComponents:D["a"]},data(){return{alertArray:[],valicion:{valido:!1},users:[],user:{name:"",email:"",address:"",birthdate:"",city:"",password:"",password_confirmation:""}}},methods:{saveForms(){const e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("token")};console.log("ff "+this.user.name);let t={name:this.user.name,email:this.user.email,address:this.user.address,birthdate:this.user.birthdate,city:this.user.city,password:this.user.password,password_confirmation:this.user.password_confirmation};this.users.push(t);let s={method:"PUT",headers:e,body:JSON.stringify(t)};console.log(t),fetch("http://localhost:8000/api/update",s).then(e=>e.json()).then(e=>{if(console.log(e),0==e.status){let t=e.msg,s={class:"alert-danger text-danger",txt:t};this.alertArray.push(s),setTimeout(()=>{this.alertArray.length=0},2e3),this.user.password="",this.user.password_confirmation=""}if(1==e.status){let t=e.msg,s={class:"alert-success text-success",txt:t};this.alertArray.push(s),setTimeout(()=>{this.alertArray.length=0},2e3)}}).catch(e=>console.log(e))}}},K=s("6b0d"),L=s.n(K);const M=L()(q,[["render",N]]);var Q=M,R={name:"Profile",components:{CardComponents:g["a"],FormPerComponents:Q},data(){return{perso:null,btnArray:[{txt:"Agregar favorito ",class:"btn-primary",formu:"login"}],user:[],favorites:[],allpersonajes:[],showForms:{estado:!1,personajesF:!0,allPer:!1}}},created(){(()=>{const e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("token")};console.log(localStorage.getItem("Token"));let t={method:"GET",headers:e};fetch("http://localhost:8000/api/store",t).then(e=>e.json()).then(e=>{e.characters.forEach(e=>{let t={name:e.name,gender:e.gender,image:e.image};this.favorites.push(t)})}).catch(e=>console.log(e))})(),(()=>{const e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("Token")};let t={method:"PUT",headers:e,body:JSON.stringify({page:"1"})};fetch("http://localhost:8000/api/index",t).then(e=>e.json()).then(e=>{e.characters.forEach(e=>{let t={name:e.name,image:e.image,id:e.id};this.allpersonajes.push(t)})}).catch(e=>console.log(e))})()},methods:{showForm(){0==this.showForms.estado&&(this.getUsert(),this.showForms.estado=!0,this.showForms.personajesF=!1,this.showForms.allPer=!1)},showPerFavorite(){0==this.showForms.personajesF&&(this.getfavorite(),this.showForms.estado=!1,this.showForms.allPer=!1,this.showForms.personajesF=!0)},showPerAll(){0==this.showForms.allPer&&(this.showForms.estado=!1,this.showForms.allPer=!0,this.showForms.personajesF=!1)},getUsert(){const e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("Token")};let t={method:"GET",headers:e};fetch("http://localhost:8000/api/user-profile",t).then(e=>e.json()).then(e=>{let t={name:e.user.name,email:e.user.email,address:e.user.address,birthdate:e.user.birthdate,city:e.user.city,password:e.user.password,password_confirmation:e.user.password_confirmation};this.user.length=0,this.user.push(t)}).catch(e=>console.log(e))},savePerso(){const e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("Token")};let t=String(this.perso),s={id:t};console.log(s);let o={method:"POST",headers:e,body:JSON.stringify(s)};fetch("http://localhost:8000/api/create",o).then(e=>e.json()).then(result).catch(e=>console.log(e))},getfavorite(){console.log(localStorage.getItem("Token")),this.favorites.length=0;const e={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("Token")};let t={method:"GET",headers:e};fetch("http://localhost:8000/api/store",t).then(e=>e.json()).then(e=>{e.characters.forEach(e=>{let t={name:e.name,gender:e.gender,image:e.image};this.favorites.push(t)})}).catch(e=>console.log(e))}}};const W=L()(R,[["render",j]]);t["default"]=W}}]);
//# sourceMappingURL=chunk-2d0e4852.45edd7a9.js.map