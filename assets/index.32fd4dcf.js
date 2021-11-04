import{_ as h,o as l,c,a as r,t as f,F as T,w as v,v as g,b,r as w,d as $,n as p,e as u,l as N,f as k,g as D,h as x,T as S,i as C}from"./vendor.8273a239.js";const L=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}};L();const O={name:"Header",data(){return{title:"Vue TODO"}}},A={class:"fw-bold"},I=r("hr",null,null,-1);function F(e,s,i,d,o,t){return l(),c(T,null,[r("h1",A,f(o.title),1),I],64)}var j=h(O,[["render",F]]);const V={name:"CreateForm",data(){return{input:{placeholder:"Awesome activity in my beautiful day"},button:{text:"Create"},todoName:""}},methods:{newTodo(){this.todoName&&this.$emit("newTodo",this.todoName),this.todoName=""}},emits:["newTodo"]},B={class:"d-flex gap-3"},J=["placeholder"];function K(e,s,i,d,o,t){return l(),c("div",B,[v(r("input",{class:"form-control shadow-none",type:"text",placeholder:o.input.placeholder,"onUpdate:modelValue":s[0]||(s[0]=n=>o.todoName=n),onKeyup:s[1]||(s[1]=b((...n)=>t.newTodo&&t.newTodo(...n),["enter"])),autofocus:""},null,40,J),[[g,o.todoName]]),r("button",{class:"col btn btn-primary shadow-none",onClick:s[2]||(s[2]=(...n)=>t.newTodo&&t.newTodo(...n))},f(o.button.text),1)])}var P=h(V,[["render",K]]);const q={name:"TodoItem",props:{todos:{type:Array,default:[]}},methods:{removeTodo(e){this.$emit("removeTodo",e)},didTodo(e){this.$emit("didTodo",e)}},emits:["removeTodo","didTodo"]},z={class:"fs-6 fw-bold mb-0"},E=["onClick"],H=["onClick"];function M(e,s,i,d,o,t){const n=w("fa");return l(!0),c(T,null,$(i.todos,(a,m)=>(l(),c("div",{class:p(["p-4 d-flex justify-content-between align-items-center",{"bg-primary text-white rounded mb-3":!a.isDone,"alert alert-primary text-decoration-line-through":a.isDone}]),key:m},[r("h3",z,f(a.activity),1),r("aside",null,[r("button",{class:p(["btn btn-link shadow-none",{disabled:a.isDone,"text-light":!a.isDone}]),onClick:y=>t.didTodo(m)},[u(n,{icon:"check"})],10,E),r("button",{class:p(["btn btn-link shadow-none",{"text-light":!a.isDone}]),onClick:y=>t.removeTodo(m)},[u(n,{icon:"trash"})],10,H)])],2))),128)}var R=h(q,[["render",M]]);const W={class:"container"},U={class:"col-11 col-lg-8 mx-auto py-5"},Y={class:"mt-3 d-flex flex-column"};function G(e){return(s,i)=>(l(),c("main",W,[r("section",U,[u(j),u(P,{onNewTodo:s.newTodo},null,8,["onNewTodo"]),r("div",Y,[u(R,{todos:s.computedTodos,onRemoveTodo:s.removeTodo,onDidTodo:s.didTodo},null,8,["todos","onRemoveTodo","onDidTodo"])])])]))}const Q={data(){return{todos:[]}},mounted(){this.todos=JSON.parse(localStorage.getItem("todos"))?JSON.parse(localStorage.getItem("todos")):[],this.todos.length?this.$toast.show("Welcome back!"):this.$toast.show("Welcome!")},methods:{newTodo(e){this.todos.unshift({activity:e,isDone:!1}),this.saveToLocalStorage(),this.$toast.success(`Place '${e}' to your beautiful day!`)},removeTodo(e){this.$toast.error(`You just remove '${this.todos[e].activity}' from your beautiful day!`),this.todos.splice(e,1),this.saveToLocalStorage()},didTodo(e){this.todos[e].isDone=!0,this.saveToLocalStorage(),this.$toast.success("Amazing, you did it!")},saveToLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))}},computed:{computedTodos(){for(let e=0;e<this.todos.length;e++)this.todos[e].isDone&&(this.todos.push(this.todos[e]),this.todos.splice(e,1));return this.todos}}},X=Object.assign(Q,{setup:G});N.add(k,D);const _=x(X);_.use(S,{position:"top",queue:!0});_.component("fa",C);_.mount("#app");
