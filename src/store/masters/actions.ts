import { ActionType } from "./types/enums/action-type";
import axios from 'axios';
const actions = {
    async [ActionType.TEST](
        user: any
    ) {
        /* try {
            console.log(user);
            const response = await axios.post('https://sitovaminiapps.ru/api.php', {
                name: 'test',
                account_id: '1',
            });
            console.log(`Your referral code: ${response.data.referral_code}`);
          } catch (error: any) {
            console.log(error);
            console.log('Error registering user: ' + error.response.data.error);
          } */
         console.log("SSSS");
         
        console.log(user);
          axios.get('https://sitovaminiapps.ru/api.php')
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    },
};
export default actions;