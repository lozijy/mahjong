import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);

//1
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
            state[(player_id-state.me.player_id-1).toString()].turn=0;
        }
    },

    accept_action_choose(state,action){
        for(var i=0;i<action.length;i++){
            state.options.push(action[i]);
        }
    },

    countdown(state,time){
        //游戏没开始时，修改准备倒计时
        state.time = time;

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

    //玩家加入
    join(state,data){
        state.number++;
        state.people.push(data);
    },
    //打牌部分，2个
    discard_self(state,tile_type){
        let index=state.me.p_tiles.indexOf(tile_type);
        state.me.p_tiles.splice(index, 1);
        //在discard_card里添加这张牌
        state.me.discarded_card.push(tile_type);
    },
    discard_other(state,data){
        let tile_type=data.tile_type;
        let player_index=data.player_index;
        const position = {
            "-1" : "left",
            "1" : "right",
            "2" : "front",
            "-2" : "front"
        };
        var str = (player_index-state.me.player_id).toString();
        state[position[str]].number--;
        state[position[str]].discarded_card.push(tile_type);    
    },

    //轮次部分，4个
    my_turn(state){
        state.left.turn=0;
        state.me.turn=1;
        state.right.turn=0;
        state.front.turn=0;
    },
    other_turn(state,player_index){
        const position = {
            "-1" : "left",
            "1" : "right",
            "2" : "front",
            "-2" : "front",
            "0" : "me"
        };
        const other=["me","front","left","right"]
        var str = (player_index-state.me.player_id).toString();
        state[position[str]].turn=1;
        for (let index = 0; index < 4; index++) {
            if(other[index]!==str){
                state[other[index]].turn=0;
            }
            
        }
    },
    //选择部分,3个
    accept_options(state,data){
        let player_index=data.player_index;
        let tiles=data.tiles;
        let target_player_index=data.target_player_index;
        const position = {
            "-1" : "left",
            "1" : "right",
            "2" : "front",
            "-2" : "front",
            "0" : "me"
        };
        let index;
        //发起者
        var str = (player_index-state.me.player_id).toString();
        if(str==="0"){
            for (let i = 0; i < tiles.length; i++) {
                index=state[position[str]].p_tiles.indexOf(tiles[i]);
                state[position[str]].p_tiles.splice(index,1);
            }
        }
        for (let index = 0; index < tiles.length; index++) {
            const element = tiles[index];
            state[position[str]].open.push(element);
        }
        //target
        var str_2=(target_player_index-state.me.player_id).toString();
            //删掉target的discarded_card的最后一张牌
        state[position[str_2]].discarded_card.splice(state[position[str]].discarded_card.length-1,1);
    },
    //为了防止多个吃选择的情况
    chi(state){
        let number=0;
        for (let index = 0; index < state.options.length; index++) {
            if(index>=0){
                const element = state.options[index];
                if(element.action==="chi"){
                    state.chi.push(element);
                    state.options.splice(index, 1);
                    index--;
                    number++;
                }
            }
        }
        if(number!==0) {
            state.options.push({action: "chi"});
        }
    },
    //清空选择
    clear_options(state){
        state.options=[];
    },
    clear_chi(state){
        state.chi=[];
    },

    //游戏结束
    end(state){
        state.ended=1;
    },
    //游戏信息
    end_info(state,data){
        state.end_type=data.end_type;
        state.winner=data.winner;
        state.loser=data.loser;
        state.attribute=data.attribute;
        state.score=data.score;
    },
    clear_end_info(state){
        state.end_type="";
        state.winner="";
        state.loser=[];
        state.attribute=[];
        state.score=[];
    },
    clear_game(state){
            state.started=0;
            state.ended=0;
            state.number=0;
            state.people=[];
            state.table_code=0;
            state.options=[];
            state.chi=[];
            //倒计时
            state.time= 0;
            state.yu_array=[5,6];
            state.end_type="";
            state.winner="";
            state.loser=[];
            state.attribute=[];
            state.score=[];
            state.me = {
                number:0,
                //位置
                player_id:-1,
                name:"",
                user_id:"",
                p_tiles:["1s","3s","3s"],
                open:[],
                discarded_card: [],
                score:0,
                turn:1
                };
            state.front = {
                //牌数
                number:0,
                //位置
                player_id:-1,
                open:[],
                discarded_card: [],
                name:"",
                user_id:"",
                total_score:0,
                turn:0
            };
            state.left = {
                //牌数
                number:0,
                //位置
                player_id:-1,
                open:[],
                discarded_card: [],
                name:"",
                user_id:"",
                total_score:0,
                turn:0
            };
            state.right = {
                //牌数
                number:0,
                //位置
                player_id:-1,
                open:[],
                discarded_card: [],
                name:"",
                user_id:"",
                total_score:0,
                turn:0
                };
    }
}

