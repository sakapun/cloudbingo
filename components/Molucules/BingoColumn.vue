<template>
  <div>
    <div v-for="cellNumber in colNumbers"
         :key="cellNumber">
      <Cell :num="cellNumber" />
    </div>
  </div>
</template>

<script>
import Cell from "../Atom/BingoCell";
export default {
  name: "BingoColumns",
  components: {
    Cell
  },
  props: {
    colNumbers: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
