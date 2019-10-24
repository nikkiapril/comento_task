<template>
    <div id="app"> 
        
        <div v-for="item in info" v-bind:key="item.title">
            {{item}}
        </div>
    </div>
</template>

<script>

    

    import axios from 'axios';

   

    export default {
        name: 'app',
        data: function () {
            return {
                info: null
            }
        },
    mounted() {
        this.$http.get('http://comento.cafe24.com/request.php', {
            params: {
                page: 1,
                ord: "asc"
            }
        }).then(function(res){
            console.log(res);
            var data = res.data.list;
            this.info = data;
            var html = "<tr>";
            for (var i = 0; i < data.length; i++) {
                html += "<td>" + data[i].title + "</td>";
            }
            html += "</tr>";
            console.log(html);
            
        }).catch(function (e) {
            console.log("ERROR: " + e);
        }).finally(()=>this.loading = false)

    }
    };
</script>

<style>
</style>

