<template>
  <nav class="nav">
    <ChevronLeftIcon class="chevron-left" @click="prevPage" />
    <router-link
      v-for="(link, i) in links"
      :key="i"
      class="router-link"
      :to="link"
    ></router-link>
    <ChevronRightIcon class="chevron-right" @click="nextPage" />
  </nav>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";

const links = [
  "/",
  "/dynamic-form",
  "/array-binding",
  "/dynamic-rules",
  "/load-form-data",
  "/dynamic-object"
];

export default {
  name:'NavLinks',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
  data() {
    return {
      links,
      lookup: new Map(links.map((link, i) => [link, i]))
    };
  },
  methods: {
    nextPage() {
      const i = this.lookup.get(this.$route.fullPath);
      if (i < this.links.length - 1) {
        this.$router.push(this.links[i + 1]);
      }
    },
    prevPage() {
      const i = this.lookup.get(this.$route.fullPath);
      if (i > 0) {
        this.$router.push(this.links[i - 1]);
      }
    }
  }
};
</script>

<style scoped>


.nav {
  z-index: 10;
  position: sticky;
  top: 40px;
  display: flex;
  align-items: center;
}

.router-link {
  display: block;
  width: 20px;
  height: 20px;
  background-color: 'green';
  border: 1px solid 'green';
  border-radius: 50%;
  margin: 0 8px;
  transition: transform 0.1s;
}

.router-link:hover {
  transform: scale(1.4);
}

.router-link-active {
  transform: scale(1.4);
  box-shadow: 0 0 3px 'green';
}

.chevron-left,
.chevron-right {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  
}
.hover {
    color: 'green';
  }
.chevron-left {
  margin-right: 12px;
}
.chevron-right {
  margin-left: 12px;
}
</style>