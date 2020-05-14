<template>
  <div>
    
    <form @submit="perform" class="form" novalidate="true">
      <div class="form-group" v-for="item in renderer.comps" :key="item.id">
        <h6 :for="item.id" class="control-label">{{item.label}}</h6>
        <input
          v-model="item.value"
          type="text"
          class="form-control"
          :name="item.id"
          :placeholder="item.desc"
        />
      </div>
      <div class="form-group">
        <button
          type="submit"          
          class="btn btn-md btn-primary btn-block">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      renderer: {
        comps: [
          {
            id: "id1",
            label: "Attr 1",
            desc: "Attribute 1",
            value: "Some text1"
          },
          {
            id: "id2",
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

      var payload=this.renderer.comps.map(function(itm){          
          var obj={};
          obj[itm.id]=itm.value;
          return obj;
      });

      alert(JSON.stringify(payload));
    }
  }
};
</script>