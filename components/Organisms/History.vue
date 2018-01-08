<template>
  <div class="box">
    <h2>抽選履歴</h2>
    <div v-for="historyNumber in selectedNumbers"
         :key="historyNumber">
      <div :class="isHistory(historyNumber)">
        {{ historyNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
export default {
  name: "History",
  computed: {
    ...mapState("nowGame", [
      "selectedNumbers"
    ]),
    ...mapGetters([
      "allMyNumbers"
    ])
  },
  methods: {
    isHistory (number) {
      return {
        isSelected: !!this.allMyNumbers.find(n => n === number)
      };
    }
  }
};
</script>

<style scoped>
.isSelected {
  background: chartreuse;
}
</style>
