<template>
  <header>
    <div class="title">
      <p>数据灵感之智分析</p>
      <img src="../../assets/imgs/header/head_bg.png"/>
      <TitleBtn></TitleBtn>
    </div>
    <div class="nav">
      <NavLi v-bind:key="index" v-for="(item,index) in menu" :name="item.name" :link="item.link" :child="item.child || false"></NavLi>
    </div>
  </header>
</template>

<script>
  import NavLi from '../components/navLi'
  import TitleBtn from '../components/titleBtn'

  export default {
    name: "headPart",
    data(){
      return {
        menu:[
          {name:'开',link:'/start'},
          {name:'数',link:'/dataFrom'},
          {
            name:'短',link:'/shortSentence',
            child:[
              {
                name:'基',
                icon:'',
                link:'/shortSentence/statistics'
              },
              {
                name:'基',
                icon:'',
                link:'/shortSentence/word'
              }
            ]
          },
          {name:'关',link:'/keyword'},
          {name:'词',link:'/relative'},
          {name:'主',link:'/theme'},
          {name:'工',link:'/tools'},
          {name:'帮',link:'/help'}
        ]
      }
    },
    components:{
      NavLi,
      TitleBtn
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
