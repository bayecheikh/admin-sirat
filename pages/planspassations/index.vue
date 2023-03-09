<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-plan-passation></list-plan-passation>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListPlanPassation from '@/components/planspassations/ListPlanPassation'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListPlanPassation
    },
    mounted: function() {
      this.$store.dispatch('planspassations/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'planspassations', icon: 'mdi-lock',link:'/planspassations',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des plans de passation',
            disabled: true,
            to: '/planspassations',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
