<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-avis-generaux></list-avis-generaux>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListAvisGeneraux from '@/components/avisgeneraux/ListAvisGeneraux'
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
      ListAvisGeneraux
    },
    mounted: function() {
      this.$store.dispatch('avisgeneraux/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'avisgeneraux', icon: 'mdi-lock',link:'/avisgeneraux',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des avis généraux',
            disabled: true,
            to: '/avisgeneraux',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
