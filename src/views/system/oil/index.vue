<template>
  <div>
    <n-card title="Drip注油器" :bordered="false" class="rounded-16px shadow-sm p-5px" style="margin-top: 10px">
      <n-grid :x-gap="12" :y-gap="8" :cols="2">
        <n-grid-item>
          <n-card title="加热区" :bordered="false" class="rounded-16px shadow-sm p-5px" style="margin-top: 10px">
            <div style="padding-top: 5px; padding-bottom: 3px">
              <div>
                <n-grid :x-gap="12" :y-gap="8" :cols="3">
                  <n-grid-item>
                    <div class="flex-col-center p-3px">
                      <span class="py-1px text-20px">重置时间</span>
                      <n-button
                        v-if="!heatVisiable"
                        color="#F3EEEEFF"
                        size="large"
                        style="margin-left: 5px"
                        @click="changeReset"
                      >
                        <template #icon>
                          <icon-ooui-success class="text-24px text-green" />
                        </template>
                      </n-button>
                      <n-button
                        v-if="heatVisiable"
                        color="green"
                        size="large"
                        style="margin-left: 5px"
                        @click="changeReset"
                      >
                        <template #icon>
                          <icon-ooui-success class="text-24px text-white" />
                        </template>
                      </n-button>
                    </div>
                  </n-grid-item>
                  <n-grid-item>
                    <div v-if="heatState" class="flex-col-center p-3px">
                      <icon-cib-discover class="text-30px text-green p-3px" />
                      <n-button type="success" size="large">等待</n-button>
                    </div>
                    <div v-if="!heatState" class="flex-col-center p-3px">
                      <icon-cib-discover class="text-30px text-gray-100 p-3px" />
                      <n-button type="tertiary" size="large">等待</n-button>
                    </div>
                  </n-grid-item>
                  <n-grid-item>
                    <div class="flex-col-center p-3px">
                      <span v-if="!heatMode" class="py-1px text-20px">自动注油</span>
                      <span v-if="heatMode" class="py-1px text-20px">手动注油</span>
                      <n-switch
                        v-model:value="heatMode"
                        size="large"
                        :round="false"
                        @update-value="changeValveSwitch(0)"
                      />
                    </div>
                  </n-grid-item>
                </n-grid>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm p-5px" style="margin-top: 10px">
            <div style="padding-top: 5px; padding-bottom: 3px">
              <div class="p-3px">
                <n-button type="tertiary">{{ heatDripOilTime }}</n-button>
                <span class="py-1px text-20px">下一次注油的间隔</span>
              </div>
            </div>
            <div style="padding-top: 5px; padding-bottom: 3px">
              <div class="p-3px">
                <n-button type="primary" @click="clickOn">{{ heatDripOilTimeCountDown }}</n-button>
                <span class="p-3px text-20px">h 注油倒计时参数</span>
              </div>
            </div>
            <div style="padding-top: 5px; padding-bottom: 3px">
              <div class="p-3px">
                <n-button type="primary" @click="clickHeatWarning">{{ heatWarning }}</n-button>
                <span class="p-3px text-20px">h 警报-注油器</span>
              </div>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-card>
    <n-card title="Drip注油器" :bordered="false" class="rounded-16px shadow-sm p-5px" style="margin-top: 10px">
      <n-grid :x-gap="12" :y-gap="8" :cols="2">
        <n-grid-item>
          <n-card title="冷却区" :bordered="false" class="rounded-16px shadow-sm p-5px" style="margin-top: 10px">
            <div style="padding-top: 5px; padding-bottom: 3px">
              <div>
                <n-grid :x-gap="12" :y-gap="8" :cols="3">
                  <n-grid-item>
                    <div class="flex-col-center p-3px">
                      <span class="py-1px text-20px">重置时间</span>
                      <n-button
                        v-if="!burialVisiable"
                        color="#F3EEEEFF"
                        size="large"
                        style="margin-left: 5px"
                        @click="changeResetBurial"
                      >
                        <template #icon>
                          <icon-ooui-success class="text-24px text-green" />
                        </template>
                      </n-button>
                      <n-button
                        v-if="burialVisiable"
                        color="green"
                        size="large"
                        style="margin-left: 5px"
                        @click="changeResetBurial"
                      >
                        <template #icon>
                          <icon-ooui-success class="text-24px text-white" />
                        </template>
                      </n-button>
                    </div>
                  </n-grid-item>
                  <n-grid-item>
                    <div v-if="burialState" class="flex-col-center p-3px">
                      <icon-cib-discover class="text-30px text-green p-3px" />
                      <n-button type="success" size="large">等待</n-button>
                    </div>
                    <div v-if="!burialState" class="flex-col-center p-3px">
                      <icon-cib-discover class="text-30px text-gray-100 p-3px" />
                      <n-button type="tertiary" size="large">等待</n-button>
                    </div>
                  </n-grid-item>
                  <n-grid-item>
                    <div class="flex-col-center p-3px">
                      <span v-if="!burialMode" class="py-1px text-20px">自动注油</span>
                      <span v-if="burialMode" class="py-1px text-20px">手动注油</span>
                      <n-switch
                        v-model:value="burialMode"
                        size="large"
                        :round="false"
                        @update-value="changeValveSwitch(1)"
                      />
                    </div>
                  </n-grid-item>
                </n-grid>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm p-5px" style="margin-top: 10px">
            <div style="padding-top: 5px; padding-bottom: 3px">
              <div class="p-3px">
                <n-button type="tertiary">{{ burialDripOilTime }}</n-button>
                <span class="py-1px text-20px">下一次注油的间隔</span>
              </div>
            </div>
            <div style="padding-top: 5px; padding-bottom: 3px">
              <div class="p-3px">
                <n-button type="primary" @click="clickTimeCountDown">{{ burialDripOilTimeCountDown }}</n-button>
                <span class="p-3px text-20px">h 注油倒计时参数</span>
              </div>
            </div>
            <div style="padding-top: 5px; padding-bottom: 3px">
              <div class="p-3px">
                <n-button type="primary" @click="clickBurialWarning">{{ burialWarning }}</n-button>
                <span class="p-3px text-20px">h 警报-注油器</span>
              </div>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-card>
    <n-modal
      v-model:show="coverShowModal"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandler"
    >
      <n-input v-model:value="finalHeatDripOilTimeCountDown" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalHeatDripOilTimeCountDown"
        :keyboard-class="keyboardClass"
        :input="finalHeatDripOilTimeCountDown"
        :max-length="maxlength"
        @onChange="onChange"
      />
    </n-modal>
    <n-modal
      v-model:show="coverShowTimeDown"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHandlerTimeDown"
    >
      <n-input v-model:value="finalBurialDripOilTimeCountDown" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalBurialDripOilTimeCountDown"
        :keyboard-class="keyboardClass"
        :input="finalBurialDripOilTimeCountDown"
        :max-length="maxlength"
        @onChange="onChangeTimeDown"
      />
    </n-modal>
    <n-modal
      v-model:show="coverHeatWarning"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedHeatWarning"
    >
      <n-input v-model:value="finalHeatWarning" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalHeatWarning"
        :keyboard-class="keyboardClass"
        :input="finalHeatWarning"
        :max-length="maxlength"
        @onChange="onChangeHeatTimeWarning"
      />
    </n-modal>
    <n-modal
      v-model:show="coverBurialWarning"
      class="rounded-10px"
      preset="card"
      title="请输入"
      style="width: 600px"
      @after-leave="closedBurialWarning"
    >
      <n-input v-model:value="finalBurialWarning" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="finalBurialWarning"
        :keyboard-class="keyboardClass"
        :input="finalBurialWarning"
        :max-length="maxlength"
        @onChange="onChangeBurialTimeWarning"
      />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { keepGetting, postJson, saveJson } from '@/service/api/home';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
