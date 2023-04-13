<template>
  <div>
    <n-space :vertical="true" :size="16">
      <n-card :bordered="false" class="rounded-16px shadow-sm" title="设置">
        <n-input-group>
          <n-button type="info" strong secondary class="input-group-head">条码重读延时</n-button>
          <n-input v-model:value="delay" :style="{ width: '20%' }" :input-props="{ onclick: clickOn }"></n-input>
          <n-input-group-label>sec</n-input-group-label>
        </n-input-group>
      </n-card>
      <!-- 轨道配置主体 -->
      <n-grid x-gap="12" :cols="2">
        <n-gi v-for="(item, i) in trackConfigList" :key="item.id">
          <div class="light-green">
            <n-card class="shadow-sm rounded-16px" :title="'轨道' + (i + 1)">
              <n-space vertical>
                <n-input-group>
                  <n-button type="info" strong secondary class="input-group-head">链速</n-button>
                  <n-input
                    v-model:value="settingChainSpeed"
                    :style="{ width: '33%' }"
                    :input-props="{ onClick: () => clickSpeed(i) }"
                  />
                  <n-input-group-label>m/min</n-input-group-label>
                </n-input-group>
                <n-input-group>
                  <n-button type="info" strong secondary class="input-group-head">中间支撑高度</n-button>
                  <n-input
                    v-model:value="supHeight"
                    :style="{ width: '33%' }"
                    :input-props="{ onClick: () => clickSupHeight(i) }"
                  />
                  <n-input-group-label>m/min</n-input-group-label>
                </n-input-group>
                <n-input-group>
                  <n-button type="info" strong secondary class="input-group-head">中间支撑宽度</n-button>
                  <n-input
                    v-model:value="supWidth"
                    :style="{ width: '33%' }"
                    :input-props="{ onClick: () => clickSupWidth(i) }"
                  />
                  <n-input-group-label>m/min</n-input-group-label>
                </n-input-group>
                <n-input-group>
                  <n-button type="info" strong secondary class="input-group-head">动轨轨道宽度</n-button>
                  <n-input
                    v-model:value="trackWidth"
                    :style="{ width: '33%' }"
                    :input-props="{ onClick: () => clickSupTrack(i) }"
                  />
                  <n-input-group-label>m/min</n-input-group-label>
                </n-input-group>
                <n-divider />
                <n-input-group>
                  <n-button type="info" strong secondary class="input-group-head">PCB距离</n-button>
                  <n-input :style="{ width: '33%' }" v-model:value="pcbDistance" />
                  <n-input-group-label>cm</n-input-group-label>
                </n-input-group>
                <n-input-group>
                  <n-button type="info" strong secondary class="input-group-head">传感器上升边</n-button>
                  <n-input :style="{ width: '33%' }" v-model:value="risingEdgeDelay" />
                  <n-input-group-label>sec</n-input-group-label>
                </n-input-group>
                <n-input-group>
                  <n-button type="info" strong secondary class="input-group-head">传感器下降边</n-button>
                  <n-input :style="{ width: '33%' }" v-model:value="fallingEdgeDelay" />
                  <n-input-group-label>sec</n-input-group-label>
                </n-input-group>
              </n-space>
            </n-card>
          </div>
        </n-gi>
      </n-grid>
    </n-space>
    <n-modal
      v-model:show="coverShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerCode"
    >
      <n-input v-model:value="finalDelay" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalDelay"
        :keyboard-class="keyboardClass"
        :input="finalDelay"
        :max-length="maxlength"
        @onChange="onChange"
        @onKeyPress="onKeyPress"
      />
    </n-modal>
    <n-modal
      v-model:show="speedShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler1"
    >
      <n-input v-model:value="finalSettingChainSpeed" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalSettingChainSpeed"
        :keyboard-class="keyboardClass"
        :input="finalSettingChainSpeed"
        :max-length="maxlength"
        @onChange="onChange1"
      />
    </n-modal>
    <n-modal
      v-model:show="supHeightShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerHeight"
    >
      <n-input v-model:value="finalSupHeight" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalSupHeight"
        :keyboard-class="keyboardClass"
        :input="finalSupHeight"
        :max-length="maxlength"
        @onChange="onChangeHeight"
      />
    </n-modal>
    <n-modal
      v-model:show="supWidthShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerWidth"
    >
      <n-input v-model:value="finalSupWidth" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalSupWidth"
        :keyboard-class="keyboardClass"
        :input="finalSupWidth"
        :max-length="maxlength"
        @onChange="onChangeWidth"
      />
    </n-modal>
    <n-modal
      v-model:show="trackShowModal"
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
        :input="trackfinalTrackWidthWidth"
        :max-length="maxlength"
        @onChange="onChangeTrack"
      />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
