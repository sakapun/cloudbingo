<template>
  <div>
    <div v-for="rowIndex in Array.from(Array(5).keys())"
         :key="rowIndex">
      <Cell :num="rowIndex" />
    </div>
  </div>
</template>

<script>
import Cell from "../Atom/BingoCell";
export default {
  name: "BingoColumns",
  components: {
    Cell
  }
};
</script>

<style scoped>

</style>
