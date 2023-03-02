<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-tarif-peage></list-tarif-peage>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListTarifPeage from '@/components/tarifspeages/ListTarifPeage'
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
      ListTarifPeage
    },
    mounted: function() {
      this.$store.dispatch('tarifspeages/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'tarifspeages', icon: 'mdi-lock',link:'/tarifspeages',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des tarifs péages',
            disabled: true,
            to: '/tarifspeages',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
