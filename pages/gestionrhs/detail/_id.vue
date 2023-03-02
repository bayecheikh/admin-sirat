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
              <info-gestion-r-h></info-gestion-r-h>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-gestion-r-h></actions-gestion-r-h>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoGestionRH from '@/components/gestionrhs/detail/InfoGestionRH';
import ActionsGestionRH from '@/components/gestionrhs/detail/ActionsGestionRH';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoGestionRH,
      ActionsGestionRH
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
          { text: 'Gestion RH', icon: 'mdi-lock',link:'/gestionrhs',position:2  }
        ],
        headerItems: [
        {
          text: 'Offres',
          disabled: false,
          to: '/gestionrhs',
          exact: true
        },
        {
          text: 'Détail offre',
          disabled: true,
          to: '/gestionrhs/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
