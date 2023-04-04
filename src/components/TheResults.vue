<template>
  <div class="resultBlock" v-if="results.length">
    <h2>Score Board (top 5)</h2>
    <ul>
      <li v-for="(result, index) in results" :key="index">
        <p class="index">{{ index + 1 }}.</p>
        <p class="score">{{ result.score }}</p>
        <p class="ms">ms -</p>
        <p class="result">{{ result.rank }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['results'],
};
</script>

<style>
.resultBlock {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.resultBlock h2 {
  font-size: 24px;
}

.resultBlockEmpty {
  text-align: center;
}


.resultBlock ul {

  list-style-type: none;
}

.resultBlock li {
  align-items: center;
  justify-content: center;
  display: flex;
}

.resultBlock li p {
  display: inline-block;
}

.resultBlock p.index {
  text-align: left;
  margin-right: 20px;
}

.resultBlock p.score {
  text-align: right;
  width: 50px;
}

.resultBlock p.ms {
  text-align: left;
  width: 75px;
  padding-left: 5px;
}

.resultBlock p.result {
  text-align: left;
  width: 200px;
}
</style>
