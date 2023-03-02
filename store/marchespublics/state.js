export default () => ({
    listmarchespublics: [],

    headermarchespublics : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Référence', value: 'reference' },
        { text: 'Objet', value: 'objet' },
        { text: 'Type de marché', value: 'type_marche' },
        { text: 'Date de publication', value: 'date_publication' },
        { text: 'Date limite', value: 'date_limite' },
        { text: 'Catégorie', value: 'categories',sortable: true },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailmarchepublic :{}
})