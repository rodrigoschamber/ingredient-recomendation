import { create } from 'axios';

class ApiFacade {
    constructor(baseURL) {
        this.client = create({
            baseURL: baseURL,
            timeout: 1000,
        });
    }

    async getResource(resource) {
        try {
            const response = await this.client.get(`/${resource}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${resource}:`, error);
            throw error;
        }
    }

    async createResource(resource, data) {
        try {
            const response = await this.client.post(`/${resource}`, data);
            return response.data;
        } catch (error) {
            console.error(`Error creating ${resource}:`, error);
            throw error;
        }
    }

    async updateResource(resource, id, data) {
        try {
            const response = await this.client.put(`/${resource}/${id}`, data);
            return response.data;
        } catch (error) {
            console.error(`Error updating ${resource}:`, error);
            throw error;
        }
    }

    async deleteResource(resource, id) {
        try {
            const response = await this.client.delete(`/${resource}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting ${resource}:`, error);
            throw error;
        }
    }
}

export default ApiFacade;