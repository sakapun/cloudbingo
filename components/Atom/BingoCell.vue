<template>
  <div class="cell">
    {{ num }}
  </div>
</template>

<script>
export default {
  name: "BingoCell",
  props: {
    num: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.cell {
  width: 50px;
  height: 50px;
  border: #47494e 1px solid;
  font-size: 2.5em;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;

}
</style>
