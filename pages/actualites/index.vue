<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-actualite></list-actualite>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListActualite from '@/components/actualites/ListActualite'
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
      ListActualite
    },
    mounted: function() {
      this.$store.dispatch('actualites/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'actualites', icon: 'mdi-lock',link:'/actualites',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des actualités',
            disabled: true,
            to: '/actualites',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
