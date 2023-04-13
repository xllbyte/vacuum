<template>
  <div>
    <n-grid x-gap="12" y-gap="12" :cols="1">
      <n-gi>
        <n-card class="rounded-16px shadow-sm">
          <n-tag round :bordered="false" type="error">
            当前报警
            <template #icon>
              <icon-mdi-emoticon-angry class="text-24px" />
            </template>
          </n-tag>
          <n-grid x-gap="12" :cols="12">
            <n-gi span="11">
              <n-card>
                <n-log :rows="10" :log="logValue" />
              </n-card>
            </n-gi>
            <n-gi>
              <n-card>
                <n-space vertical>
                  <br />
                  <n-button type="error" strong secondary>
                    <icon-material-symbols-cleaning-bucket-outline-rounded class="text-24px" />
                  </n-button>
                  <n-button type="info" strong secondary>
                    <icon-mdi-arrow-top-right-bold-box class="text-24px" />
                  </n-button>
                  <n-button type="error" strong secondary>
                    <icon-material-symbols-cleaning-bucket class="text-24px" />
                  </n-button>
                  <br />
                </n-space>
              </n-card>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card class="rounded-16px shadow-sm">
          <n-tag round :bordered="false" type="warning">
            历史报警
            <template #icon>
              <icon-icon-park-solid-expressionless-face class="text-24px" />
            </template>
          </n-tag>
          <n-grid x-gap="12" :cols="12">
            <n-gi span="11">
              <n-card>
                <n-log :rows="10" :log="logValue" />
              </n-card>
            </n-gi>
            <n-gi>
              <n-card>
                <n-space vertical>
                  <br />
                  <n-button type="error" strong secondary>
                    <icon-material-symbols-cleaning-bucket-outline-rounded class="text-24px" />
                  </n-button>
                  <n-button type="info" strong secondary>
                    <icon-mdi-arrow-top-right-bold-box class="text-24px" />
                  </n-button>
                  <n-button type="error" strong secondary>
                    <icon-material-symbols-cleaning-bucket class="text-24px" />
                  </n-button>
                  <br />
                </n-space>
              </n-card>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const logValue: string = ref(
  '`1` 日志输出\n`2`\n`3`\n`4` 回流焊系统开发中···\n`5`\n`6`\n`7`\n`8`\n`9`\n`10`\n`11`\n`12`\n`13`\n`14`\n`15`\n`16`\n`17`'
);
</script>

<style scoped></style>
