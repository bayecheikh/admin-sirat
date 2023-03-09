<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-stage></list-stage>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListStage from '@/components/stages/ListStage'
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
      ListStage
    },
    mounted: function() {
      this.$store.dispatch('stages/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'stages', icon: 'mdi-lock',link:'/stages',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des stages',
            disabled: true,
            to: '/stages',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
