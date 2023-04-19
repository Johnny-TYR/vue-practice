import Vue from "vue";
import Vuex from "vuex";

// 把 plugin 引進來
import LocalStorage from "@/plugin/LocalStorage";

Vue.use(Vuex);

// 把 localStorage 拆出去寫
const STORAGE = new LocalStorage('todoItem-vue')

// we're creating a new Vuex store to put our data
export const store = new Vuex.Store({
    strict: true,
    // ============================================================================================
    // STATE
    // ============================================================================================
    state: {
        // ----------------Fruit Shop------------------------
        products: [
            { name: "Banana Skin", price: 20, id: 1 },
            { name: "Shiny Star", price: 40, id: 2 },
            { name: "Green Shell", price: 60, id: 3 },
            { name: "Red Shell", price: 80, id: 4 },
        ],
        // for user login
        isLoggedIn: false,
        // ----------------TodoItem List------------------------
        todoList: []
    },
    // ==============================================================================================
    // GETTERS
    // ==============================================================================================
    getters: {
        // ----------------Fruit Shop------------------------
        saleProducts: (state) => {
            let saleProducts = state.products.map((product) => {
                return {
                    name: "💥 " + product.name + " 💥",
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
        // ----------------TodoItem List------------------------
    },
    // ================================================================================================
    // MUTATIONS
    // ================================================================================================
    mutations: {
        // ----------------Fruit Shop------------------------
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload
            })
        },
        ChangeLoginStatus: (state) => {
            state.isLoggedIn = true
        },
        ChangeLogoutStatus: (state) => {
            state.isLoggedIn = false
        },
        ToggleLoginStatus: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },
        // ----------------TodoItem List------------------------
        SET_TODOS(state, todoList) {
            state.todoList = todoList
        }
    },
    // ==============================================================================================
    // ACTIONS 
    // ==============================================================================================
    actions: {
        // ----------------Fruit Shop------------------------
        reducePriceAction: (context, payload) => {
            // we're using setTimeout to simulate an async action
            setTimeout(() => {
                // we're calling the mutation here
                context.commit("reducePrice", payload)
            }, 2000)
        },
        UserLogin: (context) => {
            context.commit("ChangeLoginStatus")
        },
        UserLogout: (context) => {
            context.commit("ChangeLogoutStatus")
        },
        ToggleLoginStatus: (context) => {
            context.commit("ToggleLoginStatus")
        },
        // ----------------Todo List------------------------
        CREATE_TODO({ commit }, { todoItem }) {
        },
        READ_TODOS({ commit }) {
            // 1. 讀取
            const todoList = STORAGE.load()
            // 2. commit mutation
            commit('SET_TODOS', todoList)
            // 3. return
            return {
                todoList
            }
        },
        UPDATE_TODO({ commit }, { tId, todoItem }) {

        },
        DELETE_TODO({ commit }, { tId }) { }
    }
})

