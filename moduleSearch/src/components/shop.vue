<template>
    <scroll-view @scrolltolower="lower" class="scroll-view" scroll-y>
        <dl v-for="(item,index) in storeList" :key="index">
            <dd>
                <image :src="item.topicPic"/>
            </dd>
            <dt>
                <p>{{item.topicTitle}}</p>
            </dt>
        </dl>
    </scroll-view>
</template>

<script>
export default {
  props: ['storeList']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
