<template>
  <div class="rankDiv">
    <p>Reaction time - {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja Fingers";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail pace...";
    }
    this.$emit("rank", this.rank);
  },
};
</script>

<style>
.rankDiv {
  margin-top: 100px;
}

.rankDiv p {
  text-align: center;
}

.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>