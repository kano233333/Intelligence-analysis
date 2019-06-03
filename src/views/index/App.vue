<template>
  <div>
    <HeadPart></HeadPart>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations   } from 'vuex'
import HeadPart from '../components/headPart'

export default {
  data () {
    return {
    };
  },

  computed: {
    ...mapState([
      'test'
    ])
  },
  methods: {
    ...mapMutations ({
      change: 'changState'
    }),
  },
  components:{
    HeadPart
  }
}

</script>

<style scoped lang="less">
.index{
  padding: 80px;
  text-align: center;
}
</style>