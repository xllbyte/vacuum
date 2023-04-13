<template>
  <div>
    <n-card title="轨道配置" class="shadow-sm rounded-16px parent-box">
      <n-card class="shadow-sm rounded-16px single-card">
        <div style="margin-top: 10px">
          <n-grid :item-responsive="true" :x-gap="16">
            <n-grid-item span="0:5 640:5 1024:5">
              <div class="flex-col-center">
                <img src="../img/speed.png" alt="speed" style="margin: auto" />
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div class="flex-col-center">
                  <span class="text-16px">链速</span>
                </div>
                <div>
                  <div style="display: flex; justify-content: center; align-items: center">
                    <n-button :style="{ width: '60%' }" strong secondary type="primary" @click="clickOn">
                      <template #icon> </template>
                      {{ settingSpeed }}
                    </n-button>
                    <span class="py-1px text-16px" style="margin-left: 5px">m/min</span>
                  </div>
                </div>
                <div>
                  <div style="display: flex; justify-content: center; align-items: center">
                    <n-button strong secondary type="tertiary" style="width: 60%; margin-top: 10px">{{
                      actualSpeed
                    }}</n-button>
                    <span class="py-1px text-16px" style="margin-left: 5px">m/min</span>
                  </div>
                </div>
              </div>
            </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div>
                <img src="../img/track1.png" alt="track1" style="margin: auto" />
              </div>
              <div>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center">
                  <n-button style="width: 60%; height: 30px" class="single-button">
                    <icon-material-symbols-arrow-upward class="text-30px" />
                  </n-button>
                  <icon-cib-discover
                    v-if="showWarningOne"
                    class="text-20px single-button"
                    style="color: red; margin-left: 2%"
                  />
                </div>
              </div>
              <div>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center">
                  <n-button style="width: 60%; height: 30px" class="single-button">
                    <icon-material-symbols-arrow-downward class="text-30px" />
                  </n-button>
                  <icon-cib-discover
                    v-if="showWarningOne"
                    class="text-20px single-button"
                    style="color: red; margin-left: 2%"
                  />
                </div>
              </div>

              <div class="flex-col-center">
                <span class="py-10px text-16px single-button">中间支撑高度</span>
              </div>
            </n-grid-item>
            <n-grid-item span="0:2 640:2 1024:2" class="flex-col-center">
              <icon-ic-outline-settings style="font-size: 40px; color: #decece" />
            </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div>
                <img src="../img/track2.png" alt="track2" style="margin: auto" />
              </div>
              <div>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center">
                  <n-button style="width: 60%; height: 30px" class="single-button">
                    <icon-material-symbols-arrow-upward class="text-30px" />
                  </n-button>
                  <icon-cib-discover
                    v-if="showWarningTwo"
                    class="text-20px single-button"
                    style="color: red; margin-left: 2%"
                  />
                </div>
              </div>
              <div>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center">
                  <n-button style="width: 60%; height: 30px" class="single-button">
                    <icon-material-symbols-arrow-downward class="text-30px" />
                  </n-button>
                  <icon-cib-discover
                    v-if="showWarningTwo"
                    class="text-20px single-button"
                    style="color: red; margin-left: 2%"
                  />
                </div>
              </div>

              <div class="flex-col-center">
                <span class="py-10px text-16px single-button">中间支撑宽度</span>
              </div>
            </n-grid-item>
            <n-grid-item span="0:2 640:2 1024:2" class="flex-col-center">
              <icon-ic-outline-settings style="font-size: 40px; color: #decece" />
            </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div>
                <img src="../img/track3.png" alt="track3" style="margin: auto" />
              </div>
              <div>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center">
                  <n-button style="width: 60%; height: 30px" class="single-button">
                    <icon-material-symbols-arrow-upward class="text-30px" />
                  </n-button>
                  <icon-cib-discover
                    v-if="showWarningThree"
                    class="text-20px single-button"
                    style="color: red; margin-left: 2%"
                  />
                </div>
              </div>
              <div>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center">
                  <n-button style="width: 60%; height: 30px" class="single-button">
                    <icon-material-symbols-arrow-downward class="text-30px" />
                  </n-button>
                  <icon-cib-discover
                    v-if="showWarningThree"
                    class="text-20px single-button"
                    style="color: red; margin-left: 2%"
                  />
                </div>
              </div>

              <div class="flex-col-center">
                <span class="py-10px text-16px single-button">轨道宽度</span>
              </div>
            </n-grid-item>
          </n-grid>
        </div>
        <div style="margin-top: 10px">
          <n-grid :item-responsive="true" :x-gap="16">
            <n-grid-item span="0:5 640:5 1024:5"> </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div style="display: flex; justify-content: center; align-items: center">
                <n-button
                  type="primary"
                  size="small"
                  style="margin-left: 10%; width: 50%"
                  strong
                  secondary
                  @click="clickOnOne"
                  >{{ settingSupportHeight }}</n-button
                >
                <span class="py-1px text-1px" style="margin-left: 3%">mm</span>
              </div>
            </n-grid-item>
            <n-grid-item span="0:2 640:2 1024:2"> </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div style="display: flex; justify-content: center; align-items: center">
                <n-button
                  type="primary"
                  size="small"
                  style="margin-left: 10%; width: 50%"
                  strong
                  secondary
                  @click="clickOnTwo"
                  >{{ settingSupportWidth }}</n-button
                >
                <span class="py-1px text-1px" style="margin-left: 3%">mm</span>
              </div>
            </n-grid-item>
            <n-grid-item span="0:2 640:2 1024:2"> </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div style="display: flex; justify-content: center; align-items: center">
                <n-button
                  type="primary"
                  size="small"
                  style="margin-left: 10%; width: 50%"
                  strong
                  secondary
                  @click="clickOnThree"
                  >{{ settingTrackWidth }}</n-button
                >
                <span class="py-1px text-1px" style="margin-left: 3%">mm</span>
              </div>
            </n-grid-item>
          </n-grid>
        </div>
        <div style="margin-top: 10px">
          <n-grid :item-responsive="true" :x-gap="16">
            <n-grid-item span="0:5 640:5 1024:5"> </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div style="display: flex; justify-content: center; align-items: center">
                <n-button type="tertiary" size="small" style="margin-left: 10%; width: 50%" strong secondary>{{
                  actualSupportHeight
                }}</n-button>
                <span class="py-1px text-1px" style="margin-left: 3%">mm</span>
              </div>
            </n-grid-item>
            <n-grid-item span="0:2 640:2 1024:2"> </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div style="display: flex; justify-content: center; align-items: center">
                <n-button type="tertiary" size="small" style="margin-left: 10%; width: 50%">{{
                  actualSupportWidth
                }}</n-button>
                <span class="py-1px text-1px" style="margin-left: 3%">mm</span>
              </div>
            </n-grid-item>
            <n-grid-item span="0:2 640:2 1024:2"> </n-grid-item>
            <n-grid-item span="0:5 640:5 1024:5">
              <div style="display: flex; justify-content: center; align-items: center">
                <n-button type="tertiary" size="small" style="margin-left: 10%; width: 50%">{{
                  actualTrackWidth
                }}</n-button>
                <span class="py-1px text-1px" style="margin-left: 3%">mm</span>
              </div>
            </n-grid-item>
          </n-grid>
        </div>
        <div style="margin-top: 30px">
          <n-grid :item-responsive="true" :x-gap="16">
            <n-grid-item span="0:8 640:8 1024:8"> </n-grid-item>
            <n-grid-item span="0:8 640:8 1024:8">
              <n-button v-show="showVisible" strong secondary type="error" style="width: 100%; height: 65px"
                >超时</n-button
              >
            </n-grid-item>
            <n-grid-item span="0:8 640:8 1024:8">
              <n-button v-show="showVisible" strong secondary type="error" style="width: 100%; height: 65px"
                >超时</n-button
              ></n-grid-item
            >
          </n-grid>
        </div>
      </n-card>
    </n-card>
    <n-modal
      v-model:show="coverShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerSpeed"
    >
      <n-input v-model:value="finalSpeed" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalSpeed"
        :keyboard-class="keyboardClass"
        :input="finalSpeed"
        :max-length="maxlength"
        @onChange="onChange"
        @onKeyPress="onKeyPress"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModalOne"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler"
    >
      <n-input v-model:value="finalSupportHeight" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalSupportHeight"
        :keyboard-class="keyboardClass"
        :input="finalSupportHeight"
        :max-length="maxlength"
        @onChange="onChangeOne"
        @onKeyPress="onKeyPressOne"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModalTwo"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerWidth"
    >
      <n-input v-model:value="finalSupportWidth" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalSupportWidth"
        :keyboard-class="keyboardClass"
        :input="finalSupportWidth"
        :max-length="maxlength"
        @onChange="onChangeTwo"
        @onKeyPress="onKeyPressTwo"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowModalThree"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerTrack"
    >
      <n-input v-model:value="finalTrackWidth" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalTrackWidth"
        :keyboard-class="keyboardClass"
        :input="finalTrackWidth"
        :max-length="maxlength"
        @onChange="onChangeThree"
        @onKeyPress="onKeyPressThree"
      />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { keys } from 'lodash-es';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
