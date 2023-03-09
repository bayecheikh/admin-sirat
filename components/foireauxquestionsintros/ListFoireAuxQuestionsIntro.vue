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
        @click="goToAddQRInfo"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une intro
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-foire-aux-questions-intro :tab="item.value"></table-foire-aux-questions-intro> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableFoireAuxQuestionsIntro from '@/components/foireauxquestionsintros/TableFoireAuxQuestionsIntro'
  export default {
    components: {
      TableFoireAuxQuestionsIntro
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddQRInfo() {      
        this.$router.push({path: '/contenus/addContenu', query: {categorie_slug: "foire-aux-questions-intro"}});
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>