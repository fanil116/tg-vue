import { ActionType } from "./types/enums/action-type";
import axios from 'axios';
const actions = {
    async [ActionType.TEST](
        user: any
    ) {
        try {
            console.log(user);
            const response = await axios.post('http://127.0.0.1:5000/register', {
                name: 'test',
                account_id: '1',
            });
            console.log(`Your referral code: ${response.data.referral_code}`);
          } catch (error: any) {
            console.log(error);
            console.log('Error registering user: ' + error.response.data.error);
          }
    },
};
export default actions;