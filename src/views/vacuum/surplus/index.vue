<template>
  <div>
    <div>
      <n-grid :x-gap="12" :y-gap="8" :cols="3">
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-500px">
              <div class="flex-col-center p-3px">
                <p class="py-8px text-26px">真空</p>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-button color="#9F9D8DFF" size="large" style="margin-left: 40%" @click="addNum">
                    <template #icon>
                      <icon-oi-arrow-thick-top class="text-24px text-red" />
                    </template>
                  </n-button>
                  <icon-cib-discover
                    v-if="upLampVisible"
                    class="text-20px text-red"
                    style="margin-left: 6%; margin-top: -3%"
                  />
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-button color="#9F9D8DFF" size="large" style="margin-left: 40%" @click="subtractNum">
                    <template #icon>
                      <icon-oi-arrow-thick-bottom class="text-24px text-red" />
                    </template>
                  </n-button>
                  <icon-cib-discover
                    v-if="downLampVisible"
                    class="text-20px text-red"
                    style="margin-left: 6%; margin-top: -3%"
                  />
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-button type="primary" size="large" style="margin-left: 40%" @click="clickOn">{{
                    settingHeight
                  }}</n-button>
                  <span class="py-1px text-1px" style="margin-left: 3%">mm</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-button type="tertiary" size="large" style="margin-left: 40%">{{ currentHeight }}</n-button>
                  <span class="py-1px text-1px" style="margin-left: 3%">mm</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-button type="error" size="large" style="margin-left: 30%">Can超时</n-button>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span style="margin-left: 30%">闸门复位延时时间</span>
                  <n-button type="primary" size="medium" style="margin-left: 4%" @click="clickOnDelay">{{
                    resetDelay
                  }}</n-button>
                  <span style="margin-left: 2%">mm</span>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-500px">
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">在塞子处释放产品</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">0</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">轨道2</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">在塞子处释放产品</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">0</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">轨道1</span>
                </div>
              </div>
              <div class="flex-col-center p-0px">
                <span type="primary">Stopper</span>
              </div>
              <div class="flex-col-center p-0px">
                <div
                  style="
                    width: 80%;
                    height: 50px;
                    background-color: #afa6a6ff;
                    margin-top: 10px;
                    border-radius: 8px 8px 1px 1px;
                    text-align: center;
                  "
                >
                  OFF
                </div>
                <br />
                <div
                  style="
                    width: 80%;
                    height: 100px;
                    background-color: #afa6a6ff;
                    border-radius: 1px 1px 8px 8px;
                    text-align: center;
                  "
                >
                  OFF
                </div>
              </div>
              <div class="flex-col-center p-0px">
                <span type="primary">在塞子处释放产品</span>
              </div>
              <div class="flex-col-center p-3px">
                <n-button color="#9F9D8DFF" size="large">
                  <template #icon>
                    <icon-clarity-success-standard-line class="text-24px text-green" />
                  </template>
                </n-button>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-switch v-model:value="active" size="large" />
                  <span class="py-1px text-10px" style="margin-left: 5px">带手动进料的自动释放制动器</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw1Value2" size="medium" :options="options1" />
                    </n-grid-item>
                    <n-grid-item>
                      <span class="py-3px text-10px" style="margin-left: 5px">处理平行支柱</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full h-500px">
              <div class="flex-col-center p-3px">
                <div
                  style="
                    width: 80%;
                    height: 30px;
                    background-color: #afa6a6ff;
                    border-radius: 8px 8px 8px 8px;
                    text-align: center;
                  "
                >
                  关
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">在入口传感器处测量的长度</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">0</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                </div>
              </div>
              <div class="flex-col-center p-3px">
                <div
                  style="
                    width: 80%;
                    height: 30px;
                    background-color: #afa6a6ff;
                    border-radius: 8px 8px 8px 8px;
                    text-align: center;
                  "
                >
                  关
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <span class="py-26px text-12px">在入口传感器处测量的长度</span>
                  <n-button type="primary" size="small" style="margin-left: 20px">0</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <div class="flex-col-center">
                        <span class="text-16px">真空</span>
                        <n-button type="tertiary" size="large">1</n-button>
                      </div>
                    </n-grid-item>
                    <n-grid-item>
                      <div class="flex-col-center">
                        <span class="text-16px">Vac忙</span>
                        <n-button type="tertiary" size="large">1</n-button>
                      </div>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div style="text-align: right">
                  <span class="py-26px text-12px">Vac模式的最大产品长度</span>
                  <n-button type="tertiary" size="large" style="margin-left: 20px">320</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div style="text-align: right">
                  <span class="py-26px text-12px">产品长度</span>
                  <n-button type="tertiary" size="large" style="margin-left: 20px">154</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div style="text-align: right">
                  <span class="py-26px text-12px">允许的公差</span>
                  <n-button type="primary" size="large" style="margin-left: 20px">20</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div style="text-align: right">
                  <span class="py-26px text-12px">止动器允许的到达延迟</span>
                  <n-button type="primary" size="large" style="margin-left: 20px">20</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div style="text-align: right">
                  <span class="py-26px text-12px">PCB distance</span>
                  <n-button type="tertiary" size="large" style="margin-left: 20px">266</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">mm</span>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div style="text-align: right">
                  <span class="py-26px text-12px">止动器允许的到达延迟</span>
                  <n-button type="tertiary" size="large" style="margin-left: 20px">0</n-button>
                  <span class="py-26px text-12px" style="margin-left: 10px">sec</span>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
    <n-modal
      v-model:show="coverShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler"
    >
      <n-input v-model:value="settingHeight" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="settingHeight"
        :keyboard-class="keyboardClass"
        :input="settingHeight"
        :max-length="maxlength"
        @onChange="onChange"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowDelay"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerDealy"
    >
      <n-input v-model:value="resetDelay" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="resetDelay"
        :keyboard-class="keyboardClass"
        :input="resetDelay"
        :max-length="maxlength"
        @onChange="onChangeDelay"
      />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { postJson, saveJson } from '@/service/api/home';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
