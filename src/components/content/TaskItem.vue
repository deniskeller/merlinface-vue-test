<script>
import { mapMutations } from 'vuex';

export default {
  components: {},
  props: {
    item: {
      type: Object,
      default: function () {
        return {};
      },
    },
    category_id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    ...mapMutations([
      'setId',
      'setPopup',
      'setTaskId',
      'deleteTask',
      'doneTask',
    ]),

    handleDeleteTask(category_id, task_id) {
      this.setId(category_id);
      this.setTaskId(task_id);
      this.setPopup('confirm-task-popup');
    },

    handleDoneTask(category_id, task) {
      this.setId(category_id);
      this.doneTask(task);
    },
  },
};
</script>

<template>
  <div class="">
    <div class="task-item">
      <BaseCheckbox
        class="task-item__checkbox"
        :is_active="item.done"
        v-model="item.done"
        @click.native="handleDoneTask(category_id, item)"
      >
        <div class="task-item__title">{{ item.task_title }}</div>
      </BaseCheckbox>

      <BaseClose
        class="task-item__delete"
        @click.native="handleDeleteTask(category_id, item.task_id)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px 0px;

  &__title {
    font-size: em(16px);
  }

  &__delete {
    width: em(13px);
    height: em(13px);
    margin-left: auto;
  }
}
</style>
