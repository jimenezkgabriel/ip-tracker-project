// Get my modules that I depend on
import getIpAddress from '../services/getIpAddress.js';
import ipAddressModel from '../models/ipAddress.js';

// Get my DOM elements that I will be interacting with
const ipInput = document.getElementById('ipInput');
const searchButton = document.getElementById('button');
const ipAddress = document.getElementById('ipAddress');
const location = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');

// Initialize the map
let map = L.map('map').setView([0, 0], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([0, 0]).addTo(map);

// Function that takes in the input from the IP search bar, fetches data, constructs a model
// with that data and returns that model, later to be used in displayResults()
const searchIpAddress = async (ipOrDomain) => {
    try {
        // Checking if the input passed in is an IP or a domain
        let domain = ``;
        let ip = ``;
        if (ipOrDomain.charAt(0) === 'h') {
            domain = ipOrDomain;
        } else {
            ip = ipOrDomain;
        }

        // Fetch the data from the API service function
        const data = await getIpAddress(ip, domain);
        console.log(data); // Log the fetched data for debugging
        // Construct a new model with the fetched data, then return it
        const newIpAddressModel = new ipAddressModel(data.ip, `${data.location.city}, ${data.location.region} ${data.location.postalCode}`, `UTC ${data.location.timezone}`, data.isp, data.location.lat, data.location.lng);
        return newIpAddressModel;
    } catch (error) {
        // In case of error, log it and return a model with empty data
        console.error('Error fetching IP address data:', error);
        return new ipAddressModel('--', '--', '--', '--', 0, 0);
    }
}

// Function to display the results on the page and update the map
const displayResults = (model) => {
    ipAddress.innerText = model.ip;
    location.innerText = model.location;
    timezone.innerText = model.timezone;
    isp.innerText = model.isp;

    map.setView([model.lattitude, model.longitude], 13);
    marker.setLatLng([model.lattitude, model.longitude]);
}

// Event listener for the search button
// If the input is empty, generate a random IP address and use that for the API call
// Else, the input from the user is used to make the API call, then display the results
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

// Initial page load to display the user's current IP address, wherever that may be
window.onload = async () => {
    const model = await searchIpAddress('');
    displayResults(model);
}