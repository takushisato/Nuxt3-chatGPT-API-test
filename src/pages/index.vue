<template>
  <!--  console.logで確認する目的のためテンプレート側は適当-->
  <h1>テスト</h1>
</template>
<script setup>
import {postAPI} from "~/composables/testStore";

const sample = postAPI();
console.log(sample);

</script>
