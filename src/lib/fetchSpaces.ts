import axios from 'axios'

export type Space = {
    id: string;
    name: string;
    displayName: string;
    logoUrl: string;
    members: number;
    twitter: string | null;
    website: string | null;
};


const fetchSpaces = async (): Promise<Array<Space>> => {
    try {
        const response = await axios.post('http://192.168.1.101:5009/api/graphql', {
            query: `
                query Spaces {
                    spaces {
                        name
                        displayName
                        members
                        logoUrl
                    }
                }
            `
        }, {
            headers: {
                "Content-Type": "application/json"
            },
        });

        return response.data.data.spaces;
    } catch (error) {
        console.error("Error fetching spaces:", error);
        return [];
    }
};

export default fetchSpaces;