<template>
  <div>
    <h1>Search</h1>
    <h1>params参数-----{{ $route.params.keyword }}</h1>
    <h1>query参数-----{{ $route.query.keyword1 }}</h1>
    <TypeNav  />
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped></style>
