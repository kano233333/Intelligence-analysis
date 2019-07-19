<template>
  <div class="title-bnt">
    <!--<sicon name=""></sicon>-->
    <!--<sicon name=""></sicon>-->
    <!--<sicon name=""></sicon>-->
    <p v-for="item in btn" @click="btnClick(item.type)"></p>
  </div>
</template>

<script>

  const ipc = require('electron').ipcRenderer;
  console.log(ipc)
  // import electron from 'electron'
  // const ipc = electron.ipcRenderer
  // console.log(window)
  const btn = [
    {type:'min'},
    {type:'max'},
    {type:'close'}
  ];

  export default {
    name: "titleBtn",
    data(){
      return {
        btn: btn
      }
    },
    methods: {
      btnClick(type){
        ipc.send(type);
      }
    }
  }
</script>

<style scoped lang="less">
  .title-bnt {
    position:absolute;;
    right:0;
    top:0;
    display: inline;
    > p {
      width: 25px;
      height: 25px;
      display: inline-block;
      background-color: #4d5669;
      margin: 5px;
    }
  }
</style>
