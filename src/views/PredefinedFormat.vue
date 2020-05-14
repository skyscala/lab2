<template>
  <div>  
    <form @submit="perform" class="form" novalidate="true">
      <div class="form-group" v-for="item in renderer.comps" :key="item.id">
        <h6 :for="item.id" class="control-label">{{item.label}}</h6>
        

        <input
          v-if="item.type==='text'"  
          v-model="item.value"
          type="text"
          class="form-control"
          :name="item.id"
          :placeholder="item.desc"
        />

        <select
          v-if="item.type==='select'"  
          v-model="item.value"          
          class="form-control">
          <option v-for="opt in item.options" :key="opt">{{opt}}</option>
        </select>

      </div>
      <div class="form-group">
        <button
          type="submit"   
          :disabled="busy"       
          class="btn btn-md btn-primary btn-block">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      busy: false,
      renderer: {
        comps: [
          {
            id: "id1",
            type: "select",
            options: ["opt1","opt2"],
            label: "Attr 1",
            desc: "Attribute 1",
            value: "opt1"
          },
          {
            id: "id2",
            type: "text",
            label: "Attr 2",
            desc: "Attribute 2",
            value: "Some text2"
          }
        ]
      }
    };
  },
  props: {
    params: {
      type: Object
    }
  },
  methods: {
    perform: function(e) {
      e.preventDefault();

      this.busy=true;
      var payload=this.renderer.comps.map(function(itm){          
          var obj={};
          obj[itm.id]=itm.value;
          return obj;
      });

      var url = ""
      fetch(url,{
          method: 'POST',
          body: JSON.stringify(payload),
          headers:{
              "Content-Type":"application/json"
          }
      }).then(res => {
          //if(res){
            //console.log(res);
          //}
          this.busy=false;
          return res.json();
      }).then(json => {          
          console.log(JSON.stringify(json));
      }).catch(function(err){
          if(err){
            console.log(err);
          }          
      });

      
    }
  }
};
</script>