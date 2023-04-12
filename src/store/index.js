import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);

/* eslint-disable*/
const mutations={
    draw_self(state,tile){

        state.me.number++;
        state.me.p_tiles.unshift(tile);

    },
    //余牌减少1
    yu(state){

        if(state.yu_array[1]===0){
            state.yu_array[0]-=1;
            state.yu_array[1]=9;
        }else{
            state.yu_array[1]--;
        }
    },

    draw_other(state,player_id){
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
        //游戏没开始时，修改准备倒计时
        if(state.started===0){
            state.countdown=time;
        }
        //否则修改游戏内倒计时
        else {
            state.time = time;
        }
    },
    //游戏开始，修改state
    start(state){
        state.started=1;
    },
    init(state,info){

        //修改yu_array
        state.yu_array=[5,6]
        //初始化
        state.me.name=info.self.name;
        state.me.user_id=info.self.user_id;
        state.me.p_tiles=info.self.close;
        state.me.open=info.self.open;
        state.me.discarded_card=info.self.discard;
        state.me.score=info.self.score;
        const position = {
            "-1" : "left",
            "1" : "right",
            "2" : "front",
            "-2" : "front"
        };
        for (let i = 0; i < 4; i++) {
            if(state.me.user_id===info.table[i].user_id){
                state.me.player_id=i;
                break;
            }
        }
        for (let i = 0; i < 4; i++) {
            if(i!==state.me.player_id){
                var str = i-state.me.player_id.toString();
                state[position[str]].player_id=i;
                state[position[str]].name=info.table[i].name;
                state[position[str]].user_id=info.table[i].user_id;
                state[position[str]].total_score=info.table[i].total_score;
                state[position[str]].number=13;
            }
        }
    },
    my_sort(state) {
        state.me.p_tiles.sort(function (a, b) {
            if (a[1] == b[1]) {
                return Number(a[0]) - Number(b[0]);
            } else {
                return (a.codePointAt(1) - b.codePointAt(1));
            }
        })
    },
    //玩家加入
    join(state,data){
        state.number++;
    },
    //清空选择
    clear_options(state){
        state.options=[];
    }
}

const actions={

}

const state={
    me : {
        number:0,
        //位置
        player_id:-1,
        name:"",
        user_id:"",
        p_tiles:[],
        open:[],
        discarded_card: ["1s"],
        score:0,
        },
    front : {
        //牌数
        number:0,
        //位置
        player_id:-1,
        discarded_card:["2s"],
        open:[],
        name:"",
        user_id:"",
        total_score:0
    },
    left : {
        //牌数
        number:0,
        //位置
        player_id:-1,
        discarded_card:["3s"],
        open:[],
        name:"",
        user_id:"",
        total_score:0
    },
    right : {
        //牌数
        number:0,
        //位置
        player_id:-1,
        discarded_card:["4s"],
        open:[],
        name:"",
        user_id:"",
        total_score:0
        },
    //游戏内倒计时
    time: 0,
    //准备倒计时
    countdown:0,
    //分数
    points:[],
    options:[],
    //房间
    house: [],
    table_code:0,
    //游戏是否开始
    started:0,
    yu_array:[5,6],
    //当前房间人数
    number:0
}
export default new Vuex.Store({
    actions,mutations,state
})