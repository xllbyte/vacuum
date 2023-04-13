<template>
  <div>
    <div style="width: 90%; margin: auto">
      <!-- 排风口 -->
      <div v-if="airFlowOutStatus" style="width: 40px; display: inline-block; margin-left: 5%; margin-bottom: -5px">
        <icon-material-symbols-mode-fan class="text-30px dom-rotate block-center" color="#ACACAC" />
        <div class="outlet"></div>
      </div>
      <div v-if="airFlowOutStatus" style="width: 40px; display: inline-block; position: absolute; right: 9.2%">
        <icon-material-symbols-mode-fan class="text-30px dom-rotate block-center" color="#ACACAC" />
        <div class="outlet"></div>
      </div>
      <div v-if="!airFlowOutStatus" style="width: 40px; display: inline-block; margin-left: 5%; margin-bottom: -5px">
        <icon-material-symbols-mode-fan class="text-30px block-center" color="#ACACAC" />
        <div class="outlet"></div>
      </div>
      <div v-if="!airFlowOutStatus" style="width: 40px; display: inline-block; position: absolute; right: 9.2%">
        <icon-material-symbols-mode-fan class="text-30px block-center" color="#ACACAC" />
        <div class="outlet"></div>
      </div>
      <!-- 上炉区视图 -->
      <n-card size="small" class="shadow-sm top-stove" style="width: 90%; margin: auto">
        <div style="width: 100%">
          <div
            v-for="(item, i) in stoves"
            :key="i"
            class="stove-item"
            :style="
              'width:' +
              100 / stoves.length +
              '%;background-color:' +
              (item.name.indexOf('warm') >= 0
                ? '#C1ECC4'
                : item.name.indexOf('hot') >= 0
                ? '#C1ECC4'
                : item.name.indexOf('vacuum') >= 0
                ? '#82B67A'
                : item.name.indexOf('cool') >= 0
                ? '#D2E3FF'
                : '')
            "
          >
            <span class="block-center" style="font-weight: bold; width: 30px; color: gray">
              {{ upperFanArray[i] }}</span
            >
            <icon-material-symbols-mode-fan-outline
              v-if="item.name.indexOf('cool') < 0 && item.state == 0"
              class="text-30px block-center"
              color="#7C7C7C"
            />
            <icon-material-symbols-mode-fan
              v-if="item.name.indexOf('cool') < 0 && item.state == 1 && item.actualTemp < item.targetTemp"
              class="text-30px dom-rotate block-center"
              color="#F9CD02"
            />
            <icon-material-symbols-mode-fan
              v-if="item.name.indexOf('cool') < 0 && item.state == 1 && item.actualTemp >= item.targetTemp"
              class="text-30px dom-rotate block-center"
              color="mediumseagreen"
            />
            <icon-mingcute-snow-fill
              v-if="item.name.indexOf('cool') >= 0 && item.state == 0"
              class="text-30px block-center"
              color="#7C7C7C"
            />
            <icon-mingcute-snow-fill
              v-if="item.name.indexOf('cool') >= 0 && item.state == 1 && item.actualTemp < item.targetTemp"
              class="text-30px dom-rotate block-center"
              color="#F9CD02"
            />
            <icon-mingcute-snow-fill
              v-if="item.name.indexOf('cool') >= 0 && item.state == 1 && item.actualTemp >= item.targetTemp"
              class="text-30px dom-rotate block-center"
              color="mediumseagreen"
            />
            <n-tag
              v-if="item.name.indexOf('cool') < 0 || item.name == 'cool1'"
              round
              type="info"
              :bordered="false"
              :color="{
                color: '#6792f3',
                textColor: '#f0f5fc',
                borderColor: '#555'
              }"
              class="light-green"
            >
              {{ settingTemperatureArray[i] }}
            </n-tag>
            <div v-if="item.name.indexOf('cool') >= 0 && item.name != 'cool1'" style="height: 28px"></div>
            <n-tag round :bordered="false" class="light-green">
              {{ actualTemperatureArray[i] }}
            </n-tag>
          </div>
        </div>
      </n-card>
      <!-- 下炉区视图 -->
      <n-card size="small" class="shadow-sm bottom-stove" style="width: 100%; margin: auto">
        <div style="width: 90%; margin: auto">
          <div
            v-for="(item, i) in stoves"
            :key="i"
            class="stove-item"
            :style="
              'width:' +
              100 / stoves.length +
              '%;background-color:' +
              (item.name.indexOf('warm') >= 0
                ? '#C1ECC4'
                : item.name.indexOf('hot') >= 0
                ? '#C1ECC4'
                : item.name.indexOf('vacuum') >= 0
                ? '#82B67A'
                : item.name.indexOf('cool') >= 0
                ? '#D2E3FF'
                : '')
            "
          >
            <div>
              <div>
                <icon-material-symbols-mode-fan-outline
                  v-if="item.name.indexOf('cool') < 0 && item.state == 0"
                  class="text-30px block-center"
                  color="#7C7C7C"
                />
                <icon-material-symbols-mode-fan
                  v-if="item.name.indexOf('cool') < 0 && item.state == 1 && item.actualTemp < item.targetTemp"
                  class="text-30px dom-rotate block-center"
                  color="#F9CD02"
                />
                <icon-material-symbols-mode-fan
                  v-if="item.name.indexOf('cool') < 0 && item.state == 1 && item.actualTemp >= item.targetTemp"
                  class="text-30px dom-rotate block-center"
                  color="mediumseagreen"
                />
                <icon-mingcute-snow-fill
                  v-if="item.name.indexOf('cool') >= 0 && item.state == 0"
                  class="text-30px block-center"
                  color="#7C7C7C"
                />
                <icon-mingcute-snow-fill
                  v-if="item.name.indexOf('cool') >= 0 && item.state == 1 && item.actualTemp < item.targetTemp"
                  class="text-30px dom-rotate block-center"
                  color="#F9CD02"
                />
                <icon-mingcute-snow-fill
                  v-if="item.name.indexOf('cool') >= 0 && item.state == 1 && item.actualTemp >= item.targetTemp"
                  class="text-30px dom-rotate block-center"
                  color="mediumseagreen"
                />
                <n-tag
                  v-if="item.name.indexOf('cool') < 0"
                  round
                  type="info"
                  :bordered="false"
                  :color="{
                    color: '#6792f3',
                    textColor: '#f0f5fc',
                    borderColor: '#555'
                  }"
                  class="light-green"
                >
                  {{ settingTemperatureArrayDown[i] }}
                </n-tag>
                <div v-if="item.name.indexOf('cool') >= 0" style="height: 28px"></div>
                <n-tag round :bordered="false" class="light-green">
                  {{ actualTemperatureArrayDown[i] }}
                </n-tag>
              </div>
              <div v-if="i <= 5" style="margin-top: 40%">
                <icon-material-symbols-mode-fan-outline
                  v-if="absFanState[i] == false"
                  class="text-28px block-center"
                  color="#7C7C7C"
                />
                <icon-material-symbols-mode-fan
                  v-if="absFanState[i] == true"
                  class="text-28px dom-rotate block-center"
                  color="mediumseagreen"
                />
              </div>
              <div v-if="i > 5" style="margin-top: 40%; height: 28px"></div>
            </div>
          </div>
        </div>
      </n-card>
    </div>
    <!-- 尾部状态信息 -->
    <n-grid x-gap="0" :cols="8" style="margin-top: 3%; height: 300px">
      <n-gi span="3">
        <n-card>
          <n-grid x-gap="12" :cols="4">
            <n-gi>
              <div>
                <n-tag class="light-green" style="margin-top: 12%"> 链速 </n-tag>
                <n-tag class="light-green"> m/min </n-tag>
                <n-tag type="info" class="light-green"> {{ settingSpeed }}</n-tag>
                <n-tag type="success" class="light-green"> {{ actualSpeed }} </n-tag>
              </div>
            </n-gi>
            <n-gi>
              <div>
                <n-tag class="light-green" style="margin-top: 12%"> 中间支撑高度 </n-tag>
                <n-tag class="light-green"> mm </n-tag>
                <n-tag type="info" class="light-green"> {{ settingSupportHeight }}</n-tag>
                <n-tag type="success" class="light-green"> {{ actualSupportHeight }} </n-tag>
              </div>
            </n-gi>
            <n-gi>
              <div>
                <n-tag class="light-green" style="margin-top: 12%"> 中间支撑宽度 </n-tag>
                <n-tag class="light-green"> mm </n-tag>
                <n-tag type="info" class="light-green"> {{ settingSupportWidth }} </n-tag>
                <n-tag type="success" class="light-green"> {{ actualSupportWidth }} </n-tag>
              </div>
            </n-gi>
            <n-gi>
              <div>
                <n-tag class="light-green" style="margin-top: 12%"> 轨道宽度 </n-tag>
                <n-tag class="light-green"> mm </n-tag>
                <n-tag type="info" class="light-green"> {{ settingTrackWidth }}</n-tag>
                <n-tag type="success" class="light-green"> {{ actualTrackWidth }} </n-tag>
              </div>
            </n-gi>
          </n-grid>
        </n-card>
      </n-gi>
      <n-gi>
        <div>
          <n-tag class="light-green" style="margin-top: 12%"> 含氧量 </n-tag>
          <n-tag class="light-green"> ppm </n-tag>
          <n-tag type="info" class="light-green"> {{ settingO2 }} </n-tag>
          <n-tag type="success" class="light-green"> {{ actualO2 }} </n-tag>
        </div>
      </n-gi>
      <n-gi span="1">
        <div class="light-green" />
      </n-gi>
      <n-gi span="3">
        <div>
          <vacuum-animation
            :display-value="statePV"
            :holding-time="holdingTime"
            :during-time="duringTime"
            :reback-time="rebackTime"
          ></vacuum-animation>
        </div>
      </n-gi>
    </n-grid>
    <!-- 底部工具 -->
    <n-card :bordered="false" size="small" class="shadow-sm rounded-16px" style="margin-top: 25px">
      <n-grid x-gap="12" :cols="8" item-responsive>
        <n-gi span="0 1060:1">
          <n-space style="float: right">
            <n-button strong secondary type="info" class="full-height" @click="changeFile">
              <icon-mdi-file-document-plus class="text-30px" />
            </n-button>
            <n-button strong secondary type="info" class="full-height" @click="getAllFile">
              <icon-jam-files-f class="text-30px" />
            </n-button>
          </n-space>
        </n-gi>
        <n-gi span="3">
          <n-button type="info" dashed class="profile full-height">
            <icon-ic-outline-insert-drive-file class="text-24px" />
            <span style="margin-left: 8px">E:\newFile\{{ currentFile }}.properties</span>
          </n-button>
        </n-gi>
        <n-gi span="4">
          <n-space>
            <n-button type="info" size="large" class="full-height" strong secondary @click="coverShowModal = true">
              <icon-material-symbols-open-in-browser class="text-30px" />
              机盖开启
            </n-button>
            <n-button
              v-if="!wholeStatus"
              type="success"
              size="large"
              class="full-height"
              strong
              secondary
              @click="changeStatus"
            >
              <icon-material-symbols-not-started class="text-30px" />
              启动
            </n-button>
            <n-button
              v-if="wholeStatus"
              type="error"
              size="large"
              class="full-height"
              strong
              secondary
              @click="chickPause"
            >
              <icon-material-symbols-stop-circle-outline class="text-30px" />
              停止
            </n-button>
            <n-button v-if="wholeStatus" type="error" size="large" class="full-height" strong @click="chickES">
              <icon-material-symbols-stop class="text-30px" />
              紧急停止
            </n-button>
          </n-space>
        </n-gi>
      </n-grid>
    </n-card>

    <!-- 回流炉机盖弹出面板 -->
    <n-modal v-model:show="coverShowModal" class="rounded-10px" preset="card" title="机盖开启" style="width: 600px">
      <n-grid x-gap="12" :cols="3">
        <n-gi>
          <n-result description="加热区开盖">
            <template #icon>
              <icon-material-symbols-aod-rounded class="text-85px text-red" />
            </template>
            <template #footer>
              <n-button
                style="width: 60%"
                @mousedown="handleButtonDownHeatUp"
                @mouseup="handleButtonUp"
                @mouseleave="handleButtonUp"
              >
                <icon-material-symbols-arrow-upward class="text-30px" />
              </n-button>
              <n-button
                style="width: 60%"
                @mousedown="handleButtonDownHeatDown"
                @mouseup="handleButtonUp"
                @mouseleave="handleButtonUp"
              >
                <icon-material-symbols-arrow-downward class="text-30px" />
              </n-button>
            </template>
          </n-result>
        </n-gi>
        <n-gi>
          <n-result description="低温区开盖">
            <template #icon>
              <icon-material-symbols-aod-rounded class="text-85px text-blue" />
            </template>
            <template #footer>
              <n-button
                style="width: 60%"
                @mouseenter="handleButtonDownColdUp"
                @mouseup="handleButtonUp"
                @mouseleave="handleButtonUp"
              >
                <icon-material-symbols-arrow-upward class="text-30px" />
              </n-button>
              <n-button
                style="width: 60%"
                @mouseenter="handleButtonDownColdDown"
                @mouseup="handleButtonUp"
                @mouseleave="handleButtonUp"
              >
                <icon-material-symbols-arrow-downward class="text-30px" />
              </n-button>
            </template>
          </n-result>
        </n-gi>
        <n-gi>
          <n-result description="一键开盖">
            <template #icon>
              <icon-material-symbols-waving-hand class="text-85px" />
            </template>
            <template #footer>
              <n-button
                style="width: 60%"
                @mouseenter="handleButtonDown"
                @mouseup="handleButtonUp"
                @mouseleave="handleButtonUp"
              >
                <icon-material-symbols-arrow-upward class="text-30px" />
              </n-button>
              <n-button
                style="width: 60%"
                @mouseenter="handleButtonDownAll"
                @mouseup="handleButtonUp"
                @mouseleave="handleButtonUp"
              >
                <icon-material-symbols-arrow-downward class="text-30px" />
              </n-button>
            </template>
          </n-result>
        </n-gi>
      </n-grid>
    </n-modal>
    <n-modal v-model:show="isModalVisible" class="rounded-10px" preset="card" title="文件保存" style="width: 600px">
      <n-form-item label="文件名">
        <n-input v-model:value="filename" placeholder="请输入文件名" />
      </n-form-item>
      <template style="display: flex; justify-content: flex-end; align-items: center">
        <n-button @click="closeModal">取消</n-button>
        <n-button type="primary" style="margin-left: 5%" @click="saveFile">保存</n-button>
      </template>
    </n-modal>
    <n-modal v-model:show="fileVisible" class="rounded-10px" preset="card" title="文件列表" style="width: 800px">
      <n-data-table bordered :columns="columns" :data="fileList" :max-height="300" resizable :scroll-x="600">
      </n-data-table>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onMounted, onBeforeUnmount, h } from 'vue';
