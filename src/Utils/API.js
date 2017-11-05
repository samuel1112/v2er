const HOST_URI = 'https://www.v2ex.com/api/';

// 获取节点
// 所有的节点
const ALL_NODE = 'nodes/all.json';
// 获取节点信息 
// 节点id :id 节点名 :name
const NODE_INFO = 'nodes/show.json';

// 获取主题
// 取最新的主题
const LATEST_TOPIC = 'topics/latest.json';
// 获取热议主题
const HOT_TOPIC = 'topics/hot.json';
// 获取主题信息  :id | (:username | :node_id | :node_name)
const GET_TOPICS = 'topics/show.json';


// 获取回复 :topic_id (:page , :page_size)?
const GET_REPLIES = 'replies/show.json';


// 获取用户信息
const GET_USERINFO = 'members/show.json';

function _obj2uri(obj){
    if(!obj){
        return '';
    }
    return '?'+Object.keys(obj).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
    }).join('&');
}


function _getAllNode(){
    return HOST_URI+ALL_NODE;
}

function _getNodeInfo(o){
    return HOST_URI+NODE_INFO+_obj2uri(o);
}

function _getLatestTopic(o){
    return HOST_URI+LATEST_TOPIC+_obj2uri(o);
}

function _getReplies(o){
    return HOST_URI+GET_REPLIES+_obj2uri(o);
}

function getData(api, data){
    return fetch(api(data)).then(res=>{
        console.log(res);
        return res.json()
    });
}

export default {
    getAllNode(data){
        return getData(_getAllNode, data);
    },
    getNodeInfo(data){
        return getData(_getNodeInfo, data);
    },
    getLatestTopic(data){
        return getData(_getLatestTopic, data);
    },
    getReplies(data){
        return getData(_getReplies, data);
    }
};
