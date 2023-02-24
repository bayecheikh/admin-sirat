<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-projet></list-projet>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListProjet from '@/components/projets/ListProjet'
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
      ListProjet
    },
    mounted: function() {
      this.$store.dispatch('projets/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'projets', icon: 'mdi-lock',link:'/projets',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des projets',
            disabled: true,
            to: '/projets',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
