import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);

/* eslint-disable*/
const mutations={
    get_me_id(state,player_id){
        console.log("get_me_id");
        state.me.id=player_id;
    },
    draw_self(state,tile){
        console.log();
        state.me.number++;
        state.me.p_tiles.unshift(tile);
    },

    draw_other(state,player_id){
        console.log("draw_other");
        const position = {
            "-1" : "left",
            "1" : "right",
            "2" : "front",
            "-2" : "front"
        };
        var str = player_id-state.me.player_id.toString();
        state[position[str]].number++;
    },

    action_choose(state,action){
        for(var i=0;i<action.length;i++){
            state.options.unshift(action[i]);
        }
    },

    countdown(state,time){
        state.time=time;
    },
}

const actions={

}

const state={
    me : {
        number:0,
        p_tiles: [],
        player_id:-1
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