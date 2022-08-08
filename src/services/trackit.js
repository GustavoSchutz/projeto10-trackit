import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';


function postSignup(newUserData) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, newUserData);
    return promise;
  }

function postLogin(loginUserData) {
    const promise = axios.post(`${BASE_URL}/auth/login`, loginUserData);
    return promise;
}

function getHabitsList(tokenAuth) {
    const promise = axios.get(`${BASE_URL}/habits`, tokenAuth);
    return promise;
}
function postNewHabit(newHabitObj, tokenAuth) {
    const promise = axios.post(`${BASE_URL}/habits`, newHabitObj, tokenAuth);
    return promise;
}
  
  export { postSignup, postLogin, getHabitsList, postNewHabit };