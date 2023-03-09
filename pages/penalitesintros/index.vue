<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-penalite-intro></list-penalite-intro>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListPenaliteIntro from '@/components/penalitesintros/ListPenaliteIntro'
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
      ListPenaliteIntro
    },
    mounted: function() {
      this.$store.dispatch('penalitesintros/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'penalitesintros', icon: 'mdi-lock',link:'/penalitesintros',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des pénalités intros',
            disabled: true,
            to: '/penalitesintros',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
