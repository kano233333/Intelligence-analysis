<template>
  <header>
    <div class="title">
      <p>数据灵感之智分析</p>
      <img src="../../assets/imgs/header/head_bg.png"/>
    </div>
    <div class="nav">
      <NavLi v-bind:key="index" v-for="(item,index) in menu" :name="item.name" :link="item.link" :child="item.child || false"></NavLi>
    </div>
  </header>
</template>

<script>
  import NavLi from '../components/navLi'
  export default {
    name: "headPart",
    data(){
      return {
        menu:[
          {name:'开始',link:'/start'},
          {name:'数据灵感',link:'/dataFrom'},
          {
            name:'短句提取',link:'/shortSentence',
            child:[
              {
                name:'基于统计',
                icon:'',
                link:'/shortSentence/statistics'
              },
              {
                name:'基于数据词',
                icon:'',
                link:'/shortSentence/word'
              }
            ]
          },
          {name:'关键词提取',link:'/keyword'},
          {name:'词关键性分析',link:'/relative'},
          {name:'主题分析',link:'/theme'},
          {name:'工具',link:'/tools'},
          {name:'帮助',link:'/help'}
        ]
      }
    },
    components:{
      NavLi
    }
  }
</script>

<style scoped lang="less">
  header {
    height:140px;
    color:#fff;
  }
  .title {
    height:80px;
    background: linear-gradient(to right,#10afb9,#1077b9);
    position:relative;
    p {
      font-size:24px;
      line-height:3;
    }
    >img {
      width:348px;
      height:100%;
      position:absolute;
      top:0;
      left:398/1920*100%;
    }
  }
  .nav {
    height:54px;
    background: linear-gradient(to right,#10b0ba,#1077b9,#1077b9);
    box-shadow:0 10px 8px -10px #18bacd;
    font-size:18px;
    display: flex;
    justify-content: space-evenly;
  }
</style>