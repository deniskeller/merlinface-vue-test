<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  components: {},
  props: {},
  data() {
    return {
      task_title: '',
      error: null,
    };
  },

  computed: {},

  watch: {
    task_title() {
      if (this.task_title !== '') {
        this.error = true;
      }
      this.error = false;
    },
  },

  methods: {
    ...mapMutations(['setPopup']),
    ...mapActions(['addTask']),

    handleAddTask() {
      if (this.task_title !== '') {
        this.addTask(this.task_title);
        this.task_title = '';
        this.setPopup(false);
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<template>
  <BasePopup class="add-task-popup">
    <BaseHeadline type="h2" class="add-task-popup__headline"
      >Добавить новую задачу</BaseHeadline
    >
    <div class="add-task-popup__content">
      <BaseInput
        v-model="task_title"
        class="add-task-popup__input"
        :error="error"
        @keyup.enter.native="handleAddTask"
      />
      <BaseButton class="add-task-popup__btn" @click.native="handleAddTask"
        >ОК</BaseButton
      >
    </div>
  </BasePopup>
</template>

<style lang="scss" scoped>
.add-task-popup {
  &__headline {
    margin-bottom: 40px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    min-height: 200px;
  }

  &__input {
  }

  &__btn {
    align-self: flex-end;
    margin-top: auto;
  }
}
</style>
