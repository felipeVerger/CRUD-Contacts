const base_url = 'http://localhost:3000/clientes'

// OBTENER TODOS LOS CONTACTOS DE LA API
export const getAllContacts = async () => {
    try {
        const response = await fetch(base_url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

// OBTENER UN CONTACTI POR ID
export const getContactById = async (id) => {
    try {
        const response = await fetch(base_url + '/' + id);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

// CREAR UN NUEVO CONTACTO
export const createContact = async (values) => {
    try {
        const response = await fetch(base_url, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
				"Content-Type": "application/json",
			}
        })
        await response.json();
    } catch (error) {
        console.log(error);
    }
}

// ELIMINAR UN CONTACTO
export const deleteContact = async (id) => {
    try {
        const response = await fetch(base_url + '/' + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

// ACTUALIZAR UN CONTACTO
export const updateContact = async (id, values) => {
    try {
        const response = await fetch(base_url + '/' + id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}