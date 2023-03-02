<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-gestion-r-h></list-gestion-r-h>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListGestionRH from '@/components/gestionrhs/ListGestionRH'
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
      ListGestionRH
    },
    mounted: function() {
      this.$store.dispatch('gestionrhs/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'Gestion RH', icon: 'mdi-lock',link:'/gestionrhs',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des offres',
            disabled: true,
            to: '/gestionrhs',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
