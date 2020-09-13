<template>
  <div class="recommend">
    <ul class="recommned_list">
      <shoplist></shoplist>
      <shoplist></shoplist>
      <shoplist></shoplist>
      <shoplist></shoplist>
      <shoplist></shoplist>
      <shoplist></shoplist>
      <shoplist></shoplist>
      <shoplist></shoplist>
      <shoplist></shoplist>
      <shoplist></shoplist>
    </ul>
  </div>
</template>

<script>
import Shoplist from "../../components/Shoplist/Shoplist";
export default {
  components: {
    Shoplist
  }
};
</script>
<style scoped lang="less">
.recommend {
  width: 100%;
  height: 100%;
  .recommned_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
}
</style>