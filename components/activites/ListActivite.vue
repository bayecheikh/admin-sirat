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
        @click="goToAddActivite"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une activité
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-activite :tab="item.value"></table-activite> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableActivite from '@/components/activites/TableActivite'
  export default {
    components: {
      TableActivite
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddActivite() {      
        this.$router.push({path: '/contenus/addContenu', query: {categorie_slug: "activites"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>