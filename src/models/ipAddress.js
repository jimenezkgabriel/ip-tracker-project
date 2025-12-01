// A class to model the IP address data. The API returns a lot of data that I don't need
// for this project, so just capture the relevant bits
class ipAddressModel {
    ip = ``;
    location = ``;
    timezone = ``;
    isp = ``;
    lattitude = 0;
    longitude = 0;

    constructor(ip, location, timezone, isp, lattitude, longitude) {
        this.ip = ip;
        this.location = location;
        this.timezone = timezone;
        this.isp = isp;
        this.lattitude = lattitude;
        this.longitude = longitude;
    }
}

export default ipAddressModel;