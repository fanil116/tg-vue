import { ActionType, MutationType } from "./types";
import type { ActionTree } from "vuex";
import type { State } from "@/models/masters";
import type { RootState } from '../types';
import axios from 'axios';
const actions: ActionTree<State, RootState> = {
    async [ActionType.REGISTER_USER]({ commit }, user: any): Promise<void> {
        console.log(commit)
        console.log("register user");
        console.log(user);
        console.log(String(user.user.id));
        axios.post('https://sitovaminiapps.ru/api.php', {
            name: user.user.username,
            account_id: String(user.user.id),
            referred_by_code: ""
          })
          .then(response => {
            if (response.data.success) {
              console.log("есть пользователь")
            }
          })
          .catch(error => {
            console.log(error);
          });
    },
    async [ActionType.FETCH_USER](
        { commit },
        user: any
    ): Promise<void> {
        console.log("FETCH_USER");
        console.log(user);
          axios.get('https://sitovaminiapps.ru/api.php')
          .then(response => {
            console.log(response);
            commit(MutationType.SET_USERS, response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
    async [ActionType.CHECK_USER](
        { dispatch },
        user: any
    ): Promise<void> {
        console.log("CHECK_USER");
        console.log(user);
        const id = user.user.id;
        axios.post('https://sitovaminiapps.ru/api.php', { account_id: id})
        .then(response => {
          if (response.data.success && response.data.user) {
            console.log('User exists:', response.data.user);
          } else {
            console.log('User does not exist, adding new user.');
            dispatch(ActionType.REGISTER_USER, user);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
};
export default actions;