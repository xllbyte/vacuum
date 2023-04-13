<template>
  <div :class="keyboardClass"></div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps, watch, unref, onMounted, defineEmits } from 'vue';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import layout from 'simple-keyboard-layouts/build/layouts/chinese'; // 中文输入法

const props = defineProps({
  keyboardClass: {
    default: 'simple-keyboard',
    type: String
  },
  input: {
    default: ''
  },
  maxLength: { default: '' }
});
const keyboard = ref(null);
const inputValue = ref('');
const emit = defineEmits(['onChange', 'onKeyPress']);
const displayDefault = reactive({
  '{bksp}': 'backspace',
  '{lock}': 'caps',
  '{enter}': '无',
  '{tab}': 'tab',
  '{shift}': 'shift',
  '{change}': '中文',
  '{space}': ' ',
  '{clear}': '清空',
  '{close}': '关闭'
});

watch(
  () => unref(props).input,
  input => {
    keyboard.value.setInput(input);
  }
);

function onChange(input) {
  keyboard.value.setInput(input);
  emit('onChange', input);
}

function handleShift() {
  const currentLayout = keyboard.value.options.layoutName;
  const shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

  keyboard.value.setOptions({
    layoutName: shiftToggle
  });
}

function onKeyPress(button, $event) {
  // 点击关闭
  if (button === '{close}') {
    const keyboard = $event.path[3];
    keyboard.style.visibility = 'hidden';
    return false;
  } else if (button === '{change}') {
    // 切换中英文输入法
    if (keyboard.value.options.layoutCandidates !== null) {
      displayDefault['{change}'] = '中文';
      // 切换至英文
      keyboard.value.setOptions({
        layoutCandidates: null,
        display: displayDefault
      });
    } else {
      // 切换至中文
      displayDefault['{change}'] = '英文';
      keyboard.value.setOptions({
        layoutCandidates: layout.layoutCandidates,
        display: displayDefault
      });
    }
  } else if (button === '{clear}') {
    keyboard.value.clearInput();
  } else if (button === '{enter}') {
    // keyboard.value.setInput('')
    // emit('onKeyPress', button)
  } else {
    const value = inputValue.value + button;
    console.log(111);
    console.log(222);
    // 输入框有默认值时，覆写
    // if (value) {
    //   keyboard.value.setInput(value);
    // }
    emit('onKeyPress', button);
  }
  if (button === '{shift}' || button === '{lock}') handleShift();
}

onMounted(() => {
  keyboard.value = new Keyboard(props.keyboardClass, {
    onChange,
    onKeyPress,
    layoutCandidates: null,
    layout: {
      // 默认布局
      default: [
        '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        '{tab} q w e r t y u i o p [ ] \\',
        "{lock} a s d f g h j k l ; ' {enter}",
        '{shift} z x c v b n m , . /',
        '{change} {space} {clear}'
      ],
      // shift布局
      shift: [
        '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
        '{tab} Q W E R T Y U I O P { } |',
        '{lock} A S D F G H J K L : " {enter}',
        '{shift} Z X C V B N M < > ? ',
        '{change} {space} {clear}'
      ]
    },
    // 按钮展示文字
    display: displayDefault,
    // 按钮样式
    buttonTheme: [
      {
        class: 'hg-red close',
        buttons: '{close}'
      },
      {
        class: 'change',
        buttons: '{change}'
      }
    ],
    // 输入限制长度
    maxLength: props.maxLength,
    inputValue: props.input
  });
  inputValue.value = props.input;
});
</script>

<style scoped>
.hg-theme-default {
  background: white;
  color: black;
}
</style>
