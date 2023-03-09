<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-mission-intro></list-mission-intro>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListMissionIntro from '@/components/missionsintros/ListMissionIntro'
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
      ListMissionIntro
    },
    mounted: function() {
      this.$store.dispatch('missionsintros/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'missionsintros', icon: 'mdi-lock',link:'/missionsintros',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des missions intro',
            disabled: true,
            to: '/missionsintros',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
