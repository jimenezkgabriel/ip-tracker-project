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