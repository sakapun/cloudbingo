<template>
  <section class="container">
    <BingoCard />
    <button class="button is-primary"
            @click="addSelected" >
      追加
    </button>
  </section>
</template>

<script>
import BingoCard from "../components/Organisms/BingoCard";
import {mapMutations} from "vuex";

export default {
  components: {
    BingoCard
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
