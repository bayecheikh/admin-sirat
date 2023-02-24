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
              <info-adherent></info-adherent>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-adherent></actions-adherent>
            </v-col>
          </v-row>      
    </v-card>
  </div> 
</div>
  
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoAdherent from '@/components/adherents/detail/InfoAdherent';
import ActionsAdherent from '@/components/adherents/detail/ActionsAdherent';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoAdherent,
      ActionsAdherent
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-utilisateurs')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Ajouter un adherent', icon: 'mdi-account-plus-outline',link:'/adherents/addAdherent',position:0 },
          { text: 'Liste des adherents', icon: 'mdi-account-group',link:'/adherents',position:1  }
        ],
        headerItems: [
        {
          text: 'Adherents',
          disabled: false,
          to: '/adherents',
          exact: true
        },
        {
          text: 'Detail adherent',
          disabled: true,
          to: '/adherents/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
