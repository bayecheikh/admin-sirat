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
        @click="goToAddServiceAbonnement"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un service abonnement
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-service-abonnement :tab="item.value"></table-service-abonnement> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableServiceAbonnement from '@/components/servicesabonnements/TableServiceAbonnement'
  export default {
    components: {
      TableServiceAbonnement
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddServiceAbonnement() {      
        this.$router.push({path: '/contenus/addContenu', query: {categorie_slug: "service-abonnement"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>