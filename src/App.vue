<script>
import { mapState, mapMutations } from 'vuex';
import CategoryCard from './components/content/CategoryCard.vue';
import AddCategoryPopup from './components/content/AddCategoryPopup.vue';
import AddTaskPopup from './components/content/AddTaskPopup.vue';
import ConfirmCategoryPopup from './components/content/ConfirmCategoryPopup.vue';
import ConfirmTaskPopup from './components/content/ConfirmTaskPopup.vue';

export default {
  components: {
    CategoryCard,
    AddCategoryPopup,
    AddTaskPopup,
    ConfirmCategoryPopup,
    ConfirmTaskPopup,
  },
  data() {
    return {};
  },
  created() {
    if (JSON.parse(localStorage.getItem('categories'))) {
      this.setCategories(JSON.parse(localStorage.getItem('categories')));
    }
  },
  computed: {
    ...mapState(['popup', 'categories']),
  },
  mounted() {},
  watch: {},
  methods: {
    ...mapMutations(['setPopup', 'setCategories']),
  },
};
</script>

<template>
  <div id="app">
    <BaseHeadline class="headline">Мои дела</BaseHeadline>
    <BaseButton
      v-if="categories.length <= 2"
      class="add_category"
      @click.native="setPopup('add-category-popup')"
      >Добавить новую категорию</BaseButton
    >

    <BaseContainer class="content">
      <CategoryCard
        v-for="caterogy in categories"
        :key="caterogy.id"
        :caterogy="caterogy"
        class="category-card"
      />
      <div v-if="categories.length == 0" class="catetories-clear">
        Категорий пока нет
      </div>
    </BaseContainer>

    <transition name="layout-fade">
      <div v-if="popup" class="layout__fade" @click="setPopup(null)" />
    </transition>
    <AddCategoryPopup />
    <AddTaskPopup />
    <ConfirmCategoryPopup />
    <ConfirmTaskPopup />
  </div>
</template>

<style lang="scss" scoped>
#app {
  background: linear-gradient(180deg, #5c26c8, #0f67f0) fixed;
  padding: 40px;
  @include ifmobile {
    padding: 10px;
  }
}

.headline {
  border-bottom: 3px solid #eee;
  margin-bottom: 40px;
}

.content {
  min-height: 100vh;
}

.layout__fade {
  position: absolute;
  @extend %background-gradient;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: 10;
}

.layout-fade-enter-active,
.layout-fade-leave-active {
  transition: opacity $speed;
}
.layout-fade-enter,
.layout-fade-leave-to {
  opacity: 0;
}

.add_category {
  width: res(290, 400);
  margin-bottom: 20px;
}
</style>
