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
        @click="goToAddAvisGeneraux"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un avis général
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-avis-generaux :tab="item.value"></table-avis-generaux> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableAvisGeneraux from '@/components/avisgeneraux/TableAvisGeneraux'
  export default {
    components: {
      TableAvisGeneraux
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddAvisGeneraux() {      
        this.$router.push({path: '/marchespublics/addMarchePublic', query: {categorie_slug: "avis-generaux"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>