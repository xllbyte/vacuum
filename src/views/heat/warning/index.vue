<template>
  <div>
    <n-card title="卡片" class="shadow-sm rounded-16px">
      <n-grid x-gap="12" :cols="5">
        <n-gi span="3">
          <n-grid x-gap="12" :cols="6">
            <n-gi>
              <div>
                <n-button class="block-sty">-100</n-button>
                <n-button class="block-sty">不可用</n-button>
              </div>
            </n-gi>
            <n-gi>
              <div class="light-green" />
            </n-gi>
            <n-gi>
              <div class="light-green" />
            </n-gi>
            <n-gi>
              <div class="light-green" />
            </n-gi>
            <n-gi>
              <div class="light-green" />
            </n-gi>
            <n-gi>
              <div class="light-green" />
            </n-gi>
          </n-grid>
        </n-gi>
        <n-gi span="2">
          <div class="green" />
        </n-gi>
      </n-grid>
    </n-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.block-sty {
  width: 100%;
}
</style>
