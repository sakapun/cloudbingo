<template>
  <div class="cell">
    {{ computedNum }}
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
  },
  computed: {
    computedNum () {
      return this.num === 0 ? "★" : this.num;
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
