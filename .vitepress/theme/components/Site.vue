<template>
  <span class="namespace">
    <a :href="`https://${props.url}`" target="_blank" rel="noopener noreferrer">
      <img loading="lazy" :width='width' :height='width' :src="icon" />
    </a>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string,
  size?: string,
}>();

let icon
const width = props.size === 'sm' ? '22' : '30';
try {
  if (props.url) {
    const location = new URL(`https://${props.url}`);
    icon = `https://cdn.moeyy.cn/favicon/${location.hostname}.ico`;
  }
} catch (error) { }

</script>

<style scoped>
.namespace {
  display: inline-flex;
  vertical-align: sub;
  margin-left: 5px;
}

.namespace img {
  border-radius: 5px;
}
</style>