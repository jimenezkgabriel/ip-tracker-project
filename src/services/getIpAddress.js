// Funny API key insecurely stored here lol. It's free though
const API_KEY = 'at_goKVzx944pBGnH68vsN8MT6A0wSbu';

// Async function to get IP address data from the IPify API given an IP or domain
// Returns a promise containing the fetched data
const getIpAddress = async (ip = '', domain = '') => {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}&domain=${domain}`);

    if (!response.ok) {
        throw new Error('Failed to fetch IP address data');
    } else {
        const data = await response.json();
        return data;
    }
}

export default getIpAddress;