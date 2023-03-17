export default {
    listcategories (state) {
      return state.listcategories
    },
    listcategoriesgestionrhs (state) {
      return state.listcategories.filter(categorie => categorie.slug === "emplois" || categorie.slug === "stages");
    },
    headercategories (state) {
      return state.headercategories
    },
    detailcategorie (state) {
      return state.detailcategorie
    }
}