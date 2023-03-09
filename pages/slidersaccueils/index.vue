<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-slider-accueil></list-slider-accueil>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListSliderAccueil from '@/components/slidersaccueils/ListSliderAccueil'
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
      ListSliderAccueil
    },
    mounted: function() {
      this.$store.dispatch('slidersaccueils/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'slidersaccueils', icon: 'mdi-lock',link:'/slidersaccueils',position:2  }
        ],
        headerItems: [
          {
            text: 'Contenu',
            disabled: true,
            to: '/slidersaccueils',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
