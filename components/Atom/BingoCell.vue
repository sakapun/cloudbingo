<template>
  <div class="cell" :class="{isSelected: isSelected}">
    {{ computedNum }}
  </div>
</template>

<script>
import {mapState} from "vuex";

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
    },
    isSelected () {
      return this.selectedNumbers.find(number => number === this.num);
    },
    ...mapState("nowGame", [
      "selectedNumbers"
    ])
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

.isSelected {
  background: #7f828b;
}
</style>
