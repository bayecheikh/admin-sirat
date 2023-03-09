<template>
  <div>
    <div class="d-flex border-bottom-solid">
      <div>
        <v-tabs v-model="tab">
          <v-tab class="text-normal" v-for="item in tabItems" :key="item.value"> {{item.title}}</v-tab>
        </v-tabs>
      </div>
      <div class="ml-auto p-2">
        <v-btn
        depressed
        rounded
        color="primary"
        @click="goToAddInfoUtile"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une information utile
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-info-utile :tab="item.value"></table-info-utile> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableInfoUtile from '@/components/infosutiles/TableInfoUtile'
  export default {
    components: {
      TableInfoUtile
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddInfoUtile() {      
        this.$router.push({path: '/contenus/addContenu', query: {categorie_slug: "informations-utiles"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>