import { createStore } from "vuex";

const index = {
    namespaced: true,
    state: {
        series: []
    },
    getters: {
        getSeries(state) {
            return state.series
        }
    },
    mutations: {
        addSerie(state, serie) {
            state.series.push(serie);
        },
        deleteSerie(state, serie) {
            state.series = state.series.filter(s => s !== serie)
            console.log(state.series)
        }
    },
    actions: {
        addSerie({commit}, serie) {
            commit('addSerie', serie);
        },
        deleteSerie({commit}, serie) {
            commit('deleteSerie', serie)
        }
    }
}

const modules = { index };

export default createStore({modules})