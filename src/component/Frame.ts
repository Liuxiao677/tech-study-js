import { closeFrame, closeTaskWin, closeWin } from '../controller/frame';
import { frame, login, running, settings, taskStatus } from '../shared';
import { SettingType, TaskStatusType, TaskType } from '../types';
import { ref, watch, watchEffectRef, watchRef } from '../utils/composition';
import { createElementNode, createNSElementNode } from '../utils/element';
import { debounce } from '../utils/utils';

/**
 * @description 任务窗口
 * @returns
 */
function Frame() {
  // 最大化
  const max = ref(false);
  // 容器
  return createElementNode(
    'div',
    undefined,
    {
      class: watchEffectRef(() => `egg_frame_wrap${frame.show ? '' : ' hide'}`),
      onclick(e: Event) {
        e.stopPropagation();
      },
      onmousedown(e: Event) {
        e.stopPropagation();
      },
      onmousemove(e: Event) {
        e.stopPropagation();
      },
      onmouseup(e: Event) {
        e.stopPropagation();
      },
      onmouseenter(e: Event) {
        e.stopPropagation();
      },
      onmouseleave(e: Event) {
        e.stopPropagation();
      },
      onmouseover(e: Event) {
        e.stopPropagation();
      },
      ontouchstart(e: Event) {
        e.stopPropagation();
      },
      ontouchmove(e: Event) {
        e.stopPropagation();
      },
      ontouchend(e: Event) {
        e.stopPropagation();
      },
      oninput(e: Event) {
        e.stopPropagation();
      },
      onchange(e: Event) {
        e.stopPropagation();
      },
      onblur(e: Event) {
        e.stopPropagation();
      },
    },
    watchRef(
      () => [login.value, settings[SettingType.SAME_TAB]],
      () => {
        // 同屏任务
        if (login.value && settings[SettingType.SAME_TAB]) {
          return [
            // 遮罩
            createElementNode('div', undefined, { class: 'egg_frame_mask' }),
            // 窗口内容
            createElementNode(
              'div',
              undefined,
              {
                class: watchEffectRef(
                  () => `egg_frame_content_wrap ${max.value ? ' max' : ''}`
                ),
              },
              [
                // 窗口控制
                createElementNode(
                  'div',
                  undefined,
                  { class: 'egg_frame_controls_wrap' },
                  [
                    // 标题
                    createElementNode('div', undefined, {
                      class: 'egg_frame_title',
                    }),
                    createElementNode(
                      'div',
                      undefined,
                      {
                        class: 'egg_frame_controls',
                      },
                      [
                        // 隐藏
                        createElementNode(
                          'button',
                          undefined,
                          {
                            class: 'egg_frame_btn',
                            type: 'button',
                            title: '隐藏',
                            onclick: debounce(() => {
                              // 隐藏窗口
                              frame.show = false;
                            }, 300),
                          },
                          createNSElementNode(
                            'svg',
                            undefined,
                            {
                              viewBox: '0 0 1024 1024',
                              class: 'egg_icon',
                            },
                            createNSElementNode('path', undefined, {
                              d: 'M863.7 552.5H160.3c-10.6 0-19.2-8.6-19.2-19.2v-41.7c0-10.6 8.6-19.2 19.2-19.2h703.3c10.6 0 19.2 8.6 19.2 19.2v41.7c0 10.6-8.5 19.2-19.1 19.2z',
                            })
                          )
                        ),
                        // 改变大小
                        createElementNode(
                          'button',
                          undefined,
                          {
                            class: 'egg_frame_btn',
                            type: 'button',
                            title: '缩放',
                            onclick: debounce(() => {
                              max.value = !max.value;
                            }, 300),
                          },
                          createNSElementNode(
                            'svg',
                            undefined,
                            {
                              viewBox: '0 0 1024 1024',
                              class: 'egg_icon',
                            },
                            createNSElementNode('path', undefined, {
                              d: 'M609.52 584.92a35.309 35.309 0 0 1 24.98-10.36c9.37 0 18.36 3.73 24.98 10.36l189.29 189.22-0.07-114.3 0.57-6.35c3.25-17.98 19.7-30.5 37.9-28.85 18.2 1.65 32.12 16.92 32.09 35.2v200.23c-0.05 1.49-0.19 2.97-0.42 4.45l-0.21 1.13c-0.22 1.44-0.55 2.85-0.99 4.24l-0.57 1.62-0.56 1.41a34.163 34.163 0 0 1-7.62 11.36l2.12-2.4-0.14 0.14-0.92 1.06-1.06 1.2-0.57 0.57-0.56 0.57a36.378 36.378 0 0 1-16.23 8.39l-3.53 0.5-4.02 0.35h-199.6l-6.35-0.63c-16.73-3.06-28.9-17.63-28.93-34.64l0.56-6.35c3.07-16.76 17.67-28.93 34.71-28.92l114.29-0.14-189.07-189.1-4.09-4.94c-9.71-14.01-8.01-32.95 4.02-45.02z m-162.06 0c12.06 12.05 13.78 30.99 4.09 45.01l-4.09 4.94-189.15 189.08 114.3 0.14c17.04-0.01 31.65 12.17 34.71 28.92l0.57 6.35c-0.03 17.01-12.19 31.58-28.92 34.64l-6.35 0.63H173.09l-4.23-0.42-3.39-0.49a36.38 36.38 0 0 1-17.36-9.52l-1.06-1.13-0.98-1.13 0.98 1.06-1.97-2.26 0.85 1.06-0.42-0.56a35.137 35.137 0 0 1-3.74-5.64l-1.13-2.68a34.71 34.71 0 0 1-2.11-7.33l-0.28-1.13c-0.21-1.47-0.33-2.96-0.36-4.45V659.78c-0.03-18.28 13.89-33.55 32.09-35.2 18.2-1.65 34.65 10.87 37.9 28.85l0.57 6.35-0.07 114.36 189.29-189.22c13.77-13.77 36.11-13.77 49.88 0h-0.09z m-74.71-471.71l6.35 0.57c16.76 3.06 28.93 17.67 28.92 34.71l-0.63 6.35c-3.07 16.76-17.67 28.93-34.71 28.92l-114.3 0.14 189.15 189.08 4.09 4.94c10.26 15.02 7.42 35.37-6.55 47.01-13.98 11.63-34.51 10.74-47.42-2.07L208.29 233.71l0.07 114.3-0.57 6.35c-3.25 17.98-19.7 30.5-37.9 28.85-18.2-1.65-32.12-16.92-32.09-35.2V147.78c0-1.55 0.14-3.03 0.35-4.51l0.21-1.13c0.24-1.44 0.59-2.85 1.06-4.23a34.97 34.97 0 0 1 8.68-14.39l-2.12 2.4-0.42 0.57 1.55-1.84-0.99 1.06 0.92-0.98 2.26-2.33c3.04-2.73 6.52-4.92 10.3-6.49l2.82-1.06c3.45-1.07 7.04-1.62 10.65-1.62l-3.6 0.14h0.49l1.48-0.14h201.31z m512.91 0l1.41 0.14h0.42c2.43 0.29 4.84 0.79 7.19 1.48l2.82 1.06 2.61 1.2 3.04 1.76c2.09 1.33 4.03 2.89 5.78 4.66l1.13 1.2 0.78 0.98 0.21 0.14 0.49 0.64 2.33 3.17c2.35 3.83 3.98 8.07 4.8 12.49l0.21 1.13c0.21 1.48 0.35 2.96 0.35 4.44v200.37c-0.16 18.13-14.03 33.19-32.08 34.83-18.06 1.64-34.42-10.67-37.83-28.48l-0.57-6.35V233.65L659.54 422.87c-12.9 12.95-33.56 13.91-47.59 2.2-14.04-11.71-16.81-32.2-6.38-47.22l4.02-4.86 189.22-189.08-114.29-0.14c-17.06 0.04-31.71-12.14-34.78-28.92l-0.63-6.35c-0.01-17.04 12.16-31.65 28.93-34.71l6.35-0.57h201.27z m0 0',
                            })
                          )
                        ),
                        // 关闭
                        createElementNode(
                          'button',
                          undefined,
                          {
                            class: 'egg_frame_btn',
                            type: 'button',
                            title: '关闭',
                            onclick: debounce(() => {
                              // 关闭窗口
                              closeFrame();
                            }, 300),
                          },
                          createNSElementNode(
                            'svg',
                            undefined,
                            {
                              viewBox: '0 0 1024 1024',
                              class: 'egg_icon',
                            },
                            createNSElementNode('path', undefined, {
                              d: 'M453.44 512L161.472 220.032a41.408 41.408 0 0 1 58.56-58.56L512 453.44 803.968 161.472a41.408 41.408 0 0 1 58.56 58.56L570.56 512l291.968 291.968a41.408 41.408 0 0 1-58.56 58.56L512 570.56 220.032 862.528a41.408 41.408 0 0 1-58.56-58.56L453.44 512z',
                            })
                          )
                        ),
                      ]
                    ),
                  ]
                ),
                // 窗口内容
                createElementNode(
                  'div',
                  undefined,
                  {
                    class: 'egg_frame_content',
                  },
                  watchEffectRef(() =>
                    frame.src
                      ? [
                          createElementNode(
                            'iframe',
                            undefined,
                            {
                              class: 'egg_frame',
                              src: frame.src,
                              ref(ele) {
                                frame.ele = ele;
                              },
                            },
                            undefined
                          ),
                        ]
                      : undefined
                  )
                ),
              ],
              {
                onMounted() {
                  // 隐藏窗口
                  watch(
                    () => [
                      taskStatus.value,
                      running.value,
                      settings[SettingType.SAME_TAB],
                      settings[SettingType.SILENT_RUN],
                    ],
                    () => {
                      // 同屏任务
                      if (
                        settings[SettingType.SAME_TAB] &&
                        (taskStatus.value === TaskStatusType.START ||
                          taskStatus.value === TaskStatusType.PAUSE ||
                          running.value)
                      ) {
                        // 设置窗口显示
                        frame.show = !settings[SettingType.SILENT_RUN];
                      }
                    }
                  );
                },
              }
            ),
          ];
        }
      }
    ),
    {
      onMounted() {
        // 关闭窗口
        watch(
          () => [login.value, settings[SettingType.SAME_TAB]],
          () => {
            if (login.value) {
              if (settings[SettingType.SAME_TAB]) {
                frame.exist = true;
                closeWin();
              } else {
                closeFrame();
                frame.exist = false;
              }
            } else {
              closeWin();
              closeFrame();
              frame.exist = false;
            }
          }
        );
      },
    }
  );
}

export { Frame };
