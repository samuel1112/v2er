import { combineReducers } from 'redux';
import {
    GET_LATEST,
    GET_NODES,
    GET_NODE_LIST,
    SET_TOPIC_VIEW,
    SET_TOPIC_DETAIL
} from './actions';

function topicType(state={type: 'latest', name: 'Latest'}, action){
    switch (action.type){
        case SET_TOPIC_VIEW:
            return action.topic;
        default:
            return state;
    }
}

function topicDetail(state=null, action){
    switch (action.type){
        case SET_TOPIC_DETAIL:
            return action.info;
        default:
            return state;
    }
}

function topics(state = [], action){
    switch (action.type){
        case GET_LATEST:
        case GET_NODE_LIST:
            return action.data;
        default:
            return state;
    }
}

function nodes(state=[], action){
    switch (action.type){
        case GET_NODES:
            return action.data;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    topicType,
    topicDetail,
    topics,
    nodes
});

export default todoApp