import LocalStorage from "@/plugin/LocalStorage";
// 把 plugin 引進來

Vue.use(Vuex)
// 把 localStorage 拆出去寫
const STORE = new LocalStorage('todo-vue')

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {

  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    CREATE_TODO({ commit }, { todo }) {

    },
    READ_TODOS({ commit }) {
      // 1. 讀取
      const todos = STORE.load()
      // 2. commit mutation
      commit('SET_TODOS', todos)
      // 3. return
      return {
        todos
      }
    },
    UPDATE_TODO({ commit }, { tId, todo }) {

    },
    DELETE_TODO({ commit }, { tId }) { }

  },
})