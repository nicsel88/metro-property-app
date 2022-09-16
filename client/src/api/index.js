import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertListing = payload => api.post(`/listing`, payload)
export const getAllListings = () => api.get(`/listings`)
export const updateListingById = (id, payload) => api.put(`/listing/${id}`, payload)
export const deleteListingById = id => api.delete(`/listing/${id}`)
export const getListingById = id => api.get(`/listing/${id}`)

const apis = {
    insertListing,
    getAllListings,
    updateListingById,
    deleteListingById,
    getListingById,
}

export default apis