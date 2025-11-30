import getIpAddress from '../services/getIpAddress.js';
import ipAddressModel from '../models/ipAddress.js';

const ipInput = document.getElementById('ipInput');
const searchButton = document.getElementById('button');
const ipAddress = document.getElementById('ipAddress');
const location = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');

const searchIpAddress = async (ipOrDomain) => {
    try {
        let domain = ``;
        let ip = ``;
        if (ipOrDomain.charAt(0) === 'h') {
            domain = ipOrDomain;
        } else {
            ip = ipOrDomain;
        }

        const data = await getIpAddress(ip, domain);
        const newIpAddressModel = new ipAddressModel(data.ip, `${data.location.city}, ${data.location.region} ${data.location.postalCode}`, `UTC ${data.location.timezone}`, data.isp);
        return newIpAddressModel;
    } catch (error) {
        console.error('Error fetching IP address data:', error);
        return new ipAddressModel('--', '--', '--', '--');
    }
}

const displayResults = (model) => {
    ipAddress.innerText = model.ip;
    location.innerText = model.location;
    timezone.innerText = model.timezone;
    isp.innerText = model.isp;
}

searchButton.addEventListener('click', async () => {
    const model = await searchIpAddress(ipInput.value);
    displayResults(model);
})

window.onload = async () => {
    const model = await searchIpAddress('');
    displayResults(model);
}