import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popup: null,
    id: null,
    task_id: null,
    categories: [
      {
        category_id: 1,
        category_name: 'дом',
        category_tasks: [
          { task_id: 1, task_title: 'зарядка', done: true },
          { task_id: 2, task_title: 'поесть', done: true },
          { task_id: 3, task_title: 'поработать', done: false },
        ],
      },
      {
        category_id: 2,
        category_name: 'стройка',
        category_tasks: [
          { task_id: 1, task_title: 'демонтаж', done: true },
          { task_id: 2, task_title: 'вынос мусора', done: false },
        ],
      },
    ],
  },
  mutations: {
    setPopup(state, value) {
      state.popup = value;
    },

    setId(state, id) {
      state.id = id;
    },

    setTaskId(state, id) {
      state.task_id = id;
    },

    setCategories(state, categories) {
      state.categories = categories;
    },

    addCategory(state, category) {
      state.categories.push(category);
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },

    addTask(state, task) {
      state.categories.filter((category) => {
        if (category.category_id == state.id) {
          category.category_tasks.push(task);
          localStorage.setItem('categories', JSON.stringify(state.categories));
        }
      });
    },

    deleteCategory(state) {
      state.categories = state.categories.filter((category) => {
        if (category.category_id !== state.id) {
          return category;
        }
      });
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },

    deleteTask(state) {
      state.categories.forEach((category, index) => {
        if (category.category_id == state.id) {
          state.categories[index].category_tasks =
            category.category_tasks.filter((item) => {
              if (item.task_id != state.task_id) {
                return item;
              }
            });
        }
      });
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },

    doneTask(state, task) {
      state.categories.forEach((category, index) => {
        if (category.category_id == state.id) {
          state.categories[index].category_tasks.forEach((item, i) => {
            if (item.task_id == task.task_id) {
              state.categories[index].category_tasks[i].done = task.done;
              localStorage.setItem(
                'categories',
                JSON.stringify(state.categories)
              );
            }
          });
        }
      });
    },
  },

  actions: {
    addCategory(ctx, category_name) {
      const category_id = Date.now();
      const category = {
        category_id,
        category_name,
        category_tasks: [],
      };
      ctx.commit('addCategory', category);
    },

    addTask(ctx, task_title) {
      const task_id = Date.now();
      const task = {
        task_id,
        task_title,
        done: false,
      };
      ctx.commit('addTask', task);
    },
  },

  modules: {},
});
