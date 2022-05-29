import client from './config';

const pathPlans = '/plans';
const pathInstallers = '/installers';

const Client = {    
    async getPlans(data) {
        try {
            const response = await client.get(
                pathPlans,  
                data                   
            );
            return response;
        } catch (e) {
            return e;
        }
    },
    async getInstallers(data) {
        try {
            const response = await client.get(
                pathInstallers,  
                data                   
            );
            return response;
        } catch (e) {
            return e;
        }
    },
}

export default Client;
