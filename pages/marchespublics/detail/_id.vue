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
              <info-marche-public></info-marche-public>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-marche-public></actions-marche-public>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoMarchePublic from '@/components/marchespublics/detail/InfoMarchePublic';
import ActionsMarchePublic from '@/components/marchespublics/detail/ActionsMarchePublic';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoMarchePublic,
      ActionsMarchePublic
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
          { text: 'marchespublics', icon: 'mdi-lock',link:'/marchespublics',position:2  }
        ],
        headerItems: [
        {
          text: 'Marchés publics',
          disabled: false,
          to: '/marchespublics',
          exact: true
        },
        {
          text: 'Détail marché public',
          disabled: true,
          to: '/marchespublics/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
