import axios from "axios";

// GET data
export const getData = async () => {
    try {
        const respon = await axios.get(`${import.meta.VITE_API_URL}/users`)
        console.log(respon.data)
        return respon.data
    } catch (error) {
        console.log(error)
    }
}

// POST data
export const createData = async (data) => {
    try {
        const respon = await axios.post(`${import.meta.env.VITE_API_URL2}${import.meta.env.VITE_API_KEY}/users`, data);
        return respon
    } catch (error) {
        console.log(error)
        throw error
    }
}

// PUT DATA
export const updateData = async (id, data) => {
    try {
        const respon = await axios.put(`${import.meta.env.VITE_API_URL2}${import.meta.env.VITE_API_KEY}/users/${id}`, data,);
        console.log(respon)
        return respon
    } catch (error) {
        console.log(error)
        throw error
    }
}