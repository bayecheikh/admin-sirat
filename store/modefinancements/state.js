export default () => ({
    listmodefinancements: [],

    headermodefinancements : [
        {
            text: 'Libellé',
            align: 'start',
            sortable: true,
            value: 'libelle',
        },
        { text: 'Slug', value: 'slug' },
        /* { text: 'Statut', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailmodefinancement :{}
})