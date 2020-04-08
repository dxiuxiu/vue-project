<template>
  <div class="search-container">
    <i class="icon-search"></i>
    <!-- 
       @keyup.enter="enterFn"
       @keyup.enter="enter"
     -->
    <input placeholder="请输入关键字" 
    v-model="inputText" 
    
    @keyup.enter="enter(inputText)"
     />

    <!-- {{inputText}} -->
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    enter: {
      type: Function,
      default: null
    }
  },
  methods: {
    enterFn: function() {
      if (this.enter) {
        this.enter(this.inputText);
      }
    },
    changeFn: () => {
      console.log("change");
    }
  },
  data() {
    return {
      inputText: ""
    };
  }
};
</script>

<style scope>
.search-container {
  background-color: #fff;
  padding: 3px;
  border-radius: 5px;
}
input {
  border: none;
  outline: none;
  padding: 10px 5px;
  font-size: 14px !important;
  font-weight: normal;
}
.icon-search {
  margin-left: 10px;
  color: #ccc !important;
}
</style>