import { keepGetting, postJson, saveJson } from '@/service/api/home';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
const settingSpeed = ref('2.0');
const actualSpeed = ref('3.0');
const finalSpeed = ref('');
const settingSupportHeight = ref('-7.0');
const actualSupportHeight = ref('0.0');
const finalSupportHeight = ref('');
const settingSupportWidth = ref('51.0');
const actualSupportWidth = ref('0.0');
const finalSupportWidth = ref('');
const settingTrackWidth = ref('102.6');
const actualTrackWidth = ref('102.5');
const finalTrackWidth = ref('');
const coverShowModal = ref(false);
const showWarningOne = ref(false);
const showWarningTwo = ref(false);
const showWarningThree = ref(false);
const coverShowModalOne = ref(false);
const coverShowModalTwo = ref(false);
const coverShowModalThree = ref(false);
const showVisible = ref(false);
const maxlength = ref(999);
const tagName = 'trackNavigation';
const uuid = ref('');

onMounted(async () => {
  uuid.value = guid(tagName);
  createSocket(uuid.value);
  window.addEventListener('onmessageWS', handleWsMsg);
  const param = {
    'Application.HMI_TrackConfig.h_rMiddleSupportHightSV[0]': 'float',
    'Application.HMI_TrackConfig.h_rMiddleSupportHightPV[0]': 'float',
    'Application.HMI_TrackConfig.h_rMiddleSupportWidthSV[0]': 'float',
    'Application.HMI_TrackConfig.h_rMiddleSupportWidthPV[0]': 'float',
    'Application.HMI_TrackConfig.h_rTrackWidthSV[0]': 'float',
    'Application.HMI_TrackConfig.h_rTrackWidthPV[0]': 'float',
    'Application.HMI_HomePage.h_rChainSpeedPV[0]': 'float',
    'Application.HMI_HomePage.h_rChainSpeedSV[0]': 'float'
  };
  keepGetting(tagName, param);
});

