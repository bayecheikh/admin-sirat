export default {
    listcategories (state) {
      return state.listcategories
    },
    listcategoriesgestionrhs (state) {
      return state.listcategories.filter(categorie => categorie.slug === "emplois" || categorie.slug === "stages");
    },
    listcategoriesmarchepublics(state) {
      return state.listcategories.filter(categorie => categorie.slug === "avis-d-appel-a-concurence" || categorie.slug === "plan-de-passation"|| categorie.slug === "avis-generaux");
    },
    listcategoriescontenus(state) {
      return state.listcategories.filter(categorie => categorie.slug != "avis-d-appel-a-concurence" && categorie.slug != "plan-de-passation" && categorie.slug != "avis-generaux" && categorie.slug != "emplois" && categorie.slug != "stages");
    },
    headercategories (state) {
      return state.headercategories
    },
    detailcategorie (state) {
      return state.detailcategorie
    }
}