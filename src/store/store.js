import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// we're creating a new Vuex store to put our data
export const store = new Vuex.Store({
    strict: true,
    // ==============================================
    // state ========================================
    // ==============================================
    state: {
        products: [
            { name: "Banana Skin", price: 20, id: 1 },
            { name: "Shiny Star", price: 40, id: 2 },
            { name: "Green Shell", price: 60, id: 3 },
            { name: "Red Shell", price: 80, id: 4 },
        ],
        // for user login
        isLoggedIn: false,
    },
    // ================================================
    // getters ========================================
    // ================================================
    getters: {
        saleProducts: (state) => {
            let saleProducts = state.products.map((product) => {
                return {
                    name: "💥 " + product.name + " 💥",
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    },
    // ==================================================
    // mutations ========================================
    // ==================================================
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload
            })
        },
        ChangeLoginStatus: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },
    },
    // ================================================
    // actions ========================================
    // ================================================
    actions: {
        reducePriceAction: (context, payload) => {
            // we're using setTimeout to simulate an async action
            setTimeout(() => {
                // we're calling the mutation here
                context.commit("reducePrice", payload)
            }, 2000)
        },
        UserLogin: (context) => {
            context.commit("ChangeLoginStatus")
        }
    }
})