const maxlength = ref(999);
const oilResetArray = ref([]);
const waitStateArray = ref([]);
const oilModeArray = ref([]);
const dripOilTimeArray = ref([]);
const dripOilTimeCountDownArray = ref([]);
const oilWarningTimeCountDownArray = ref([]);
const heatVisiable = ref(false);
const burialVisiable = ref(true);
const heatState = ref(true);
const burialState = ref(false);
const heatMode = ref(true);
const burialMode = ref(false);
const heatDripOilTime = ref('01:00:00');
const burialDripOilTime = ref('02:00:00');
const heatDripOilTimeCountDown = ref('3');
const finalHeatDripOilTimeCountDown = ref('');
const burialDripOilTimeCountDown = ref('4');
const finalBurialDripOilTimeCountDown = ref('');
const heatWarning = ref('7');
const finalHeatWarning = ref('');
const burialWarning = ref('6');
const finalBurialWarning = ref('');
const coverShowModal = ref(false);
const coverShowTimeDown = ref(false);
const coverHeatWarning = ref(false);
const coverBurialWarning = ref(false);
const tagName = 'systemOil';
const uuid = ref('');
onMounted(async () => {
  uuid.value = guid(tagName);
  createSocket(uuid.value);
  window.addEventListener('onmessageWS', handleWsMsg);
  const param = {
    'Application.HMI_VacuumConfig.h_xDripOilReset': 'booleans',
    'Application.HMI_VacuumConfig.h_xDripWaitState': 'booleans',
    'Application.HMI_VacuumConfig.h_xDripOilMode': 'booleans',
    'Application.HMI_VacuumConfig.h_rNextDripOilTime': 'floats',
    'Application.HMI_VacuumConfig.h_rNextDripOilTimeCountDown': 'floats',
    'Application.HMI_VacuumConfig.h_rDripOilWarningTimeCountDown': 'floats'
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
      'Application.HMI_VacuumConfig.h_xDripOilReset': oilResetValue,
      'Application.HMI_VacuumConfig.h_xDripWaitState': waitStateValue,
      'Application.HMI_VacuumConfig.h_xDripOilMode': oilModeValue,
      'Application.HMI_VacuumConfig.h_rNextDripOilTime': dripOilTimeValue,
      'Application.HMI_VacuumConfig.h_rNextDripOilTimeCountDown': oilTimeCountDownValue,
      'Application.HMI_VacuumConfig.h_rDripOilWarningTimeCountDown': oilWarningTimeCountDownValue
    } = data.result;
    oilResetArray.value = oilResetValue;
    waitStateArray.value = waitStateValue;
    oilModeArray.value = oilModeValue;
    dripOilTimeArray.value = dripOilTimeValue;
    dripOilTimeCountDownArray.value = oilTimeCountDownValue;
    oilWarningTimeCountDownArray.value = oilWarningTimeCountDownValue;
    heatVisiable.value = oilResetValue[0];
    burialVisiable.value = oilResetValue[1];
    heatState.value = waitStateValue[0];
    burialState.value = waitStateValue[1];
    heatMode.value = oilModeValue[0];
    burialMode.value = oilModeValue[1];
    heatDripOilTime.value = dripOilTimeValue[0];
    burialDripOilTime.value = dripOilTimeValue[1];
    heatDripOilTimeCountDown.value = oilTimeCountDownValue[0];
    burialDripOilTimeCountDown.value = oilTimeCountDownValue[1];
    heatWarning.value = oilWarningTimeCountDownValue[0];
    burialWarning.value = oilWarningTimeCountDownValue[1];
  }
}
async function changeValveSwitch(value: any) {
  if (value === 0) {
    const Param = {
      result: heatMode.value,
      dataType: 'boolean',
      name: 'Application.HMI_VacuumConfig.h_xDripOilMode[0]'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  } else {
    const Param = {
      result: burialMode.value,
      dataType: 'boolean',
      name: 'Application.HMI_VacuumConfig.h_xDripOilMode[1]'
    };
    const arr = [];
    arr.push(Param);
    const success = await saveJson(arr);
    console.log(success);
  }
}
function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}
function clickTimeCountDown() {
  if (coverShowTimeDown.value === true) {
    coverShowTimeDown.value = false;
  } else {
    coverShowTimeDown.value = true;
  }
}
function clickHeatWarning() {
  if (coverHeatWarning.value === true) {
    coverHeatWarning.value = false;
  } else {
    coverHeatWarning.value = true;
  }
}
function clickBurialWarning() {
  if (coverBurialWarning.value === true) {
    coverBurialWarning.value = false;
  } else {
    coverBurialWarning.value = true;
  }
}

