import getIpAddress from '../services/getIpAddress.js';
import ipAddressModel from '../models/ipAddress.js';

const ipInput = document.getElementById('ipInput');
const searchButton = document.getElementById('button');
const ipAddress = document.getElementById('ipAddress');
const location = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');

let map = L.map('map');
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([0, 0]).addTo(map);


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
        console.log(data);
        const newIpAddressModel = new ipAddressModel(data.ip, `${data.location.city}, ${data.location.region} ${data.location.postalCode}`, `UTC ${data.location.timezone}`, data.isp, data.location.lat, data.location.lng);
        return newIpAddressModel;
    } catch (error) {
        console.error('Error fetching IP address data:', error);
        return new ipAddressModel('--', '--', '--', '--', 0, 0);
    }
}

const displayResults = (model) => {
    ipAddress.innerText = model.ip;
    location.innerText = model.location;
    timezone.innerText = model.timezone;
    isp.innerText = model.isp;

    map.setView([model.lattitude, model.longitude], 13);
    marker.setLatLng([model.lattitude, model.longitude]);
}

searchButton.addEventListener('click', async () => {
    if (ipInput.value.trim() === '') {
        let randomIp = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        const model = await searchIpAddress(randomIp);
        displayResults(model);
    } else {
        const model = await searchIpAddress(ipInput.value);
        displayResults(model);
    }
})

window.onload = async () => {
    const model = await searchIpAddress('');
    displayResults(model);
}