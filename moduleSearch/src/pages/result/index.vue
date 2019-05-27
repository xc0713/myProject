<template>
  <div>
    <Shop :storeList="SearchList"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Shop from "@/components/shop";
export default {
  components: {
    Shop
  },
  computed: {
    ...mapState({
      SearchList: state => state.search.SearchList
    })
  },
  data() {
    return {};
  },

  created() {}
};
</script>

<style>
</style>
