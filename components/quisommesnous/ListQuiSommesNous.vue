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
        @click="goToAddquisommesnous"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une rubrique
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-qui-sommes-nous :tab="item.value"></table-qui-sommes-nous> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableQuiSommesNous from '@/components/quisommesnous/TableQuiSommesNous'
  export default {
    components: {
      TableQuiSommesNous
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddquisommesnous() {      
        this.$router.push({path: '/contenus/addContenu', query: {categorie_slug: "qui-sommes-nous"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>