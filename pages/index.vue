<template>
  <section class="container">
    <BingoCard />
    <button class="button is-primary"
            @click="addSelected" >
      追加
    </button>
    <History />
  </section>
</template>

<script>
import BingoCard from "../components/Organisms/BingoCard";
import History from "../components/Organisms/History";
import {mapMutations} from "vuex";

export default {
  components: {
    BingoCard,
    History
  },
  methods: {
    ...mapMutations("nowGame", [
      "addSelected"
    ])
  }
};
</script>

<style>
</style>
