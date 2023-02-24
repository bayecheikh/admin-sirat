export default () => ({
    listadherents: [],

    headeradherents : [
        /* {
            text: 'Username',
            align: 'start',
            sortable: true,
            value: 'username',
        }, */
        /* { text: 'Prénom', value: 'firstname' },
        { text: 'Nom', value: 'lastname' }, */
        { text: 'Prénom et Nom', value: 'name' },
        { text: 'Email', value: 'email' },
        /* { text: 'Telephone', value: 'telephone' }, */
        { text: 'Roles', value: 'roles' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailadherent :{},
    //Intialise la pagination
    paginationAdherent :{},
    totalPage :1,
    perPage :15,
    currentPage :1,
    dataSearch :null
})