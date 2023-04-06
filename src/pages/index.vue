<template>
  <!--  console.logで確認する目的のためテンプレート側は適当-->
  <h1>テスト</h1>
</template>
<script setup>
// インポートなくても動く
import {getHoantyoData, hoge} from '~/composables/testStore';

// 問題なし
const getSample = hoge();
console.log(getSample);

// API取得問題なし
const umiyoho = getHoantyoData();
console.log(umiyoho);

// await付けても問題なく動く
const umiyoho2 = await getHoantyoData();
console.log(umiyoho2);
</script>
