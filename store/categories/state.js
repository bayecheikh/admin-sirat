export default () => ({
    listcategories: [],

    headercategories : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Libellé', value: 'libelle' },
        { text: 'Slug', value: 'slug' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailcategorie :{}
})