<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Titre *"
            outlined dense
            v-model="model.titre"
            :rules="rules.titreRules"
          ></v-text-field>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-textarea
            label="Résumé *"
            outlined dense
            v-model="model.resume"
            :rules="rules.resumeRules"
          ></v-textarea>
        </v-col>
        <v-col md="12" lg="12" sm="12" >
          <p>Contenu *</p>
          <template>
            <ClientOnly>
              <!-- Use the component in the right place of the template -->
              <tiptap-vuetify
                v-model="body"
                :extensions="extensions"
                :card-props="{ flat: false, color: '' }"
              />
            </ClientOnly>
          </template>
        </v-col>
        <div v-if="$v.body.$error">
          <span class="errorcustom">Le contenu est obligatoire</span>
        </div>
       
        <v-col
        lg="12"
        md="12"
        sm="12"
        >
          <v-autocomplete
              v-model="model.categories"
              :items="listcategories"
              :rules="rules.categoriesRules"
              outlined
              dense
              small-chips
              label="Catégorie *"
              item-text="libelle"
              item-value="id"
              return-object
              @change="changeCategorie"
            >
          </v-autocomplete>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Lien externe (optionel)"
            outlined dense
            v-model="model.lien"
            :rules="rules.lienRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row  class="mb-6">
        <v-col md="6" lg="6" sm="12">
            <v-flex>
              <v-btn
                color="grey"
                class="white--text"
                @click="$refs.file.click()"
                depressed
              >
                Image
                <v-icon right dark> mdi-cloud-upload </v-icon>
              </v-btn>
            </v-flex>
            <v-flex>{{filename}}</v-flex>
            <template>
            <form @submit.prevent="onSubmit">
            <input
              type="file"
              id="file"
              name="futured_image"
              ref="file"
              v-on:change="handleFileUpload"
              style="display: none"
             
            />
            
          </form>
        </template>
          </v-col>
      </v-row>
      <v-btn
      :loading="loading"
        :disabled="!valid"
        depressed
        class="mr-4 text-white" color="#1B73E8"
        @click="submitForm"
      >
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { required, helpers  } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'

    const notEmptyParagraph = (value) => {
      const regex = /<p>(\s*)<\/p>/gi;
      const trimmedValue = value.replace(regex, "<p></p>");
      if (trimmedValue === "<p></p>") {
        return false;
      }
      return true;
    };

  export default {
    mixins: [validationMixin],
    methods: {
    downloadFile(lien) {
      window.location.href = lien;
    },
  },
    components: {
      TiptapVuetify
    },
    mounted: function() {
      this.$store.dispatch('categories/getList')
      if(this.$route.query.categorie_slug){
        this.getCategorie()
      }
    },
    computed: {
      ...mapGetters({
      listcategories: 'categories/listcategories',
    })},
    validations: {
 body: {
      required,
      notEmptyParagraph,
    },
   
  },
    data: () => ({
      body: ``,
      extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
      ],
      loading: false,
      message:null,
      color:null,
      valid: true,
      selectedItem: 0,
      valid: true,
      filename : '',
      
      model: {
        futured_image:'',
        titre: '',
        resume: '',
        categories: null,
        categorie:'',
        id_categorie:'',
        lien:''
      },
      rules:{
        titreRules: [
          v => !!v || 'Le titre est obligatoire',
          (v) => (v && v.length <= 200) || "Le titre ne doit pas dépasser 200 caractères",
          (v) => (v && v.length >= 2) || "Le titre doit contenir au moins 2 caractères"
        ],
        resumeRules: [
          v => !!v || 'Le résumé est obligatoire',
          (v) => (v && v.length <= 500) || "Le résumé ne doit pas dépasser 500 caractères",
          (v) => (v && v.length >= 2) || "Le résumé doit contenir au moins 2 caractères"
        ],
        categoriesRules: [
          v => !!v || 'La catégorie est obligatoire',
        ],
        lienRules: [
        (v) => !v || /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|^www\.[^\s/$.?#].[^\s]*$/i.test(v) || "Le lien doit être valide"
        ],
       
      },
    }),
    methods: {
    
      getCategorie(){
          this.progress=true
          this.$siratApi.$get('/categories')
        .then(async (response) => {
            //console.log('Détail contenu +++++hhhhhhhhhhhhhhhhh+++++',response.data.categories.map((item)=>{return item})[0])
            /*this.model.id_categorie = response.data.categories.map((item)=>{return item.id})[0] */
            this.model.categorie= response.data.categorie 
          /*  this.model.categories = response.data.categories.map((item)=>{return item.id})[0] */
            
            this.changeCategorie(response.data.find(categorie => categorie.slug === this.$route.query.categorie_slug))   
        }).catch((error) => {
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requête envoyée ')
        });
      },
      
      submitForm () {
        let validation = this.$refs.form.validate()
        this.$v.$touch();
        if(!this.$v.$invalid && validation)this.loading = true;
        /* console.log('Données formulaire++++++: ',{...this.model,categories:selectedcategories,...this.model.futured_image}) */


        let formData = new FormData();
        formData.append("futured_image", this.model.futured_image);
        formData.append("titre", this.model.titre );
        formData.append("resume", this.model.resume );
        formData.append("body", this.body);
        formData.append("id_categorie", this.model.id_categorie);
        formData.append("categories", [this?.model?.categories]?.map((item)=>{return item.id}));
        formData.append("categorie", this.sanitizeTitle(this.model.categorie));
        formData.append("slug", this.sanitizeTitle(this.model.titre));
        formData.append("lien", this.sanitizeTitle(this.model.lien));

        console.log('Données envoyées++++++++++++++',this.model, this.body)

      
     
      !this.$v.$invalid && validation && this.$siratFileApi.post('/contenus',formData)
          .then((res) => {
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
       
            if(this.$route.path=='/contenus/addContenu'){
              this.$router.push('/contenus');
            }
            else if(this.$route.query.categorie_slug){
              $href = this.$route.query.categorie_slug.replace("-", "")
              this.$router.push('/'+$href);
            }
            else {
            this.$store.dispatch('contenus/getSelectList')
            }
          })
          .catch((error) => {
              console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Échec de l\'ajout '})
          }).finally(() => {
            this.loading = false;
            console.log('Requête envoyée ')
        });
      },
      resetForm () {
        this.$refs.form.reset()
      },
      resetValidationForm () {
        this.$refs.form.resetValidation()
      },
      handleFileUpload(e){
        //Recupère le fichier
        const input = this.$refs.file
        const files = input.files

        //Recupère l'extension
        let idxDot = files[0]?.name.lastIndexOf(".") + 1;
        let extFile = files[0]?.name.substr(idxDot, files[0].name.length).toLowerCase();
        let size = files[0]?.size/1024/1024 //La taille en Mbit
        console.log('Size-------------- ',size)
        if(files.length!=0){
          if (size <= 5 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="pdf" || extFile=="doc" || extFile=="docx")){
            this.model.futured_image= files[0];
            this.filename = files[0].name
          }else{
            alert("Seuls les fichiers aux formats jpg/jpeg/png/pdf/doc/docx et de taille inférieure à 5Mb sont acceptés !");
          }
        }
      },
      sanitizeTitle(title) {
        var slug = "";
        // Change to lower case
        var titleLower = title.toLowerCase();
        // Letter "e"
        slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
        // Letter "a"
        slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
        // Letter "o"
        slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
        // Letter "u"
        slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
        // Letter "d"
        slug = slug.replace(/đ/gi, 'd');
        // Trim the last whitespace
        slug = slug.replace(/\s*$/g, '');
        // Change whitespace to "-"
        slug = slug.replace(/\s+/g, '-');
        slug = slug.replace(/'/g, '-');
        
        return slug;
      },
      async changeCategorie(value) {
        if(value){
          console.log("id categorie : ++++++++++++ ",value)
        this.model.categorie = value.libelle
        this.model.categories = value
        this.model.id_categorie = value.id
        }
       

        //this.selectedRegions.push(value.id)
        
      },
    }
  }
</script>
<style>
.v-toolbar__content {
  height: 67px;
  box-shadow: 0px 0px 0px 0px !important;
}

.errorcustom{
  color:#dd2c00 !important;
  background-color: white !important;
}

</style>