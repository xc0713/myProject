const search = {
    state: {
        storeList: [],
        HotSearch:[],
        ModuleList:[],
        SearchList:[]
    },
    mutations: {
        setstoreList(state,payload){
            state.storeList = payload;
        },
        setHotSearch(state,payload){
            state.HotSearch = payload;
        },
        setModule(state,payload){
            state.ModuleList = payload
        },
        setSearchList(state,payload){
            state.SearchList = payload
        }
    },
    actions: {
        getStoreList(store, defaultType,plower1,plower2,plower3,pageNum) {
            let baseUrl = "https://jbiz.share1diantong.com";
            plower1 = plower1 ? 1 : 0;
            plower2 = plower2 ? 1 : 0;
            plower3 = plower3 ? 1 : 0;
            pageNum = pageNum ? pageNum : 1
            wx.request({
                url: baseUrl + '/as/index/cate/v1',
                data: {
                    "cateTag": defaultType, // 全部  || 品牌  || …
                    "fixedFlower": plower1, //一口花  1 或者 0
                    "isNew": plower2,  //是否全新  1 或者 0
                    "isLocal": plower3, // 是否同城   1或者0
                    "status": 1,
                    "bid": 0,
                    "orderBy": 0,
                    "pageSize": 20,// 页数
                    "pageNum": pageNum // 分页值
                },
                method: 'POST', // 设置请求的 header
                success: function (res) {// success
                    console.log(res.data.data.recommends)
                    store.commit("setstoreList",res.data.data.recommends)
                }
            })
        },
        getSearch(store){
            wx.request({
                url: 'https://jbiz.share1diantong.com/fa053/search/recommendKw',
                method: 'POST', // 设置请求的 header
                success: function(res){// success
                    // console.log(res.data.data)
                    store.commit("setHotSearch",res.data.data)
                }
            })
        },
        getModule(store,valIpt){
            wx.request({
                url: 'https://jbiz.share1diantong.com/fa053/search/associateKw',
                data: {
                    "kw": valIpt
                },
                method: 'POST', // 设置请求的 header
                success: function(res){
                    // console.log(res.data.data.output.kwRes)
                    store.commit("setModule",res.data.data.output.kwRes)
                }
            })
        },
        getSearchList(store,item){
            wx.request({
                url: 'https://jbiz.share1diantong.com/fa053/topic/search/v1',
                data: {
                    "pageNum": 1,
                    "kw": item,
                    "pageSize": 10,
                    "userId": 0
                },
                method: 'POST',// 设置请求的 header
                success: function(res){
                    console.log(res.data.data.list);
                    store.commit("setSearchList",res.data.data.list)
                }
            })
        }

    }
}

export default search
