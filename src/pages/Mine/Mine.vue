<template>
  <div class="mine">
    <div v-if="userInfo.id">
      <minetop></minetop>
    </div>
    <selectlogin v-else></selectlogin>
  </div>
</template>

<script>
import Selectlogin from "../../components/Login/Selectlogin";
import Minetop from "./Minetop";
import { mapState } from "vuex";
export default {
  components: {
    Selectlogin,
    Minetop
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>
<style scoped lang="less">
</style>