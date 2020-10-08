<template>
  <div class="mine_cell" @click="clickCell">
    <div class="cell_left">
      <i :class="leftIcon"></i>
      <span>{{leftTitle}}</span>
    </div>
    <div class="cell_right">
      <i class="itlike-uniE909"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["leftIcon", "leftTitle"],
  methods: {
    clickCell() {}
  }
};
</script>
<style scoped lang="less">
.mine_cell {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #ececec;
  .cell_left,
  .cell_right {
    display: flex;
    align-items: center;
    i {
      margin-right: 10px;
    }
  }
}
</style>