const actions={
    //排序,摸牌，打牌，做出选择

    //初始化，收到信息
    init_info(context,data){
        //开始游戏
        context.commit("start");
        context.commit("init", data.data);
        context.commit("my_sort");
    },

    //摸牌部分，同时可以决定该谁的轮次，收到消息
    draw_self(context,data){
        context.commit("my_turn");
        //修改余
        context.commit("yu");
        //排序:自己摸牌draw_self，打牌 go 自动打牌，
        context.commit("my_sort");
        context.commit("draw_self", data.data.tile);
    },
    //收到消息
    draw_other(context,data){
        context.commit("other_turn",data.data.player_index)
        //修改余
        context.commit("yu");
        context.commit("draw_other", data.data.player_index);
    },

    //分数部分，收到消息 逻辑没理清楚
    get_point(context,data){
        context.commit("get_point", data.point);
    },
    //收到信息的倒计时，收到消息
    countdown(context,data){
          context.commit("countdown", data.data.count);
    },
    //加入，收到消息
    join(context,data){
        context.commit("join", data.data);
    },

    //选择部分，三个函数
    //自己选择，非收到消息
    action_choose(context){
        //清空
        context.commit("clear_options");
        //排序
        context.commit("my_sort");
        context.commit("clear_chi");
    },
    //收到可以执行的操作的信息后修改store,收到消息
    accept_action_choose(context,data){
        //选择
        context.commit("accept_action_choose", data.data.action);
        context.commit("chi");
    },
    //收到玩家作出的操作,包括自己作出的操作和别人作出的操作，收到消息
    accept_options(context,data){
        let player_index=data.player_index;
        let my_index=context.state.me.player_id;
        context.commit("accept_options",data);
    },

    //打牌，要分成自己打牌和其他人打牌
    discard(context,data){
        let player_index=data.player_index;
        if(context.state.me.player_id===player_index){
            context.commit("discard_self",data.tile_type);
            context.commit("my_sort");
        }else{
            context.commit("discard_other",data);
        }
    },
    end(context,data){
        context.commit("end");
        context.commit("end_info",data);
    },
    clear_end_info(context){
        context.commit("clear_end_info");
    },

    //清除游戏内的内容
    clear_game(context){
        context.commit("clear_game");
    }




    
}

const state={
    //大厅
            //房间
            house: [],
    //游戏内
        //状态标志
            //游戏是否开始
            started:0,
            //游戏是否结束
            ended:0,
        //未开始
            //当前房间人数
            number:0,
            //房间里有哪些人
            people:[],
            table_code:0,
        //游戏开始动态更新
            me : {
                number:0,
                //位置
                player_id:-1,
                name:"",
                user_id:"",
                p_tiles:["1s","3s","3s"],
                open:[],
                discarded_card: [],
                score:0,
                turn:1
                },
            front : {
                //牌数
                number:0,
                //位置
                player_id:-1,
                open:[],
                discarded_card: [],
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
                open:[],
                discarded_card: [],
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
                open:[],
                discarded_card: [],
                name:"",
                user_id:"",
                total_score:0,
                turn:0
                },

            options:[],
            chi:[],
            //倒计时
            time: 0,
            yu_array:[5,6],
         //游戏结束根据信息进行修改   
            end_type:"",
            winner:"",
            loser:[],
            attribute:[],
            score:[]


    


    




    
}
export default new Vuex.Store({
    actions,mutations,state
})