export default () => ({
    listprojets: [],

    headerprojets : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Titre', value: 'titre' },
        { text: 'Categorie', value: 'categories',sortable: true },
        { text: 'Categorie', value: 'categorie',sortable: true, align: ' d-none' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailprojet :{}
})