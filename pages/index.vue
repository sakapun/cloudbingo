<template>
  <section class="container">
    <div class="bingo-wrap">
      <Bingo />
      <Bingo />
      <Bingo />
      <Bingo />
      <Bingo />
    </div>
  </section>
</template>

<script>
import Bingo from "../components/Molucules/BingoColumn";
export default {
  components: {
    Bingo
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