function onChange(e) {
  finalHeatDripOilTimeCountDown.value = e;
}
function onChangeTimeDown(e) {
  finalBurialDripOilTimeCountDown.value = e;
}
function onChangeHeatTimeWarning(e) {
  finalHeatWarning.value = e;
}
function onChangeBurialTimeWarning(e) {
  finalBurialWarning.value = e;
}
async function closedHandler() {
  const Param = {
    result: finalHeatDripOilTimeCountDown.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rNextDripOilTimeCountDown[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHandlerTimeDown() {
  const Param = {
    result: finalBurialDripOilTimeCountDown.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rNextDripOilTimeCountDown[1]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedHeatWarning() {
  const Param = {
    result: finalHeatWarning.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rDripOilWarningTimeCountDown[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function closedBurialWarning() {
  const Param = {
    result: finalBurialWarning.value,
    dataType: 'float',
    name: 'Application.HMI_VacuumConfig.h_rDripOilWarningTimeCountDown[1]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function changeReset() {
  heatVisiable.value = !heatVisiable.value;
  const Param = {
    result: heatVisiable.value,
    dataType: 'boolean',
    name: 'Application.HMI_VacuumConfig.h_xDripOilReset[0]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
async function changeResetBurial() {
  burialVisiable.value = !burialVisiable.value;
  const Param = {
    result: burialVisiable.value,
    dataType: 'boolean',
    name: 'Application.HMI_VacuumConfig.h_xDripOilReset[1]'
  };
  const arr = [];
  arr.push(Param);
  const success = await saveJson(arr);
  console.log(success);
}
</script>

<style scoped></style>
