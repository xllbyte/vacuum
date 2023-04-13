<template>
  <div>
    <n-card title="IP配置" class="shadow-sm rounded-16px parent-box">
      <n-grid :item-responsive="true" :x-gap="16" :y-gap="16">
        <n-grid-item span="0:8 640:8 1024:8">
          <n-card>
            <div class="flex-col-center w-full">
              <h2 type="info">氮气启用状态</h2>
              <h1 type="info">FTP导入/导出</h1>
              <n-divider />
            </div>
            <div>
              <p>服务器IP地址</p>
            </div>
            <div>
              <n-grid :x-gap="12" :y-gap="8" :cols="4">
                <n-grid-item>
                  <n-button type="primary">192</n-button>
                </n-grid-item>
                <n-grid-item>
                  <n-button type="primary">168</n-button>
                </n-grid-item>
                <n-grid-item>
                  <n-button type="primary">10</n-button>
                </n-grid-item>
                <n-grid-item>
                  <n-button type="primary">163</n-button>
                </n-grid-item>
              </n-grid>
            </div>
            <p>用户名</p>
            <n-button type="primary" style="width: 80%">SMT</n-button>
            <p>密码</p>
            <n-button type="primary" style="width: 80%">WERTHEIM</n-button>
          </n-card>
        </n-grid-item>
        <n-grid-item span="0:16 640:16 1024:16">
          <n-card class="shadow-sm rounded-16px single-card">
            <n-grid :x-gap="12" :y-gap="8" :cols="2">
              <n-grid-item>
                <div class="flex-col-center w-full">
                  <h2 type="info">主机CIPC地址</h2>
                  <n-divider />
                </div>
                <div>
                  <p>IP</p>
                </div>
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="4">
                    <n-grid-item>
                      <n-button type="primary">192</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">168</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">0</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">1</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
                <div>
                  <p>子网</p>
                </div>
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="4">
                    <n-grid-item>
                      <n-button type="primary">255</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">255</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">255</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
                <div>
                  <p>网关</p>
                </div>
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="4">
                    <n-grid-item>
                      <n-button type="primary">0</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">0</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">0</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </n-grid-item>
              <n-grid-item>
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="3">
                    <n-grid-item>
                      <n-button style="width: 60%">
                        <icon-ant-design-folder-open-filled class="text-30px" />
                      </n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button style="width: 60%">
                        <icon-ic-round-save class="text-30px" />
                      </n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <icon-ic-sharp-disabled-by-default class="text-30px" />
                    </n-grid-item>
                  </n-grid>
                </div>
                <div style="margin-top: 10%; margin-left: 10%">
                  <n-button type="error" style="height: 150px; width: 80%">警报 重置CIPC 新IP必须重启</n-button>
                </div>
              </n-grid-item>
            </n-grid>
          </n-card>
        </n-grid-item>
      </n-grid>
      <div>
        <n-card class="shadow-sm rounded-16px" style="margin-top: 10px">
          <div>
            <n-grid :x-gap="12" :y-gap="8" :cols="3">
              <n-grid-item>
                <n-button type="error">Ping</n-button>
                <div>
                  <p>IP</p>
                </div>
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="4">
                    <n-grid-item>
                      <n-button type="primary">255</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">255</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">255</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </n-grid-item>
              <n-grid-item> </n-grid-item>
              <n-grid-item> </n-grid-item>
            </n-grid>
          </div>
        </n-card>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.parent-box {
  width: 80%;
  height: 500px;
  margin: 1% auto;
}
.single-card {
  height: 300px;
}
.input-head {
  width: 90px;
}
</style>
