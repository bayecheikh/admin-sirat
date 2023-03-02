export default () => ({
    listsources: [],
    selectListsources: [],

    headersources : [
        {
            text: 'Libellé',
            align: 'start',
            sortable: true,
            value: 'libelle_source',
        },
        { text: 'Types sources', value: 'type_sources',sortable: false },
        /* { text: 'Statut', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailsource :{}
})