onBeforeUnmount(() => {
  closeSocket();
});

// 处理服务端websocket发送过来的消息
function handleWsMsg(e: any) {
  const data = JSON.parse(e.detail.data.data);
  if (data) {
    const {
      'Application.HMI_TrackConfig.h_rMiddleSupportHightSV[0]': settingSupHeightValue,
      'Application.HMI_TrackConfig.h_rMiddleSupportHightPV[0]': actualSupHeightValue,
      'Application.HMI_TrackConfig.h_rMiddleSupportWidthSV[0]': settingSupWidthValue,
      'Application.HMI_TrackConfig.h_rMiddleSupportWidthPV[0]': actualSupWidthValue,
      'Application.HMI_TrackConfig.h_rTrackWidthSV[0]': settingTrackValue,
      'Application.HMI_TrackConfig.h_rTrackWidthPV[0]': actualTrackValue,
      'Application.HMI_HomePage.h_rChainSpeedPV[0]': SpeedPVValue,
      'Application.HMI_HomePage.h_rChainSpeedSV[0]': SpeedSVValue
    } = data.result;
    settingSupportHeight.value = settingSupHeightValue;
    actualSupportHeight.value = actualSupHeightValue;
    settingSupportWidth.value = settingSupWidthValue;
    actualSupportWidth.value = actualSupWidthValue;
    settingTrackWidth.value = settingTrackValue;
    actualTrackWidth.value = actualTrackValue;
    settingSpeed.value = convertMmPerSecToMPerMin(SpeedSVValue);
    actualSpeed.value = convertMmPerSecToMPerMin(SpeedPVValue);
  }
}

