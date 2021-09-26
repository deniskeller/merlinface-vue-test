<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  components: {},
  props: {},
  data() {
    return {
      category_name: '',
      error: null,
    };
  },

  computed: {},

  watch: {
    category_name() {
      if (this.category_name !== '') {
        this.error = true;
      }
      this.error = false;
    },
  },
  mounted() {},

  methods: {
    ...mapMutations(['setPopup']),
    ...mapActions(['addCategory']),

    handleAddCategory() {
      if (this.category_name !== '') {
        this.addCategory(this.category_name);
        this.category_name = '';
        this.setPopup(false);
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<template>
  <BasePopup class="add-category-popup">
    <BaseHeadline type="h2" class="add-category-popup__headline"
      >Добавить новую категорию</BaseHeadline
    >
    <div class="add-category-popup__content">
      <BaseInput
        v-model="category_name"
        class="add-category-popup__input"
        :error="error"
        @keyup.enter.native="handleAddCategory"
      />
      <BaseButton
        class="add-category-popup__btn"
        @click.native="handleAddCategory"
        >ОК</BaseButton
      >
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
