<template>
  <section class="container">
    <div class="bingo-wrap">
      <BingoColumn :col-numbers="colB"/>
      <BingoColumn :col-numbers="colI"/>
      <BingoColumn :col-numbers="colN"/>
      <BingoColumn :col-numbers="colG"/>
      <BingoColumn :col-numbers="colO"/>
    </div>
  </section>
</template>

<script>
import BingoColumn from "../Molucules/BingoColumn";
import {mapState} from "vuex";
export default {
  components: {
    BingoColumn
  },
  computed: {
    ...mapState([
      "colB",
      "colI",
      "colN",
      "colG",
      "colO"
    ])
  }
};
</script>

<style>
  .bingo-wrap {
    border: #47494e 1px solid;
    width: 250px;
    height: 250px;
    display: flex;
  }
</style>
