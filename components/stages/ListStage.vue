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
        @click="goToAddStage"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un stage
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-stage :tab="item.value"></table-stage> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableStage from '@/components/stages/TableStage'
  export default {
    components: {
      TableStage
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddStage() {      
        this.$router.push({path: '/gestionrhs/addGestionRH', query: {categorie_slug: "stages"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>