<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-mission></list-mission>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListMission from '@/components/missions/ListMission'
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
      ListMission
    },
    mounted: function() {
      this.$store.dispatch('missions/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'missions', icon: 'mdi-lock',link:'/missions',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des missions',
            disabled: true,
            to: '/missions',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
