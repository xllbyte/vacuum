<template>
  <div>
    <div>
      <n-grid :x-gap="12" :y-gap="8" :cols="3">
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw1Value" size="medium" :options="options" />
                    </n-grid-item>
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">输送停滞</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-select v-model:value="cpw2Value" size="medium" :options="pressureOptions" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">运动倒置</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">指正</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">标称值手动移动</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">1.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">m/min</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">无值重定位</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">3.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">m/min</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">标称速度</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">m/min</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-button type="tertiary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">实际值</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">m/min</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="3">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">第二相邻运输机开/闭路</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="value1" size="medium" :options="option" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="value2" size="medium" :options="option" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="3">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">最小数据打开方向2</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">0.0</n-button>
                    </n-grid-item>
                    <n-grid-item> </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="3">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">相邻传输开关闭</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="value3" size="medium" :options="option" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="value4" size="medium" :options="option" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="3">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">最小打开距离</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary">0.0</n-button>
                    </n-grid-item>
                    <n-grid-item> </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">最小限值</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0.20</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">n/mir</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">最大限值</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">3.00</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">n/mir</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">参考值</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">n/mir</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">超支</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">n/mir</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">标称宽度</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">20.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">mm</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">实际宽度</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="tertiary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">mm</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">垃圾填埋场</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0.3</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">mm</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px">节点序号</span>
                      <n-button type="primary" size="large" style="margin-left: 5px">10</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <span class="py-3px text-16px">电动机</span>
                      <n-select v-model:value="motoTypValue" size="medium" :options="motoTypOptions" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item> </n-grid-item>
                    <n-grid-item>
                      <span class="py-3px text-16px">geal</span>
                      <n-select v-model:value="gealValue" size="medium" :options="gealOptions" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">Can服务器状态</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="error" size="large">Can超时</n-button>
                      <n-button color="yellow" size="large">1.0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item> </n-grid-item>
                    <n-grid-item>
                      <n-button type="success" size="large">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <n-button type="success" size="large">电机FC2正常</n-button>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="success" size="large">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">Motorstrom</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">数字输出1</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">限位开关正极</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">限位开关负极</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">参考限位开关</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">限位开关紧急停止</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">达到的位置</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">PCB支撑顶</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                      <n-switch v-model:value="active" size="large" style="margin-left: 5px" />
                      <n-switch v-model:value="active" size="large" style="margin-left: 5px" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="3">
                    <n-grid-item>
                      <div class="flex-col-center">
                        <span class="py-3px text-16px" style="margin-left: 5px">最大电流</span>
                        <n-button type="tertiary">0.000</n-button>
                      </div>
                    </n-grid-item>
                    <n-grid-item>
                      <div class="flex-col-center">
                        <span class="py-3px text-16px" style="margin-left: 5px">电流</span>
                        <n-button type="tertiary">0.000</n-button>
                      </div>
                    </n-grid-item>
                    <n-grid-item>
                      <div class="flex-col-center">
                        <span class="py-3px text-16px" style="margin-left: 5px">被许可的</span>
                        <n-button type="primary">2.000</n-button>
                      </div>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">定标速度分子</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">1782</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">标度速度分母</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">1200</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">定标位置分子</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">13888</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">位置分母</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">740</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="3">
                    <n-grid-item>
                      <div class="flex-col-center">
                        <span class="py-3px text-16px" style="margin-left: 5px">阴阳位</span>
                        <n-button type="tertiary">0</n-button>
                      </div>
                    </n-grid-item>
                    <n-grid-item>
                      <div class="flex-col-center">
                        <span class="py-3px text-16px" style="margin-left: 5px">-</span>
                        <n-button type="success">0</n-button>
                      </div>
                    </n-grid-item>
                    <n-grid-item>
                      <div class="flex-col-center">
                        <span class="py-3px text-16px" style="margin-left: 5px">新实际价值</span>
                        <n-button type="primary">20.0</n-button>
                      </div>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">实际偏移宽度</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">mm</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card :bordered="false" class="rounded-16px shadow-sm">
            <div class="w-full">
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">X pos像素移位区</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">y pos像素移位区</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">X pos像素移位区域编辑器</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px"
                        >激活:连接在2.CAN电路上的设备(CA 121)</span
                      >
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">双轨参考开关</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">链式齿边</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">第二个运输屏幕上的电机</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-switch v-model:value="active" size="large" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">节点折射率</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="value5" size="medium" :options="option" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">输送机偏置宽度</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">n/mir</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-16px" style="margin-left: 5px">Aotusl参考文献Tsok宽度</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="tertiary" size="large">0.0</n-button>
                      <span class="py-3px text-16px" style="margin-left: 5px">mm</span>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">X Drehzahlbeschleunigungv</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">1000</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">X Drehzahlbeschleunigungt</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">1000</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">Drehzahlvezogerung t</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">1000</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">Drehzahlbeschleunigungt QuickStop</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">1000</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">Schleppfehler</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-button type="primary" size="large">1000</n-button>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 3px">
                <n-select v-model:value="value6" size="medium" :options="chooseOptions" />
              </div>
              <div style="padding-top: 5px; padding-bottom: 3px">
                <div>
                  <n-grid :x-gap="12" :y-gap="8" :cols="2">
                    <n-grid-item>
                      <span class="py-3px text-12px" style="margin-left: 5px">Dauerlauf</span>
                    </n-grid-item>
                    <n-grid-item>
                      <n-select v-model:value="value7" size="medium" :options="dauerlaufOptions" />
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref(true);
const cpw1Value = ref('自动');
const cpw2Value = ref('等待模式');
const value1 = ref('TB2');
const value2 = ref('none');
const value3 = ref('none');
const value4 = ref('none');
const value5 = ref('none');
const value6 = ref('QuickStcp标准 电机自动停止(Enable=o)');
const value7 = ref('关');
const motoTypValue = ref('BG65');
const gealValue = ref('162');
const pressureValue = ref('CIO 011(3)');
const options = [
  {
    label: '输送电机不可用',
    value: '输送电机不可用'
  },
  {
    label: '自动',
    value: '自动'
  },
  {
    label: '手动',
    value: '手动'
  },
  {
    label: '无CanMotor',
    value: '无CanMotor'
  },
  {
    label: 'Gondel',
    value: 'Gondel'
  }
];
const pressureOptions = [
  {
    label: '等待模式',
    value: '等待模式'
  },
  {
    label: '无尽头',
    value: '无尽头'
  },
  {
    label: '设定基准',
    value: '设定基准'
  },
  {
    label: '开始',
    value: '开始'
  },
  {
    label: '向右移动',
    value: '向右移动'
  },
  {
    label: '向左移动',
    value: '向左移动'
  },
  {
    label: '自动',
    value: '自动'
  },
  {
    label: '位置已到达',
    value: '位置已到达'
  },
  {
    label: '紧急停机',
    value: '紧急停机'
  },
  {
    label: '停机',
    value: '停机'
  },
  {
    label: '保存电机参数',
    value: '保存电机参数'
  },
  {
    label: '等待最终位置',
    value: '等待最终位置'
  },
  {
    label: '故障重叠',
    value: '故障重叠'
  },
  {
    label: 'Homing',
    value: 'Homing'
  }
];
const option = [
  {
    label: 'none',
    value: 'none'
  },
  {
    label: 'TB1',
    value: 'TB1'
  },
  {
    label: 'TB2',
    value: 'TB2'
  },
  {
    label: 'TB3',
    value: 'TB3'
  },
  {
    label: 'TB4',
    value: 'TB4'
  }
];
const motoTypOptions = [
  {
    label: 'BG65',
    value: 'BG65'
  },
  {
    label: 'BG75',
    value: 'BG75'
  },
  {
    label: 'BG45',
    value: 'BG45'
  }
];
const gealOptions = [
  {
    label: '162 or 50:1',
    value: '162 or 50:1'
  },
  {
    label: '162',
    value: '162'
  },
  {
    label: '50',
    value: '50'
  },
  {
    label: '40',
    value: '40'
  },
  {
    label: '250',
    value: '250'
  },
  {
    label: '400',
    value: '400'
  },
  {
    label: 'Vac 28.12:1',
    value: 'Vac 28.12:1'
  },
  {
    label: 'Vac 50:1',
    value: 'Vac 50:1'
  },
  {
    label: 'Stopper 50:1',
    value: 'Stopper 50:1'
  }
];
const chooseOptions = [
  {
    label: 'QuickStcp标准 电机自动停止(Enable=o)',
    value: 'QuickStcp标准 电机自动停止(Enable=o)'
  },
  {
    label: '快速停止延迟1 带有延迟斜坡的电动机停止(速度)',
    value: '快速停止延迟1 带有延迟斜坡的电动机停止(速度)'
  },
  {
    label: '快速停止延迟2 带有延迟停机坪的电动机停止(控制)',
    value: '快速停止延迟2 带有延迟停机坪的电动机停止(控制)'
  }
];
const dauerlaufOptions = [
  {
    label: '关',
    value: '关'
  },
  {
    label: 'min',
    value: 'min'
  },
  {
    label: 'sec',
    value: 'sec'
  }
];
</script>

<style scoped></style>
