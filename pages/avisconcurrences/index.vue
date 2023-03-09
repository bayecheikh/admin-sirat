<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-avis-concurrence></list-avis-concurrence>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListAvisConcurrence from '@/components/avisconcurrences/ListAvisConcurrence'
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
      ListAvisConcurrence
    },
    mounted: function() {
      this.$store.dispatch('avisconcurrences/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'avisconcurrences', icon: 'mdi-lock',link:'/avisconcurrences',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des avis d\'appel à concurrence',
            disabled: true,
            to: '/avisconcurrences',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
