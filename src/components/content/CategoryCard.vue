<script>
import { mapMutations } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem,
  },
  props: {
    caterogy: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    ...mapMutations(['setPopup', 'setId', 'deleteCategory']),
    handleAddTask(id) {
      this.setId(id);
      this.setPopup('add-task-popup');
    },
    handleDeleteCategory(id) {
      this.setId(id);
      this.setPopup('confirm-category-popup');
    },
  },
};
</script>

<template>
  <div class="category-card">
    <div class="category-card__header">
      <BaseHeadline class="header-title" type="h2">{{
        caterogy.category_name
      }}</BaseHeadline>

      <BaseClose
        class="category-card__delete"
        @click.native="handleDeleteCategory(caterogy.category_id)"
      />
    </div>

    <div class="category-card__content">
      <TaskItem
        v-for="item in caterogy.category_tasks"
        :key="item.task_id"
        :item="item"
        :category_id="caterogy.category_id"
      />
      <div v-if="caterogy.category_tasks.length == 0" class="content-clear">
        Задач пока нет
      </div>
      <BaseButton
        class="add-task"
        type="green"
        @click.native="handleAddTask(caterogy.category_id)"
        >Добавить задачу</BaseButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-card {
  font-size: 20px;
  min-width: res(290, 400);
  min-height: res(300, 400);
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(180deg, #fff, #fff);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 2px solid $grey;
  }
  &__delete {
    width: em(18px);
    height: em(18px);
  }

  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: auto;

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

    .add-task {
      align-self: center;
      margin-top: auto;
    }
  }
}
</style>
