<script>
import { mapMutations } from 'vuex';

export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    ...mapMutations(['setPopup', 'deleteCategory']),
    handleDeleteCategory() {
      this.deleteCategory();
      this.setPopup(false);
    },
  },
};
</script>

<template>
  <BasePopup class="confirm-category-popup">
    <BaseHeadline type="h2" class="add-category-popup__headline"
      >Уверены, что хотите удалить категорию?</BaseHeadline
    >
    <div class="add-category-popup__content">
      <div class="">
        <BaseButton
          class="add-category-popup__btn"
          @click.native="handleDeleteCategory"
        >
          да
        </BaseButton>
        <BaseButton
          type="orange"
          class="add-category-popup__btn"
          @click.native="setPopup(false)"
        >
          нет
        </BaseButton>
      </div>
    </div>
  </BasePopup>
</template>

<style lang="scss" scoped>
.add-category-popup {
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
