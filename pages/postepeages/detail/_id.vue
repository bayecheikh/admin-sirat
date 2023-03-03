<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-poste-peage></info-poste-peage>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-poste-peage></actions-poste-peage>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoPostePeage from '@/components/postepeages/detail/InfoPostePeage';
import ActionsPostePeage from '@/components/postepeages/detail/ActionsPostePeage';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoPostePeage,
      ActionsPostePeage
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'postepeages', icon: 'mdi-lock',link:'/postepeages',position:2  }
        ],
        headerItems: [
        {
          text: 'Poste de péage',
          disabled: false,
          to: '/postepeages',
          exact: true
        },
        {
          text: 'Détail poste de péage',
          disabled: true,
          to: '/postepeages/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
