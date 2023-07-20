export const usersListFields = [
    {
        label: 'Foto',
        value: 'photoUrl',
        type: 'img',
    },
    {
        label: 'Nombre',
        value: 'firstName',
        type: 'text',
    },
    {
        label: 'Apellido',
        value: 'lastName',
        type: 'text',
    },
    {
        label: 'Paìs',
        value: 'country',
        type: 'text',
    },
    {
        label: 'Acciòn',
        value: 'onDelete',
        type: 'button',
        buttonLabel: 'Eliminar'
    },
];

export const isReloadResource = (dateString = '') => {
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var year = parseInt(parts[2], 10);
    var initialDate = new Date(year, month, day);
    var currentDate = new Date();
    var difference = currentDate - initialDate;
    var daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
    return daysPassed >= 1;
};

export const random = () => {
    return Math.floor(Math.random() * 9999999);
};