import client from './config';

const path = '/presents';

const Client = {    
    async getGifts(data) {
        console.log(data)
        try {
            const response = await client.post(
                path,
                data,            
            );
            return response;
        } catch (e) {
            return e;
        }
    },
}

export default Client;
