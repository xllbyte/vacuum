<template>
  <div>
    <n-grid x-gap="12" y-gap="12" :cols="4">
      <n-gi span="4">
        <n-card class="rounded-16px">
          <n-grid x-gap="12" :cols="5">
            <n-gi>
              <n-card class="shadow-sm rounded-16px flex-y-center card-head-height">
                <n-space vertical>
                  <div>
                    <n-tag type="info" size="large"> PCB计数器 </n-tag>
                    <n-button type="info"> {{ PCBRegister }} </n-button>
                  </div>
                  <n-button style="width: 45px; margin-left: 30%" @click="resetPCB">
                    <icon-material-symbols-cleaning-services class="text-24px" />
                  </n-button>
                </n-space>
              </n-card>
            </n-gi>
            <n-gi>
              <n-card class="shadow-sm rounded-16px flex-y-center card-head-height">
                <n-space vertical>
                  <div>
                    <n-tag type="info" size="large">日产量</n-tag>
                    <n-button type="info">{{ dayProduct }} </n-button>
                  </div>
                  <n-button style="width: 45px; margin-left: 30%" @click="resetDayProduct">
                    <icon-material-symbols-cleaning-services class="text-24px" />
                  </n-button>
                </n-space>
              </n-card>
            </n-gi>
            <n-gi>
              <n-card class="shadow-sm rounded-16px flex-y-center card-head-height">
                <n-space vertical>
                  <div>
                    <n-tag type="info" size="large">日平均</n-tag>
                    <n-button type="info"> {{ dayAverage }} </n-button>
                  </div>
                  <n-button style="width: 45px; margin-left: 30%" @click="resetDayAverage">
                    <icon-material-symbols-cleaning-services class="text-24px" />
                  </n-button>
                </n-space>
              </n-card>
            </n-gi>
            <n-gi>
              <n-card class="shadow-sm rounded-16px flex-y-center card-head-height">
                <n-space vertical>
                  <div>
                    <n-tag type="info" size="large">运转日数</n-tag>
                    <n-button type="info"> {{ dayCount }} </n-button>
                  </div>
                </n-space>
              </n-card>
            </n-gi>
            <n-gi>
              <n-card class="shadow-sm rounded-16px flex-y-center card-head-height">
                <n-space vertical>
                  <div>
                    <n-tag type="info" size="large">总产量</n-tag>
                    <n-button type="info"> {{ sumProduct }} </n-button>
                  </div>
                </n-space>
              </n-card>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <!-- body -->
      <n-gi span="2">
        <n-card class="shadow-sm rounded-16px">
          <n-card class="shadow-sm rounded-16px flex-y-center">
            <n-space vertical>
              <div>
                <n-tag type="info" size="large">加热区</n-tag>
                <n-button type="info"> {{ heatingZone }} </n-button>
              </div>
              <n-button style="width: 45px; margin-left: 30%" @click="resetHeatingZone">
                <icon-material-symbols-cleaning-services class="text-24px" />
              </n-button>
            </n-space>
          </n-card>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card class="shadow-sm rounded-16px">
          <n-card class="shadow-sm rounded-16px flex-y-center">
            <n-space vertical>
              <div>
                <n-tag type="info" size="large">真空区</n-tag>
                <n-button type="info"> {{ vacuumZone }} </n-button>
              </div>
              <n-button style="width: 45px; margin-left: 30%" @click="resetVacuumZone">
                <icon-material-symbols-cleaning-services class="text-24px" />
              </n-button>
            </n-space>
          </n-card>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card class="shadow-sm rounded-16px">
          <n-card class="shadow-sm rounded-16px flex-y-center">
            <n-space vertical>
              <div>
                <n-tag type="info" size="large">冷却区</n-tag>
                <n-button type="info"> {{ coolingZone }} </n-button>
              </div>
              <n-button style="width: 45px; margin-left: 30%" @click="resetCoolingZone">
                <icon-material-symbols-cleaning-services class="text-24px" />
              </n-button>
            </n-space>
          </n-card>
        </n-card>
      </n-gi>
      <!-- tail -->
      <n-gi>
        <n-card class="shadow-sm rounded-16px card-tail-height">
          <n-grid x-gap="12" :cols="2">
            <n-gi>
              <n-tag :bordered="false" type="info" style="margin-top: 10%">通过监视器</n-tag>
              <n-divider />
              <n-switch size="large" style="margin-left: 20%" />
            </n-gi>
            <n-gi>
              <n-space vertical style="margin-top: 15%">
                <n-button secondary strong style="width: 100%"> 重新开始 </n-button>
                <n-button secondary strong style="width: 100%">
                  <icon-material-symbols-cleaning-services class="text-24px" />重置
                </n-button>
              </n-space>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <!-- tail-2 -->
      <n-gi>
        <n-card class="shadow-sm rounded-16px card-tail-height">
          <n-grid x-gap="12" y-gap="8" :cols="2">
            <n-gi>
              <n-button style="width: 45px; margin-left: 30%">
                <icon-material-symbols-cleaning-services class="text-24px" />
              </n-button>
            </n-gi>
            <n-gi></n-gi>
            <n-gi>
              <n-input placeholder="00:00:00">
                <template #prefix> 预计到 </template>
              </n-input>
            </n-gi>
            <n-gi>
              <n-input placeholder="00:00:00">
                <template #prefix> 时间 </template>
              </n-input>
            </n-gi>
            <n-gi>
              <n-input placeholder="00:00:00">
                <template #prefix> 到达 </template>
              </n-input>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <!-- tail-3 -->
      <n-gi>
        <n-card class="shadow-sm rounded-16px card-tail-height">
          <br /><br />
          <n-grid x-gap="12" y-gap="8" :cols="2">
            <n-gi>
              <n-button style="width: 45px; margin-left: 30%">
                <icon-material-symbols-cleaning-services class="text-24px" />
              </n-button>
            </n-gi>
            <n-gi> </n-gi>
            <n-gi>
              <n-input placeholder="00:00:00">
                <template #prefix> 时间 </template>
              </n-input>
            </n-gi>
            <n-gi>
              <n-input placeholder="00:00:00">
                <template #prefix> 到达 </template>
              </n-input>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <!-- tail-4 -->
      <n-gi>
        <n-card class="shadow-sm rounded-16px card-tail-height">
          <n-grid x-gap="12" y-gap="8" :cols="2">
            <n-gi>
              <n-button style="width: 45px; margin-left: 30%">
                <icon-material-symbols-cleaning-services class="text-24px" />
              </n-button>
            </n-gi>
            <n-gi></n-gi>
            <n-gi>
              <n-input placeholder="00:00:00">
                <template #prefix> 预计到 </template>
              </n-input>
            </n-gi>
            <n-gi>
              <n-input placeholder="00:00:00">
                <template #prefix> 时间 </template>
              </n-input>
            </n-gi>
            <n-gi>
              <n-input placeholder="00:00:00">
                <template #prefix> 到达 </template>
              </n-input>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
    </n-grid>
    <n-modal v-model:show="coverShowModal" class="rounded-10px" preset="card" title="请输入" style="width: 600px">
      <n-input v-model:value="PCBRegister" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="PCBRegister"
        :keyboard-class="keyboardClass"
        :input="PCBRegister"
        :max-length="maxlength"
        @onChange="onChange"
        @onKeyPress="onKeyPress"
      />
    </n-modal>
    <n-modal v-model:show="coverShowModal1" class="rounded-10px" preset="card" title="请输入" style="width: 600px">
      <n-input v-model:value="dayProduct" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="dayProduct"
        :keyboard-class="keyboardClass"
        :input="dayProduct"
        :max-length="maxlength"
        @onChange="onChange1"
        @onKeyPress="onKeyPress1"
      />
    </n-modal>
    <n-modal v-model:show="coverShowModal2" class="rounded-10px" preset="card" title="请输入" style="width: 600px">
      <n-input v-model:value="dayAverage" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="dayAverage"
        :keyboard-class="keyboardClass"
        :input="dayAverage"
        :max-length="maxlength"
        @onChange="onChange2"
        @onKeyPress="onKeyPress2"
      />
    </n-modal>
    <n-modal v-model:show="coverShowModal3" class="rounded-10px" preset="card" title="请输入" style="width: 600px">
      <n-input v-model:value="dayCount" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="dayCount"
        :keyboard-class="keyboardClass"
        :input="dayCount"
        :max-length="maxlength"
        @onChange="onChange3"
        @onKeyPress="onKeyPress3"
      />
    </n-modal>
    <n-modal v-model:show="coverShowModal4" class="rounded-10px" preset="card" title="请输入" style="width: 600px">
      <n-input v-model:value="sumProduct" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="sumProduct"
        :keyboard-class="keyboardClass"
        :input="sumProduct"
        :max-length="maxlength"
        @onChange="onChange4"
        @onKeyPress="onKeyPress4"
      />
    </n-modal>
    <n-modal v-model:show="coverShowModal5" class="rounded-10px" preset="card" title="请输入" style="width: 600px">
      <n-input v-model:value="heatingZone" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="heatingZone"
        :keyboard-class="keyboardClass"
        :input="heatingZone"
        :max-length="maxlength"
        @onChange="onChange5"
        @onKeyPress="onKeyPress5"
      />
    </n-modal>
    <n-modal v-model:show="coverShowModal6" class="rounded-10px" preset="card" title="请输入" style="width: 600px">
      <n-input v-model:value="vacuumZone" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="vacuumZone"
        :keyboard-class="keyboardClass"
        :input="vacuumZone"
        :max-length="maxlength"
        @onChange="onChange6"
        @onKeyPress="onKeyPress6"
      />
    </n-modal>
    <n-modal v-model:show="coverShowModal7" class="rounded-10px" preset="card" title="请输入" style="width: 600px">
      <n-input v-model:value="coolingZone" type="textarea" placeholder="请输入" />
      <key-board-component
        :ref="coolingZone"
        :keyboard-class="keyboardClass"
        :input="coolingZone"
        :max-length="maxlength"
        @onChange="onChange7"
        @onKeyPress="onKeyPress7"
      />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import KeyBoardComponent from '@/views/profile/nitrogen/components/KeyBoardComponent.vue';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