const active = ref(true);
const maxlength = ref(999);
const coverShowModal = ref(false);
const coverShowDelay = ref(false);
const upLampVisible = ref(false);
const downLampVisible = ref(true);
const settingHeight = ref(65.0);
const currentHeight = ref(63.0);
const resetDelay = ref(8.0);
const cpw1Value2 = ref('OFF');
const options1 = [
  {
    label: 'OFF',
    value: 'OFF'
  },
  {
    label: 'Bottom',
    value: 'Bottom'
  },
  {
    label: 'Top',
    value: 'Top'
  }
];
onMounted(async () => {
  const param = {
    'Application.HMI_VacuumConfig.h_xVacuumBodyUpButton': 'boolean',
    'Application.HMI_VacuumConfig.h_xVacuumBodyDownButton': 'boolean',
    'Application.HMI_VacuumConfig.h_xVacuumBodyUpLamp': 'boolean',
    'Application.HMI_VacuumConfig.h_xVacuumBodyDownLamp': 'boolean',
    'Application.HMI_VacuumConfig.h_rVaccumBodyHigthPV': 'float',
    'Application.HMI_VacuumConfig.h_rVaccumBodyHigthSV': 'float',
    'Application.HMI_VacuumConfig.h_rInDoorResetDelay': 'float'
  };
  const { data } = await postJson(param);
  if (data) {
    const {
      'Application.HMI_VacuumConfig.h_xVacuumBodyUpButton': upValue,
      'Application.HMI_VacuumConfig.h_xVacuumBodyDownButton': downValue,
      'Application.HMI_VacuumConfig.h_xVacuumBodyUpLamp': upLampValue,
      'Application.HMI_VacuumConfig.h_xVacuumBodyDownLamp': downLampValue,
      'Application.HMI_VacuumConfig.h_rVaccumBodyHigthPV': actualValue,
      'Application.HMI_VacuumConfig.h_rVaccumBodyHigthSV': settingValue,
      'Application.HMI_VacuumConfig.h_rInDoorResetDelay': resetDelayValue
    } = data;
    settingHeight.value = settingValue;
    currentHeight.value = actualValue;
    resetDelay.value = resetDelayValue;
    upLampVisible.value = upLampValue;
    downLampVisible.value = downLampValue;
    console.log('真空上盖上升按钮', upValue);
    console.log('真空上盖下降按钮', downValue);
    console.log('真空上盖在上位状态灯', upLampValue);
    console.log('真空上盖在下位状态灯', downLampValue);
    console.log('真空上盖高度当前值', settingValue);
    console.log('真空上盖高度设定值', actualValue);
    console.log('闸门复位延时', resetDelayValue);
  }
});
function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}
function clickOnDelay() {
  if (coverShowDelay.value === true) {
    coverShowDelay.value = false;
  } else {
    coverShowDelay.value = true;
  }
}
function onChange(e) {
  settingHeight.value = e;
}
function onChangeDelay(e) {
  resetDelay.value = e;
}
async function closedHandler() {
  const Param = {
    result: settingHeight.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVaccumBodyHigthSV'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerDealy() {
  const Param = {
    result: resetDelay.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rInDoorResetDelay'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function addNum() {
  settingHeight.value += 1;
  const Param = {
    result: settingHeight.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVaccumBodyHigthSV'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function subtractNum() {
  settingHeight.value -= 1;
  const Param = {
    result: settingHeight.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rVaccumBodyHigthSV'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
</script>

<style scoped></style>
