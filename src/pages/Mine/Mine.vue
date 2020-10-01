<template>
  <div class="mine">
    <div v-if="userInfo.id">个人中心</div>
    <selectlogin v-else></selectlogin>
  </div>
</template>

<script>
import Selectlogin from "../../components/Login/Selectlogin";
import { mapState } from "vuex";
export default {
  components: {
    Selectlogin
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>
<style scoped lang="less">
</style>