import { NButton, NSpace, useDialog, useMessage } from 'naive-ui';
import VacuumAnimation from '@/views/dashboard/analysis/components/VacuumAnimation.vue';
import { fileParam, fileSave, keepGetting, postJson, queryAllFile, saveJson } from '@/service/api/home';
import { closeSocket, createSocket, guid } from '@/service/api/websocket';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Stove {
  id: number;
  name: string;
  state: number;
  targetTemp: number;
  actualTemp: number;
}
const dialog = useDialog();
const message = useMessage();
const coverShowModal = ref(false);
const settingTemperatureArray = ref(['100', '50', '60', '80', '100', '50', '60', '80']);
const actualTemperatureArray = ref(['100', '50', '60', '80', '100', '50', '60', '80']);
const settingTemperatureArrayDown = ref(['100', '50', '60', '80', '100', '50', '60', '80']);
const actualTemperatureArrayDown = ref(['100', '50', '60', '80', '100', '50', '60', '80']);
const upperFanArray = ref(['1', '2', '3', '4', '1', '2', '3', '4']);
const lowerFanArray = ref([]);
const settingSpeed = ref(2.0);
const actualSpeed = ref(3.0);
const settingO2 = ref('2.0');
const actualO2 = ref('3.0');
const settingSupportHeight = ref('-7.0');
const actualSupportHeight = ref('0.0');
const settingSupportWidth = ref('51.0');
const actualSupportWidth = ref('0.0');
const settingTrackWidth = ref('102.6');
const actualTrackWidth = ref('102.5');
const machineState = ref(0);
const startButton = ref(false);
const pauseButton = ref(false);
const eStopButton = ref(false);
const airFlowOutStatus = ref(false);
const absTempereture = ref([]);
const absFanState = ref([false, false, false, false, false, false, false, false]);
const ClosedOKStatus = ref(false);
const JogFwdAllStatus = ref(false);
const JogRevAllStatus = ref(false);
const tagName = 'dashboardAnalysis';
const uuid = ref('');
const statePV = ref(0);
const duringTime = ref(0);
const holdingTime = ref(0);
const rebackTime = ref(0);
const wholeStatus = ref(false);
const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));
const countDown = (second: number) => `启动中：倒计时 ${second} 秒`;
const countDown1 = (second: number) => `停止中：倒计时 ${second} 秒`;
const countDown2 = (second: number) => `急停中：倒计时 ${second} 秒`;
const statusCode = ref(2);
const statusName = ref('');
const isModalVisible = ref(false);
const fileVisible = ref(false);
const filename = ref('');
const currentFile = ref('');
const stoves: Stove[] = reactive([
  {
    id: 1,
    name: 'warm1',
    state: 0,
    targetTemp: 130,
    actualTemp: 130
  },
  {
    id: 2,
    name: 'warm2',
    state: 0,
    targetTemp: 180,
    actualTemp: 197
  },
  {
    id: 3,
    name: 'warm3',
    state: 0,
    targetTemp: 185,
    actualTemp: 191
  },
  {
    id: 4,
    name: 'hot4',
    state: 0,
    targetTemp: 205,
    actualTemp: 168
  },
  {
    id: 5,
    name: 'hot5',
    state: 0,
    targetTemp: 205,
    actualTemp: 168
  },
  {
    id: 5,
    name: 'vacuum1',
    state: 0,
    targetTemp: 205,
    actualTemp: 207
  },
  {
    id: 6,
    name: 'cool1',
    state: 0,
    targetTemp: 205,
    actualTemp: 168
  },
  {
    id: 7,
    name: 'cool2',
    state: 0,
    targetTemp: 205,
    actualTemp: 168
  }
]);
const fileList = ref([]);
const columns = [
  {
    title: '序号',
    key: 'id',
    align: 'center',
    minWidth: '50px'
  },
  {
    title: '文件名',
    key: 'fileName',
    align: 'center',
    minWidth: '200px'
  },
  {
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(row) {
      return h(NSpace, null, {
        default: () => [
          h(
            NButton,
            {
              strong: true,
              tertiary: true,
              color: 'green',
              size: 'small',
              onClick: () => {
                initFileData(row);
              }
            },
            { default: () => '载入文件' }
          ),
          h(
            NButton,
            {
              strong: true,
              tertiary: true,
              color: 'blue',
              size: 'small',
              onClick: () => {
                handleSuccess(row);
              }
            },
            { default: () => '删除文件' }
          )
        ]
      });
    }
  }
];

