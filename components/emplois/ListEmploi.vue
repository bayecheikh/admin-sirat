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
        @click="goToAddEmploi"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un emploi
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-emploi :tab="item.value"></table-emploi> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableEmploi from '@/components/emplois/TableEmploi'
  export default {
    components: {
      TableEmploi
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddEmploi() {      
        this.$router.push({path: '/gestionrhs/addGestionRH', query: {categorie_slug: "emplois"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>