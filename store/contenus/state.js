export default () => ({
    listcontenus: [],

    headercontenus : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Titre', value: 'titre' },
        { text: 'Catégorie', value: 'categories',sortable: true },
        { text: 'Catégorie', value: 'categorie',sortable: true, align: ' d-none' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailcontenu :{}
})