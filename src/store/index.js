import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);

/* eslint-disable*/
const mutations={
    draw_self(state,tile){

        state.me.number++;
        state.me.p_tiles.push(tile);
        // state.my_sort();
        state.left.turn=0;
        state.me.turn=1;
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
            "-2" : "front",
            "0" : "me"
        };
        var str = player_id-state.me.player_id.toString();
        state[position[str]].number++;
        state[position[str]].turn=1;
        if(str==="2"||str==="-2"){
            state["right"].turn=0;
        }else{
            console.log(player_id-state.me.player_id-1);
            state[(player_id-state.me.player_id-1).toString()].turn=0;
        }
    },

    action_choose(state,action){
        for(var i=0;i<action.length;i++){
            state.options.push(action[i]);
        }
        state.me.turn=1;
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
        //排序
        // state.my_sort();
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
    discard_flag(state,value){
        state.discard_Flag=value;
    },
    //玩家加入
    join(state,data){
        state.number++;
        state.people.push(data);
    },
    //清空选择
    clear_options(state){
        state.options=[];
    },

    //打牌,我们要修改，p_tiles和discard_tile discarded_card
    discard(state,data){
        let tile_type=data.tile_type;
        let player_index=data.player_index;
        console.log(data.player_index);
        if(player_index===state.me.player_id){
            for (let index = 0; index < length; index++) {
                const element = state.me.p_tiles[index]; 
                if(element===tile_type){
                    console.log("delete");
                    state.me.p_tiles.splice(index, 1);
                    break;
                }
            }
            // this.my_sort();

            
            //自动打牌后不能打牌
            state.draw_Flag=false;
            //在discard_card里添加这张牌
            state.me.discarded_card.push(tile_type);
            //修改turn
            state.me.turn=0;
            state.right.turn=1;
        }else{
            const position = {
                "-1" : "left",
                "1" : "right",
                "2" : "front",
                "-2" : "front"
            };
            var str = player_index-state.me.player_id.toString();
            state[position[str]].number--;
            state[position[str]].turn=0; 
            state[position[str]].discarded_card.push(tile_type); 
            if(str==="2"||str==="-2"){
                state["left"].turn=1;
            }else{
                state[(player_index-state.me.player_id+1).toString()].turn=1;
            }
        }
    },
    chi(state){
        var number=0;
        var length=state.options.length;
        for (let index = 0; index < length; index++) {
            if(index>=0){
                const element = state.options[index];
                if(element.action==="chi"){
                state.chi.push(element);
                state.options.splice(index, 1);
                index--;
                number++;
                }
            }
            console.log(flag);
        }
        if(number>0){
        state.options.push({action:"chi"});
        }
    }
}

const actions={
    //游戏开始
    start(context){
        console.log(1);
    },
    //你的轮次
    yourTurn(context){
        console.log(1);
    },
    //做出一个选择
    choose(context){
        console.log(1);
    }
    
}

const state={
    //
    discard_Flag:false,
    me : {
        number:0,
        //位置
        player_id:-1,
        name:"",
        user_id:"",
        p_tiles:[],
        open:[],
        discarded_card: [],
        score:0,
        turn:0
        },
    front : {
        //牌数
        number:0,
        //位置
        player_id:-1,
        discarded_card:[],
        open:[],
        name:"",
        user_id:"",
        total_score:0,
        turn:0
    },
    left : {
        //牌数
        number:0,
        //位置
        player_id:-1,
        discarded_card:[],
        open:[],
        name:"",
        user_id:"",
        total_score:0,
        turn:0
    },
    right : {
        //牌数
        number:0,
        //位置
        player_id:-1,
        discarded_card:[],
        open:[],
        name:"",
        user_id:"",
        total_score:0,
        turn:0
        },
    //游戏内倒计时
    time: 0,
    //准备倒计时
    countdown:0,
    //分数
    points:[],
    options:[],
    chi:[],
    //房间
    house: [],
    table_code:0,
    //游戏是否开始
    started:0,
    yu_array:[5,6],
    //当前房间人数
    number:0,
    //房间里有哪些人
    people:[]
    
}
export default new Vuex.Store({
    actions,mutations,state
})