import { keepGetting, saveJson } from '@/service/api/home';
const coverShowModal = ref(false);
const coverShowModal1 = ref(false);
const coverShowModal2 = ref(false);
const coverShowModal3 = ref(false);
const coverShowModal4 = ref(false);
const coverShowModal5 = ref(false);
const coverShowModal6 = ref(false);
const coverShowModal7 = ref(false);
const PCBRegister = ref('0');
const dayProduct = ref('0');
const dayAverage = ref('0');
const dayCount = ref('0');
const sumProduct = ref('0');
const heatingZone = ref('0');
const vacuumZone = ref('0');
const coolingZone = ref('0');
const maxlength = ref(999);
const tagName = 'countNavigation';
const uuid = ref('');
onMounted(async () => {
  uuid.value = guid(tagName);
  createSocket(uuid.value);
  window.addEventListener('onmessageWS', handleWsMsg);
  const param = {
    'Application.HMI_CountConfig.h_diPCB_Counter': 'int',
    'Application.HMI_CountConfig.h_diDaily_Counter': 'int',
    'Application.HMI_CountConfig.h_diDailyAverangCounter': 'int',
    'Application.HMI_CountConfig.h_diRunningDays': 'int',
    'Application.HMI_CountConfig.h_diTotalCounter': 'int',
    'Application.HMI_CountConfig.h_diHeaterZoneCounter': 'int',
    'Application.HMI_CountConfig.h_diVacuumZoneCounter': 'int',
    'Application.HMI_CountConfig.h_diCoolZoneCounter': 'int',
    'Application.HMI_CountConfig.h_xPCB_Counter_ClearButton': 'boolean',
    'Application.HMI_CountConfig.h_xDaily_Counter_ClearButton': 'boolean',
    'Application.HMI_CountConfig.h_xDailyAverangCounter_ClearButton': 'boolean',
    'Application.HMI_CountConfig.h_xRunningDays_ClearButton': 'boolean',
    'Application.HMI_CountConfig.h_xTotalCounter_ClearButton': 'boolean',
    'Application.HMI_CountConfig.h_xHeaterZoneCounter_ClearButton': 'boolean',
    'Application.HMI_CountConfig.h_xVacuumZoneCounter_ClearButton': 'boolean',
    'Application.HMI_CountConfig.h_xCoolZoneCounter_ClearButton': 'boolean'
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
      'Application.HMI_CountConfig.h_diPCB_Counter': pCBCounterValue,
      'Application.HMI_CountConfig.h_diDaily_Counter': dailyCounterValue,
      'Application.HMI_CountConfig.h_diDailyAverangCounter': dailyAverangCounterValue,
      'Application.HMI_CountConfig.h_diRunningDays': runningDaysValue,
      'Application.HMI_CountConfig.h_diTotalCounter': totalCounterValue,
      'Application.HMI_CountConfig.h_diHeaterZoneCounter': heaterZoneCounterValue,
      'Application.HMI_CountConfig.h_diVacuumZoneCounter': vacuumZoneCounterValue,
      'Application.HMI_CountConfig.h_diCoolZoneCounter': coolZoneCounterValue,
      'Application.HMI_CountConfig.h_xPCB_Counter_ClearButton': pCBCounterClearButtonValue,
      'Application.HMI_CountConfig.h_xDaily_Counter_ClearButton': dailyCounterClearButtonValue,
      'Application.HMI_CountConfig.h_xDailyAverangCounter_ClearButton': dailyAverangCounterClearButtonValue,
      'Application.HMI_CountConfig.h_xRunningDays_ClearButton': runningDaysClearButtonValue,
      'Application.HMI_CountConfig.h_xTotalCounter_ClearButton': totalCounterClearButtonValue,
      'Application.HMI_CountConfig.h_xHeaterZoneCounter_ClearButton': heaterZoneCounterClearButtonValue,
      'Application.HMI_CountConfig.h_xVacuumZoneCounter_ClearButton': vacuumZoneCounterClearButtonValue,
      'Application.HMI_CountConfig.h_xCoolZoneCounter_ClearButton': coolZoneCounterClearButtonValue
    } = data.result;
    PCBRegister.value = pCBCounterValue;
    dayProduct.value = dailyCounterValue;
    dayAverage.value = dailyAverangCounterValue;
    dayCount.value = runningDaysValue;
    sumProduct.value = totalCounterValue;
    heatingZone.value = heaterZoneCounterValue;
    vacuumZone.value = vacuumZoneCounterValue;
    coolingZone.value = coolZoneCounterValue;
  }
}
function clickOn() {
  if (coverShowModal.value === true) {
    coverShowModal.value = false;
  } else {
    coverShowModal.value = true;
  }
}
function clickOn1() {
  if (coverShowModal1.value === true) {
    coverShowModal1.value = false;
  } else {
    coverShowModal1.value = true;
  }
}
function clickOn2() {
  if (coverShowModal2.value === true) {
    coverShowModal2.value = false;
  } else {
    coverShowModal2.value = true;
  }
}
function clickOn3() {
  if (coverShowModal3.value === true) {
    coverShowModal3.value = false;
  } else {
    coverShowModal3.value = true;
  }
}
function clickOn4() {
  if (coverShowModal4.value === true) {
    coverShowModal4.value = false;
  } else {
    coverShowModal4.value = true;
  }
}
function clickOn5() {
  if (coverShowModal5.value === true) {
    coverShowModal5.value = false;
  } else {
    coverShowModal5.value = true;
  }
}
function clickOn6() {
  if (coverShowModal6.value === true) {
    coverShowModal6.value = false;
  } else {
    coverShowModal6.value = true;
  }
}
function clickOn7() {
  if (coverShowModal7.value === true) {
    coverShowModal7.value = false;
  } else {
    coverShowModal7.value = true;
  }
}
function onKeyPress(e) {}
function onChange(e) {
  PCBRegister.value = e;
}
function onKeyPress1(e) {}
function onChange1(e) {
  dayProduct.value = e;
}
function onKeyPress2(e) {}
function onChange2(e) {
  dayAverage.value = e;
}
function onKeyPress3(e) {}
function onChange3(e) {
  dayCount.value = e;
}
function onKeyPress4(e) {}
function onChange4(e) {
  sumProduct.value = e;
}
function onKeyPress5(e) {}
function onChange5(e) {
  heatingZone.value = e;
}
function onKeyPress6(e) {}
function onChange6(e) {
  vacuumZone.value = e;
}
function onKeyPress7(e) {}
function onChange7(e) {
  coolingZone.value = e;
}

function resetPCB() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.HMI_CountConfig.h_xPCB_Counter_ClearButton'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
}
function resetDayProduct() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.HMI_CountConfig.h_xDaily_Counter_ClearButton'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
}
function resetDayAverage() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.HMI_CountConfig.h_xDailyAverangCounter_ClearButton'
  };
  const Param1 = {
    result: true,
    dataType: 'boolean',
    name: 'Application.HMI_CountConfig.h_xRunningDays_ClearButton'
  };
  const Param2 = {
    result: true,
    dataType: 'boolean',
    name: 'Application.HMI_CountConfig.h_xTotalCounter_ClearButton'
  };
  const arr = [];
  arr.push(Param);
  arr.push(Param1);
  arr.push(Param2);
  saveJson(arr);
}
function resetHeatingZone() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.HMI_CountConfig.h_xHeaterZoneCounter_ClearButton'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
}
function resetVacuumZone() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.HMI_CountConfig.h_xVacuumZoneCounter_ClearButton'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
}
function resetCoolingZone() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.HMI_CountConfig.h_xCoolZoneCounter_ClearButton'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
}
</script>

<style scoped>
.card-head-height {
  height: 120px;
}
.card-tail-height {
  height: 200px;
}
</style>
