import api from "./api.ts"

 export type ElemItem = {
     name:string
     time:string
}

interface YogaElement {
    acf:ElemItem
}

export class YogaService {
    public async getAllElements() {
        try {
            const response = await api.get<YogaElement[]>('/yoga', {
                params: {acf_format: 'standard'},
            });

            const elements = response?.data.map((item: YogaElement) => {
                return item.acf
            })

            return elements
        } catch (error) {
            console.error('Error fetching shop elements:', error);
            throw error;
        }
    }
};