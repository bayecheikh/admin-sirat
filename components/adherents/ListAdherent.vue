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
        @click="goToAddAdherent"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouvel adherent
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-adherent :tab="item.value"></table-adherent> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableAdherent from '@/components/adherents/TableAdherent'
  export default {
    components: {
      TableAdherent
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}
      ],
      selected: []
    }),
    methods: {
      goToAddAdherent({ $goToAddAdherent}){
        $goToAddAdherent()
      }
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>