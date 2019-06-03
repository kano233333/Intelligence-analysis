<template>
  <router-link :class="child==[]?'':'haveTwo'" class="link" :to="link">
    <button>{{name}}</button>
    <div v-if="child" class="second">
      <router-link :to="item.link" v-for="(item,index) in child" v-bind:key="index">
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "navLi",
    props:{
      link:{
        default:'/'
      },
      name:{},
      child:{default:[]}
    }
  }
</script>

<style scoped lang="less">
  .link {
    color:#fff;
    font-size:18px;
    position:relative;
  }
  .link:hover,& .active {
    button {
      background-color: #fff;
      color:#1077b9;
      border-radius:40px;
      box-shadow: 0 0 15px #0B8EAB;
    }
    .second {
      transform: scale(1);
    }
  }
  .second {
    position:absolute;
    top: 54px;
    left: 50%;
    margin-left: -142.5px;
    height:108px;
    width:285px;
    transform: scale(0);
    background-color: #fff;
    box-shadow:0 0 13px #aedce3;
    z-index: 2;
    border-radius:0 0 10px 10px;
    transition: 0.3s all;
    font-size:14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    >a {
      margin:20px;
      color:#666;
    }
    >a.router-link-exact-active{
      color:#142cb9;
    }
  }
  a.active.haveTwo::before,.haveTwo:hover::before {
    width:0;
    height:0;
    border-width:20px 20px 0;
    border-style:solid;
    border-color:#fff transparent transparent;
    margin:0 auto;
    position:absolute;
    top:54px;
    left:0;
    right:0;
    content:'';
    z-index:4;
  }
  button {
    height:100%;
    padding:0 32px;
    color:#fff;
    border:none;
    display: block;
    background-color: transparent;
    outline: none;
    cursor:pointer;
    transition:0.3s all;
    position:relative;
    z-index: 3;
  }
</style>