// https://fuwu.taobao.com/ser/order/biz_order_list.htm#/
// 淘宝服务市场-订单管理-全部订单接口
fetch("https://h5api.m.taobao.com/h5/mtop.alibaba.topservice.order.list.get/1.0/?jsv=2.6.1&appKey=12574478&t=1720005563133&sign=5511df21e5cd1b31b2b6f9e27258325c&api=mtop.alibaba.topservice.order.list.get&v=1.0&valueType=string&dataType=originaljsonp&type=jsonp&callback=mtopjsonp8&data=%7B%22env%22%3A%22online%22%2C%22payUrl%22%3A%22%2Fser%2ForderPayNew.htm%22%2C%22pageSize%22%3A10%2C%22tabCode%22%3A%22all%22%2C%22currentPage%22%3A%221%22%7D", {
    "headers": {
        "Cookie": "cookie2=1e234335945f6ada7e02a258384aecb2; sg=47d; _m_h5_tk=d7cb05e49140bc80b122fb00dd912538_1720010538947; _m_h5_tk_enc=c08fdc2471fa66e51dddf689e800fd4e;"
    },
}).then(res => res.text()).then(console.log)