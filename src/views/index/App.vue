<!-- index -->
<template>
  <div class="index"></div>
</template>

<script>
import { mapState, mapMutations   } from 'vuex'

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
  }

}

</script>

<style scoped lang="less">
.index{
  padding: 80px;
  text-align: center;
}
</style>