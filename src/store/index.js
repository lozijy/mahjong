import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);

/* eslint-disable*/
const mutations = {
    draw_self(state, tile) {

        state.me.number++;
        state.me.p_tiles.unshift(tile);
        state.my_sort();
    },
    //余牌减少1
    yu(state) {

        if (state.yu_array[1] === 0) {
            state.yu_array[0] -= 1;
            state.yu_array[1] = 9;
        } else {
            state.yu_array[1]--;
        }
    },

    draw_other(state, player_id) {
        const position = {
            "-1": "left",
            "1": "right",
            "2": "front",
            "-2": "front"
        };
        var str = player_id - state.me.player_id.toString();
        state[position[str]].number++;
    },

    action_choose(state, action) {
        for (var i = 0; i < action.length; i++) {
            state.options.unshift(action[i]);
        }
    },

    countdown(state, time) {
        //游戏没开始时，修改准备倒计时
        if (state.started === 0) {
            state.countdown = time;
        }
        //否则修改游戏内倒计时
        else {
            state.time = time;
        }
    },
    //游戏开始，修改state
    start(state) {
        state.started = 1;
    },
    init(state, info) {

        //修改yu_array
        state.yu_array = [5, 6]
        //初始化
        state.me.name = info.self.name;
        state.me.user_id = info.self.user_id;
        state.me.p_tiles = info.self.close;
        state.me.open = info.self.open;
        state.me.discarded_card = info.self.discard;
        state.me.score = info.self.score;
        const position = {
            "-1": "left",
            "1": "right",
            "2": "front",
            "-2": "front"
        };
        for (let i = 0; i < 4; i++) {
            if (state.me.user_id === info.table[i].user_id) {
                state.me.player_id = i;
                break;
            }
        }
        for (let i = 0; i < 4; i++) {
            if (i !== state.me.player_id) {
                var str = i - state.me.player_id.toString();
                state[position[str]].player_id = i;
                state[position[str]].name = info.table[i].name;
                state[position[str]].user_id = info.table[i].user_id;
                state[position[str]].total_score = info.table[i].total_score;
                state[position[str]].number = 13;
            }
        }
        //排序
        state.my_sort();
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
    draw_flag(state, value) {
        state.draw_Flag = value;
    },
    //玩家加入
    join(state, data) {
        state.number++;
        state.people.unshift(data.data)
    },
    //清空选择
    clear_options(state) {
        state.options = [];
    },

    //自动打牌
    discard(state, tile_type, player_index) {
        if (player_index === state.me.player_id) {
            state.me.p_tiles.unshift(tile);
            //自动打牌后不能打牌
            state.draw_Flag = false;
            //排序

            state.my_sort();
            //在open里添加这张牌
            state.me.open.unshift("tile_type")
        } else {
            const position = {
                "-1": "left",
                "1": "right",
                "2": "front",
                "-2": "front"
            };
            var str = i - state.me.player_id.toString();
            state[position[str]].number--;
        }
    },
    chi(state) {
        var number = 0;
        var length = state.options.length;
        for (let index = 0; index < length; index++) {
            if (index >= 0) {
                const element = state.options[index];
                if (element.action === "chi") {
                    state.chi.unshift(element);
                    state.options.splice(index, 1);
                    index--;
                    number++;
                }
            }
            console.log(flag);
        }
        if (number > 0) {
            state.options.unshift({ action: "chi" });
        }
    }
}

const actions = {

}

const state = {
    //
    draw_Flag: false,
    me: {
        number: 0,
        //位置
        player_id: -1,
        name: "",
        user_id: "",
        p_tiles: ["1s", "2s", "3s"],
        open: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s"],
        discarded_card: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p"],
        score: 0,
    },
    front: {
        //牌数
        number: 0,
        //位置
        player_id: -1,
        discarded_card: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p"],
        open: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s"],
        name: "",
        user_id: "",
        total_score: 0
    },
    left: {
        //牌数
        number: 0,
        //位置
        player_id: -1,
        discarded_card: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p"],
        open: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s"],
        name: "",
        user_id: "",
        total_score: 0
    },
    right: {
        //牌数
        number: 0,
        //位置
        player_id: -1,
        discarded_card: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p"],
        open: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s"],
        name: "",
        user_id: "",
        total_score: 0
    },
    //游戏内倒计时
    time: 0,
    //准备倒计时
    countdown: 0,
    //分数
    points: [],
    options: [{ action: "chi", tiles: ["1s", "2s"] }, { action: "chi", tiles: ["2s", "3s"] }],
    chi: [],
    //房间
    house: [{ table_code: 1, players: [{ name: "1", user_id: 123 },{ name: "2", user_id: 123 },{ name: "3", user_id: 123 }, { name: "4", user_id: 123 }] }, { table_code: 2, players: [{ name: "1", user_id: 123 }, { name: "2", user_id: 123 },{ name: "3", user_id: 123 }] },{ table_code: 3, players: [{ name: "1", user_id: 123 }, { name: "2", user_id: 123 }] }],
    table_code: 0,
    //游戏是否开始
    started: 0,
    yu_array: [5, 6],
    //当前房间人数
    number: 0,
    //房间里有哪些人
    people: []

}
export default new Vuex.Store({
    actions, mutations, state
})