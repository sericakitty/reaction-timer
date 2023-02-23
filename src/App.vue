<template>
  <NavBar />
  <main class="footerfixer">
    <div class="container">
      <div id="header">
        <h1>Ninja Reaction Timer</h1>
        <div class="sourcecode">
          <a
            href="https://github.com/sericakitty/reaction-timer"
            class="sourcecodelink"
            target="_blank"
            >Source code link</a
          >
        </div>
      </div>

      <button @click="start" :disabled="isPlaying">play</button>
      <Block v-if="isPlaying" :delay="delay" @time="endGame" />
      <Rank v-if="showResult" :score="score" @rank="addResult" />
    </div>
    <Results :results="results" />
  </main>
  <Footer />
</template>

<script>
import NavBar from './components/TheNavBar.vue';
import Block from '@/components/TheBlock.vue';
import Rank from '@/components/TheRank.vue';
import Results from '@/components/TheResults.vue';
import Footer from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: { NavBar, Block, Rank, Results, Footer },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
      results: [],
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
    addResult(rank) {
      this.results.push({ score: this.score, rank: rank });
      this.results.sort((a, b) => a.score - b.score);
      if (this.results.length > 5) {
        this.results.pop();
      }
    },
  },
};
</script>

<style>
@import url('https://sericakitty.github.io/styles.css');

.container {
  text-align: center;
  height: 400px;
}

#header {
  text-align: center;
}

.sourcecode {
  display: inline-block;
  text-align: center;
}

.sourcecodelink {
  color: var(--src-code-color);
}

.sourcecodelink:hover {
  color: var(--src-code-hover);
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 20px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