import { keepGetting, saveJson } from '@/service/api/home';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
const coverShowModal = ref(false);
const speedShowModal = ref(false);
const supHeightShowModal = ref(false);
const supWidthShowModal = ref(false);
const trackShowModal = ref(false);
const settingChainSpeed = ref(0);
const finalSettingChainSpeed = ref('');
const supHeight = ref(0);
const finalSupHeight = ref('');
const supWidth = ref(0);
const finalSupWidth = ref('');
const trackWidth = ref(0);
const finalTrackWidth = ref('');
const maxlength = ref(999);
const delay = ref('0');
const finalDelay = ref('0');
const pcbDistance = ref(0);
const risingEdgeDelay = ref(0);
const fallingEdgeDelay = ref(0);
const tagName = 'profileTrack';
const uuid = ref('');
function onKeyPress(e) {}
function onChange(e) {
  finalDelay.value = e;
}
function onChange1(e) {
  finalSettingChainSpeed.value = e;
}
function onChangeHeight(e) {
  finalSupHeight.value = e;
}
function onChangeWidth(e) {
  finalSupWidth.value = e;
}
function onChangeTrack(e) {
  finalTrackWidth.value = e;
}
interface TrackConfig {
  id: number;
}
const trackConfigList: TrackConfig[] = reactive([{ id: 1 }]);

function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}
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
    'Application.HMI_HomePage.h_rChainSpeedPV': 'float',
    'Application.HMI_HomePage.h_rChainSpeedSV': 'float',
    'Application.HMI_TrackConfig.h_rCodeReadDelay': 'floats',
    'Application.HMI_TrackConfig.h_rPCB_SeparationDistance': 'float',
    'Application.HMI_TrackConfig.h_rInSensorRisingEdgeDelay': 'float',
    'Application.HMI_TrackConfig.h_rInSensorFallingEdgeDelay': 'float'
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
      'Application.HMI_HomePage.h_rChainSpeedPV': SpeedPVValue,
      'Application.HMI_HomePage.h_rChainSpeedSV': SpeedSVValue,
      'Application.HMI_TrackConfig.h_rCodeReadDelay': CodeReadDelayValue,
      'Application.HMI_TrackConfig.h_rPCB_SeparationDistance': pcbDistanceValue,
      'Application.HMI_TrackConfig.h_rInSensorRisingEdgeDelay': risingEdgeDelayValue,
      'Application.HMI_TrackConfig.h_rInSensorFallingEdgeDelay': fallingEdgeDelaValue
    } = data.result;
    settingChainSpeed.value = convertMmPerSecToMPerMin(SpeedSVValue);
    supHeight.value = settingSupHeightValue;
    supWidth.value = settingSupWidthValue;
    trackWidth.value = settingTrackValue;
    delay.value = CodeReadDelayValue;
    pcbDistance.value = pcbDistanceValue;
    risingEdgeDelay.value = risingEdgeDelayValue;
    fallingEdgeDelay.value = fallingEdgeDelaValue;
  }
}
function clickSpeed(value) {
  if (speedShowModal.value === true) {
    speedShowModal.value = false;
  } else {
    speedShowModal.value = true;
  }
}
function clickSupHeight(value) {
  if (supHeightShowModal.value === true) {
    supHeightShowModal.value = false;
  } else {
    supHeightShowModal.value = true;
  }
}
function clickSupWidth(value) {
  if (supWidthShowModal.value === true) {
    supWidthShowModal.value = false;
  } else {
    supWidthShowModal.value = true;
  }
}
function clickSupTrack(value) {
  if (trackShowModal.value === true) {
    trackShowModal.value = false;
  } else {
    trackShowModal.value = true;
  }
}
async function closedHandler1() {
  const Param = {
    result: finalSettingChainSpeed.value,
    dataType: 'float',
    name: 'Application.HMI_HomePage.h_rChainSpeedSV'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerCode() {
  const Param = {
    result: finalDelay.value,
    dataType: 'float',
    name: 'Application.HMI_TrackConfig.h_rCodeReadDelay[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerHeight() {
  const Param = {
    result: finalSupHeight.value,
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
    result: finalSupWidth.value,
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
function convertMmPerSecToMPerMin(mmPerSec) {
	const mPerSec = Number(mmPerSec) / 1000;
	const mPerMin = mPerSec * 60;
	return mPerMin.toFixed(2);
}
</script>

<style scoped>
.input-group-head {
  width: 120px;
}
</style>
