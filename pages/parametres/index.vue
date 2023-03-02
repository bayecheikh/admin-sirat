<template>

  <div>
   
    <div class="custom-container bg-title-grey">
        <page-header :items="headerItems" class=""></page-header>  
        
    </div> 
    <input type="text" v-model="input" placeholder="Rechercher..." />
    <div class="custom-container mt-5 row">
     
      <v-card class="pl-10 pt-10 pb-10 pr-10 col-md-2 col-lg-2 col-sm-12 text-sm-center mb-4 mr-4 ml-4 mt-4" v-for="(item,i) in filteredList()" :key="i" >  
        <nuxt-link class="customTopNav" :to="item.href? item.href : null">
            <v-icon :color="$route.path==item.href?'primary':''">{{ item.icon }}</v-icon>
            <div :class="$route.path==item.href?'text-primary':''">{{ item.title }}</div>  
        </nuxt-link>
      </v-card>
      <div class="item error" v-if="input&&!filteredList().length">
        <p>Aucun résultat</p>
      </div>
  </div> 
</div>

</template>



<script>


  export default {
   
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    components: {
    },
    mounted: function() {
      this.layoutadmin= this.$getParametreMenu()
    },
    data:  function () {      
      return {
        input: '',
        layoutadmin:[] ,
        headerItems: [
          {
            text: 'Paramétrage',
            disabled: false,
            to: '/parametres',
            exact: true
          }
        ]    
      }
    },
    methods: {
      filteredList(){
      
      return ( this.layoutadmin.filter((component) => 
        component.title.toLowerCase().includes(this.input.toLowerCase())
        ))
        
        
        
        
      }
    }

  }
</script>

<style scoped>
input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}


.error {
  background-color: orangered
}

</style>
