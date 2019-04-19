import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'
function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        put(action);
    }catch(e) {
        console.log('list.json获取失败');
    }
     
}

function* todoSaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
export default todoSaga;