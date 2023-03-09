import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);

const mutations={
    SELFDRAW: function(state,tile){
        state.me.number++;
        state.me.p_tile.unshift(tile);
    },
    // LEFTADDCARD: function(state,target){
    //     state.target.number++;
    // }
}

const actions={

}

const state={
    me : {
        number:0,
        p_tiles: []
        },
    front : {
        number:13,
    },
    left : {
        number:13,
    },
    right : {
        number:13,
        }
}
export default new Vuex.Store({
    actions,mutations,state
})