watch(startButton, newValue => {
  for (const stove in stoves) {
    if (newValue) {
      stoves[stove].state = 1;
    } else {
      stoves[stove].state = 0;
    }
  }
  console.log(stoves);
});

function changeStatus() {
  const d = dialog.success({
    title: '警告',
    content: '确定开启炉区吗？',
    positiveText: '确认',
    onPositiveClick: () => {
      d.loading = true;
      return new Promise(resolve => {
        sleep()
          .then(() => {
            d.content = countDown(2);
            return sleep();
          })
          .then(() => {
            d.content = countDown(1);
            return sleep();
          })
          .then(() => {
            // message.success(`设备状态为：${statusName.value}`);
            d.content = countDown(0);
            wholeStatus.value = true;
            startButton.value = true;
            setTimeout(() => {
              resetStatus();
            }, 200);
            const Param = {
              result: startButton.value,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.StartButton_HMI'
            };
            const Param1 = {
              result: false,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.StopButton_HMI'
            };
            const Param2 = {
              result: false,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.EStopButton_HMI'
            };
            const arr = [];
            arr.push(Param);
            arr.push(Param1);
            arr.push(Param2);
            saveJson(arr);
            wholeStatus.value = true;
            setTimeout(() => {
              resetStatus();
            }, 500);
            message.success(`设备状态为：${statusName.value}`);
            // if (statusCode.value == '2') {
            //   message.success('设备启动成功');
            // } else {
            //   message.error('设备启动失败');
            // }
          })
          .then(resolve);
      });
    }
  });
}
function changeStatusName() {
  if (statusCode.value == '0') {
    statusName.value = '手动状态';
  } else if (statusCode.value == '1') {
    statusName.value = '待机状态';
  } else if (statusCode.value == '2') {
    statusName.value = '自动运行状态';
  } else if (statusCode.value == '3') {
    statusName.value = '未回原';
  } else if (statusCode.value == '4') {
    statusName.value = '回原中';
  } else if (statusCode.value == '5') {
    statusName.value = '单步状态';
  } else if (statusCode.value == '6') {
    statusName.value = '暂停状态';
  } else if (statusCode.value == '7') {
    statusName.value = '停机过程中';
  } else if (statusCode.value == '8') {
    statusName.value = '设备报警';
  } else {
    statusName.value = '急停中';
  }
}
async function chickPause() {
  const d = dialog.error({
    title: '警告',
    content: '确定停止吗？',
    positiveText: '确认',
    onPositiveClick: () => {
      d.loading = true;
      return new Promise(resolve => {
        sleep()
          .then(() => {
            d.content = countDown1(2);
            return sleep();
          })
          .then(() => {
            d.content = countDown1(1);
            return sleep();
          })
          .then(() => {
            d.content = countDown1(0);
            pauseButton.value = true;
            const Param = {
              result: false,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.StartButton_HMI'
            };
            const Param1 = {
              result: pauseButton.value,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.StopButton_HMI'
            };
            const Param2 = {
              result: false,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.EStopButton_HMI'
            };
            const arr = [];
            arr.push(Param);
            arr.push(Param1);
            arr.push(Param2);
            saveJson(arr);
            wholeStatus.value = false;
            setTimeout(() => {
              wholeStatus.value = false;
              resetStatus();
            }, 500);
            message.success(`设备状态为：${statusName.value}`);
            // if (statusCode.value == '7') {
            //   message.success('设备停止成功');
            // } else {
            //   message.error('设备停止失败');
            //   wholeStatus.value = false;
            // }
          })
          .then(resolve);
      });
    }
  });
}
async function chickES() {
  const d = dialog.warning({
    title: '警告',
    content: '确定急停吗？',
    positiveText: '确认',
    onPositiveClick: () => {
      d.loading = true;
      return new Promise(resolve => {
        sleep()
          .then(() => {
            d.content = countDown2(2);
            return sleep();
          })
          .then(() => {
            d.content = countDown2(1);
            return sleep();
          })
          .then(() => {
            d.content = countDown2(0);
            wholeStatus.value = false;
            eStopButton.value = true;
            const Param = {
              result: false,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.StartButton_HMI'
            };
            const Param1 = {
              result: false,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.StopButton_HMI'
            };
            const Param2 = {
              result: eStopButton.value,
              dataType: 'boolean',
              name: 'Application.GVL_PLC.EStopButton_HMI'
            };
            const arr = [];
            arr.push(Param);
            arr.push(Param1);
            arr.push(Param2);
            saveJson(arr);
            wholeStatus.value = false;
            message.success(`设备状态为：${statusName.value}`);
            // if (statusCode.value == '9') {
            //   message.success('设备急停成功');
            // } else {
            //   message.error('设备急停失败');
            //   wholeStatus.value = false;
            // }
          })
          .then(resolve);
      });
    }
  });
}
function pushHeat() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogFwd[0]'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('开盖中...');
  dialog.success({
    title: '一键开盖启动中',
    content: '停止请按确认',
    positiveText: '确定',
    maskClosable: false,
    onPositiveClick: () => {
      message.success('已经停止');
      const Param3 = {
        result: false,
        dataType: 'boolean',
        name: 'Application.GVL06_Linak.stLinak_i_JogFwd[0]'
      };
      const arr1 = [];
      arr1.push(Param3);
      saveJson(arr1);
    }
  });
}
function downHeat() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogRev[0]'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('关盖中...');
  dialog.success({
    title: '一键关盖启动中',
    content: '停止请按确认',
    positiveText: '确定',
    maskClosable: false,
    onPositiveClick: () => {
      message.success('已经停止');
      const Param3 = {
        result: false,
        dataType: 'boolean',
        name: 'Application.GVL06_Linak.stLinak_i_JogRev[0]'
      };
      const arr1 = [];
      arr1.push(Param3);
      saveJson(arr1);
    }
  });
}
function pushCold() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogFwd[1]'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('开盖中...');
  dialog.success({
    title: '一键开盖启动中',
    content: '停止请按确认',
    positiveText: '确定',
    maskClosable: false,
    onPositiveClick: () => {
      message.success('已经停止');
      const Param3 = {
        result: false,
        dataType: 'boolean',
        name: 'Application.GVL06_Linak.stLinak_i_JogFwd[1]'
      };
      const arr1 = [];
      arr1.push(Param3);
      saveJson(arr1);
    }
  });
}
function downCold() {
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogRev[1]'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('关盖中...');
  dialog.success({
    title: '一键关盖启动中',
    content: '停止请按确认',
    positiveText: '确定',
    maskClosable: false,
    onPositiveClick: () => {
      message.success('已经停止');
      const Param3 = {
        result: false,
        dataType: 'boolean',
        name: 'Application.GVL06_Linak.stLinak_i_JogRev[1]'
      };
      const arr1 = [];
      arr1.push(Param3);
      saveJson(arr1);
    }
  });
}
onMounted(async () => {
  uuid.value = guid(tagName);
  createSocket(uuid.value);
  window.addEventListener('onmessageWS', handleWsMsg);
  const param = {
    'Application.HMI_HomePage.h_iFanSpeedLevel_UP': 'shorts',
    'Application.HMI_HomePage.h_iFanSpeedLevel_Down': 'shorts',
    'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_UP': 'floats',
    'Application.HMI_HomePage.h_rPreHeatZoneTempreturePV_UP': 'floats',
    'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_UP': 'floats',
    'Application.HMI_HomePage.h_rHighHeatZoneTempreturePV_UP': 'floats',
    'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_UP': 'floats',
    'Application.HMI_HomePage.h_rVacuumHeatZoneTempreturePV_UP': 'floats',
    'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_UP': 'floats',
    'Application.HMI_HomePage.h_rColdHeatZoneTempreturePV_UP': 'floats',
    'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rPreHeatZoneTempreturePV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rHighHeatZoneTempreturePV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rVacuumHeatZoneTempreturePV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_DOWN': 'floats',
    'Application.HMI_HomePage.h_rColdHeatZoneTempreturePV_DOWN': 'floats',
    'Application.HMI_TrackConfig.h_rMiddleSupportHightSV[0]': 'float',
    'Application.HMI_TrackConfig.h_rMiddleSupportHightPV[0]': 'float',
    'Application.HMI_TrackConfig.h_rMiddleSupportWidthSV[0]': 'float',
    'Application.HMI_TrackConfig.h_rMiddleSupportWidthPV[0]': 'float',
    'Application.HMI_TrackConfig.h_rTrackWidthSV[0]': 'float',
    'Application.HMI_TrackConfig.h_rTrackWidthPV[0]': 'float',
    'Application.HMI_HomePage.h_rChainSpeedPV': 'float',
    'Application.HMI_HomePage.h_rChainSpeedSV': 'float',
    'Application.HMI_N2Config.h_rO2_PV[0]': 'float',
    'Application.HMI_HomePage.h_rO2ValueSV': 'float',
    'Application.GVL_PLC.StartButton_HMI': 'boolean',
    'Application.GVL_PLC.StopButton_HMI': 'boolean',
    'Application.GVL_PLC.EStopButton_HMI': 'boolean',
    'Application.GVL_PLC.MachineState': 'int',
    'Application.HMI_HomePage.h_xABSzoneFanState': 'booleans',
    'Application.HMI_HomePage.h_rAbsZoneTempereturePV': 'floats',
    'Application.HMI_HomePage.h_xAirFlowOut': 'boolean',
    'Application.GVL06_Linak.stLinak_i_JogFwdAll': 'boolean',
    'Application.GVL06_Linak.stLinak_i_JogRevAll': 'boolean',
    'Application.GVL06_Linak.stlinak_o_ClosedOK': 'boolean',
    'Application.HMI_VacuumConfig.h_rVacuumPV': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumDuringTime': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumHoldingTime': 'float',
    'Application.HMI_VacuumConfig.h_rVacuumRebackTime': 'float',
    'Application.GVL06_Linak.stLinak_i_JogFwd': 'booleans',
    'Application.GVL06_Linak.stLinak_i_JogRev': 'booleans'
  };
  keepGetting(tagName, param);
});
onBeforeUnmount(() => {
  closeSocket();
});
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
      'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_UP': settingPreheatArrayValue,
      'Application.HMI_HomePage.h_rPreHeatZoneTempreturePV_UP': actualPreheatArrayValue,
      'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_UP': settingHighTemperatureArrayValue,
      'Application.HMI_HomePage.h_rHighHeatZoneTempreturePV_UP': actualHighTemperatureArrayValue,
      'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_UP': settingVacuumArrayValue,
      'Application.HMI_HomePage.h_rVacuumHeatZoneTempreturePV_UP': actualVacuumArrayValue,
      'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_UP': settingBurialArrayValue,
      'Application.HMI_HomePage.h_rColdHeatZoneTempreturePV_UP': actualBurialArrayValue,
      'Application.HMI_HomePage.h_iFanSpeedLevel_UP': upFanArrayValue,
      'Application.HMI_HomePage.h_iFanSpeedLevel_Down': downFanArrayValue,
      'Application.HMI_HomePage.h_rPreHeatZoneTempretureSV_DOWN': settingPreheatArrayValueDown,
      'Application.HMI_HomePage.h_rPreHeatZoneTempreturePV_DOWN': actualPreheatArrayValueDown,
      'Application.HMI_HomePage.h_rHighHeatZoneTempretureSV_DOWN': settingHighTemperatureArrayValueDown,
      'Application.HMI_HomePage.h_rHighHeatZoneTempreturePV_DOWN': actualHighTemperatureArrayValueDown,
      'Application.HMI_HomePage.h_rVacuumHeatZoneTempretureSV_DOWN': settingVacuumArrayValueDown,
      'Application.HMI_HomePage.h_rVacuumHeatZoneTempreturePV_DOWN': actualVacuumArrayValueDown,
      'Application.HMI_HomePage.h_rColdHeatZoneTempretureSV_DOWN': settingBurialArrayValueDown,
      'Application.HMI_HomePage.h_rColdHeatZoneTempreturePV_DOWN': actualBurialArrayValuetsDown,
      'Application.HMI_HomePage.h_xABSzoneFanState': aBSzoneFanState,
      'Application.HMI_HomePage.h_rAbsZoneTempereturePV': absZoneTempereturePV,
      'Application.HMI_HomePage.h_xAirFlowOut': airFlowOut,
      'Application.HMI_N2Config.h_rO2_PV[0]': actualOxygenContentValue,
      'Application.HMI_HomePage.h_rO2ValueSV': settingOxygenContentValue,
      'Application.HMI_VacuumConfig.h_rVacuumPV': statePVValue,
      'Application.HMI_VacuumConfig.h_rVacuumDuringTime': duringTimeValue,
      'Application.HMI_VacuumConfig.h_rVacuumHoldingTime': holdingTimeValue,
      'Application.HMI_VacuumConfig.h_rVacuumRebackTime': rebackTimeValue,
      'Application.GVL_PLC.MachineState': machineStateValue,
      'Application.GVL_PLC.StartButton_HMI': startButtonValue,
      'Application.GVL_PLC.StopButton_HMI': pauseButtonValue,
      'Application.GVL_PLC.EStopButton_HMI': eStopButtonValue,
      'Application.GVL06_Linak.stLinak_i_JogFwdAll': jogFwdAllValue,
      'Application.GVL06_Linak.stLinak_i_JogRevAll': JogRevAllValue,
      'Application.GVL06_Linak.stLinak_i_JogFwd': jogFwdArr,
      'Application.GVL06_Linak.stLinak_i_JogRev': jogRevArr
    } = data.result;
    if (machineStateValue == '2') {
      wholeStatus.value = true;
    } else {
      wholeStatus.value = false;
    }
    changeStatusName();
    statusCode.value = machineStateValue;
    machineState.value = machineStateValue;
    startButton.value = startButtonValue;
    pauseButton.value = pauseButtonValue;
    settingSupportHeight.value = settingSupHeightValue;
    actualSupportHeight.value = actualSupHeightValue;
    settingSupportWidth.value = settingSupWidthValue;
    actualSupportWidth.value = actualSupWidthValue;
    settingTrackWidth.value = settingTrackValue;
    actualTrackWidth.value = actualTrackValue;
    actualSpeed.value = convertMmPerSecToMPerMin(SpeedPVValue);
    settingSpeed.value = convertMmPerSecToMPerMin(SpeedSVValue);
    const settingArray = settingPreheatArrayValue
      .slice(0, 3)
      .concat(
        settingHighTemperatureArrayValue
          .slice(0, 2)
          .concat(settingVacuumArrayValue.slice(0, 1).concat(settingBurialArrayValue.slice(0, 2)))
      );
    const actualArray = actualPreheatArrayValue
      .slice(0, 3)
      .concat(
        actualHighTemperatureArrayValue
          .slice(0, 2)
          .concat(actualVacuumArrayValue.slice(0, 1).concat(actualBurialArrayValue.slice(0, 2)))
      );
    const settingArrayDown = settingPreheatArrayValueDown
      .slice(0, 3)
      .concat(
        settingHighTemperatureArrayValueDown
          .slice(0, 2)
          .concat(settingVacuumArrayValueDown.slice(0, 1).concat(settingBurialArrayValueDown.slice(0, 2)))
      );
    const actualArrayDown = actualPreheatArrayValueDown
      .slice(0, 3)
      .concat(
        actualHighTemperatureArrayValueDown
          .slice(0, 2)
          .concat(actualVacuumArrayValueDown.slice(0, 1).concat(actualBurialArrayValuetsDown.slice(0, 2)))
      );
    settingTemperatureArray.value = settingArray;
    actualTemperatureArray.value = actualArray;
    settingTemperatureArrayDown.value = settingArrayDown;
    actualTemperatureArrayDown.value = actualArrayDown;
    airFlowOutStatus.value = airFlowOut;
    absTempereture.value = absZoneTempereturePV;
    absFanState.value = aBSzoneFanState;
    settingO2.value = settingOxygenContentValue;
    actualO2.value = actualOxygenContentValue;
    statePV.value = statePVValue;
    duringTime.value = duringTimeValue;
    holdingTime.value = holdingTimeValue;
    rebackTime.value = rebackTimeValue;
    const topArrOne = upFanArrayValue[0];
    const topArrTwo = upFanArrayValue[1];
    const topArrThree = upFanArrayValue[2];
    const topObj = [];
    topObj.push(topArrOne);
    topObj.push(topArrOne);
    topObj.push(topArrOne);
    topObj.push(topArrTwo);
    topObj.push(topArrTwo);
    topObj.push(topArrTwo);
    topObj.push(topArrThree);
    topObj.push(topArrThree);
    upperFanArray.value = topObj;
  }
}
async function queryStatus() {
  const param = {
    'Application.GVL_PLC.MachineState': 'int'
  };
  const { data } = await postJson(param);
  if (data) {
    const { 'Application.GVL_PLC.MachineState': machineStateValue } = data;
    console.log(machineStateValue, '状态码');
    statusCode.value = machineStateValue;
    machineState.value = machineStateValue;
  }
}
function resetStatus() {
  const Param = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL_PLC.StartButton_HMI'
  };
  const Param1 = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL_PLC.StopButton_HMI'
  };
  const Param2 = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL_PLC.EStopButton_HMI'
  };
  const arr = [];
  arr.push(Param);
  arr.push(Param1);
  arr.push(Param2);
  saveJson(arr);
}
function handleButtonDown() {
  console.log('down');
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogFwdAll'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('开盖中...');
}
function handleButtonDownHeatUp() {
  console.log('down');
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogFwd[0]'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('开盖中...');
}
function handleButtonDownHeatDown() {
  console.log('down');
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogRev[0]'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('合盖中...');
}
function handleButtonDownColdUp() {
  console.log('down');
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogFwd[1]'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('开盖中...');
}
function handleButtonDownColdDown() {
  console.log('down');
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogRev[1]'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('合盖中...');
}
function handleButtonDownAll() {
  console.log('down');
  const Param = {
    result: true,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogRevAll'
  };
  const arr = [];
  arr.push(Param);
  saveJson(arr);
  message.success('合盖中...');
}
function handleButtonUp() {
  console.log('松开');
  const Param = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogFwdAll'
  };
  const Param1 = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogRevAll'
  };
  const Param2 = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogFwd[0]'
  };
  const Param3 = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogFwd[1]'
  };
  const Param4 = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogRev[0]'
  };
  const Param5 = {
    result: false,
    dataType: 'boolean',
    name: 'Application.GVL06_Linak.stLinak_i_JogRev[1]'
  };
  const arr = [];
  arr.push(Param);
  arr.push(Param1);
  arr.push(Param2);
  arr.push(Param3);
  arr.push(Param4);
  arr.push(Param5);
  saveJson(arr);
}
function convertMmPerSecToMPerMin(mmPerSec) {
  const mPerSec = Number(mmPerSec) / 1000;
  const mPerMin = mPerSec * 60;
  return mPerMin.toFixed(2);
}
function closeModal() {
  isModalVisible.value = false;
}
function saveFile() {
  fileSave(filename.value);
  isModalVisible.value = false;
  window.$notification?.success({
    title: '文件保存成功!',
    content: `保存成功!`,
    duration: 3000
  });
}
function changeFile() {
  filename.value = '';
  isModalVisible.value = true;
}
async function initAllFile() {
  console.log('数据');
  const { data } = await queryAllFile();
  console.log(data);
}
async function getAllFile() {
  const { data } = await queryAllFile();
  console.log(data);
  fileList.value = data;
  fileVisible.value = true;
}
function initFileData(row) {
  dialog.success({
    title: '警告',
    content: '是否载入该文件？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: async () => {
      message.success('载入成功');
      currentFile.value = row.fileName;
      const { data } = await fileParam(row.fileName);
      console.log(data);
      fileVisible.value = false;
    },
    onNegativeClick: () => {
      message.error('取消成功');
    }
  });
}
function handleSuccess(row) {
  dialog.success({
    title: '警告',
    content: '是否删除该配置文件吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('已删除');
    },
    onNegativeClick: () => {
      message.error('取消成功');
    }
  });
}
</script>

<style scoped>
.full-height {
  height: 100%;
}
.profile {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
}
.light-green {
  font-size: 12px;
  width: 70%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
}
.dom-rotate {
  animation: rotate 2s linear infinite;
  width: 70%;
}
@keyframes rotate {
  /* 需要兼容的自行补入噢 */
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.outlet {
  height: 30px;
  background-color: #b8bcb8;
}
.top-stove {
  width: 90%;
  height: 140px;
  margin-left: 3%;
  box-shadow: 4px 4px 15px #909090;
}
.bottom-stove {
  width: 90%;
  height: 200px;
  margin-left: 3%;
  box-shadow: 4px 4px 15px #909090;
}
.stove-item {
  display: inline-block;
}
.block-center {
  display: block;
  margin: auto;
}
</style>
