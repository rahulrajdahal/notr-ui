<!-- docs/components/ui/Tooltip.vue -->
<template>
  <div class="tooltip-container">
    <div
      class="tooltip-trigger"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
    >
      <slot name="trigger"></slot>
    </div>

    <div
      v-if="isVisible"
      class="tooltip-content"
      :class="[position, { visible: isVisible }]"
      :style="{ '--tooltip-bg': backgroundColor }"
    >
      <slot name="content"></slot>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  position: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom", "left", "right"].includes(value),
  },
  backgroundColor: {
    type: String,
    default: "#333",
  },
  delay: {
    type: Number,
    default: 100,
  },
});

const isVisible = ref(false);
let timeoutId = null;

const showTooltip = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    isVisible.value = true;
  }, props.delay);
};

const hideTooltip = () => {
  clearTimeout(timeoutId);
  isVisible.value = false;
};
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-trigger {
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  z-index: 100;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: var(--tooltip-bg);
  color: white;
  font-size: 14px;
  line-height: 1.4;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
}

.tooltip-content.visible {
  opacity: 1;
}

.tooltip-arrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: var(--tooltip-bg);
  transform: rotate(45deg);
}

/* Position classes */
.tooltip-content.top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}

.tooltip-content.top .tooltip-arrow {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.tooltip-content.bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
}

.tooltip-content.bottom .tooltip-arrow {
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.tooltip-content.left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 8px;
}

.tooltip-content.left .tooltip-arrow {
  right: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.tooltip-content.right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
}

.tooltip-content.right .tooltip-arrow {
  left: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}
</style>
