import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios';

//Vue.prototype.$http = axios


new Vue({
    el: '#app',
    data() {
        return {
            info: null
        }
    },
    created: function () {
        var self = this;
        axios.get('http://comento.cafe24.com/request.php', {
            params: {
                page: 1,
                ord: "asc"
            }
        }).then(function (res) {
            console.log(res);
            var data = res.data.list;
            self.info = data;
            var html = "<tr>";
            for (var i = 0; i < data.length; i++) {
                html += "<td>" + data[i].title + "</td>";
            }
            html += "</tr>";
            console.log(html);

        }).catch(function (e) {
            console.log("ERROR: " + e);
        }).finally(() => this.loading = false)

    },
    components: { App },
    template: '<App/>'
})


Vue.config.productionTip = true;

//new Vue({
//    render: h => h(App)
//}).$mount('#app');

