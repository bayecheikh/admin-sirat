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
        @click="goToAddTarifPeage"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un tarif péage
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-tarif-peage :tab="item.value"></table-tarif-peage> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableTarifPeage from '@/components/tarifspeages/TableTarifPeage'
  export default {
    components: {
      TableTarifPeage
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddTarifPeage() {      
        this.$router.push({path: '/contenus/addContenu', query: {categorie_slug: "tarifs-peages"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>