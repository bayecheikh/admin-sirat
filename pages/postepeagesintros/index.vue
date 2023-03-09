<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-poste-peage-intro></list-poste-peage-intro>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListPostePeageIntro from '@/components/postepeagesintros/ListPostePeageIntro'
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
      ListPostePeageIntro
    },
    mounted: function() {
      this.$store.dispatch('postepeagesintros/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'postepeagesintros', icon: 'mdi-lock',link:'/postepeagesintros',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des postes de péage intro',
            disabled: true,
            to: '/postepeagesintros',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