function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}

function clickOnOne() {
  if (coverShowModalOne.value === true) {
    coverShowModalOne.value = false;
  } else {
    coverShowModalOne.value = true;
  }
}

function clickOnTwo() {
  if (coverShowModalTwo.value === true) {
    coverShowModalTwo.value = false;
  } else {
    coverShowModalTwo.value = true;
  }
}

function clickOnThree() {
  if (coverShowModalThree.value === true) {
    coverShowModalThree.value = false;
  } else {
    coverShowModalThree.value = true;
  }
}

function onKeyPress(e) {}
function onChange(e) {
  finalSpeed.value = e;
  if (Number(settingSpeed.value) > 50) {
    showVisible.value = true;
  } else {
    showVisible.value = false;
  }
}

function onKeyPressOne(e) {}
function onChangeOne(e) {
  finalSupportHeight.value = e;
  if (Number(settingSupportHeight.value) > 50) {
    showWarningOne.value = true;
  } else {
    showWarningOne.value = false;
  }
}

function onKeyPressTwo(e) {}
function onChangeTwo(e) {
  finalSupportWidth.value = e;
  if (Number(settingSupportWidth.value) > 50) {
    showWarningTwo.value = true;
  } else {
    showWarningTwo.value = false;
  }
}

function onKeyPressThree(e) {}
function onChangeThree(e) {
  finalTrackWidth.value = e;
  if (Number(settingTrackWidth.value) > 50) {
    showWarningThree.value = true;
  } else {
    showWarningThree.value = false;
  }
}
async function closedHandler() {
  const Param = {
    result: finalSupportHeight.value,
    dataType: 'float',
    name: 'Application.HMI_TrackConfig.h_rMiddleSupportHightSV[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerWidth() {
  const Param = {
    result: finalSupportWidth.value,
    dataType: 'float',
    name: 'Application.HMI_TrackConfig.h_rMiddleSupportWidthSV[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerTrack() {
  const Param = {
    result: finalTrackWidth.value,
    dataType: 'float',
    name: 'Application.HMI_TrackConfig.h_rTrackWidthSV[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerSpeed() {
  const Param = {
    result: MmPerSecToMPerMin(finalSpeed.value),
    dataType: 'float',
    name: 'Application.HMI_HomePage.h_rChainSpeedSV[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
function convertMmPerSecToMPerMin(mmPerSec) {
  const mPerSec = Number(mmPerSec) / 1000;
  const mPerMin = mPerSec * 60;
  return mPerMin.toFixed(2);
}
function MmPerSecToMPerMin(mmPerSec) {
  const mPerSec = Number(mmPerSec) * 1000;
  const mPerMin = mPerSec / 60;
  return mPerMin.toFixed(2);
}
</script>

<style scoped>
.parent-box {
  width: 80%;
  height: 550px;
  margin: 0% auto;
}
.single-card {
  height: 450px;
}
.input-head {
  width: 90px;
}
.single-button {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
}
</style>
