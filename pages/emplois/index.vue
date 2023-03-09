<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-emploi></list-emploi>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListEmploi from '@/components/emplois/ListEmploi'
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
      ListEmploi
    },
    mounted: function() {
      this.$store.dispatch('emplois/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'emplois', icon: 'mdi-lock',link:'/emplois',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des emplois',
            disabled: true,
            to: '/emplois',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
