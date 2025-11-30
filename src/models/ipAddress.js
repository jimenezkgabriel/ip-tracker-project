class ipAddressModel {
    ip = ``;
    location = ``;
    timezone = ``;
    isp = ``;

    constructor(ip, location, timezone, isp) {
        this.ip = ip;
        this.location = location;
        this.timezone = timezone;
        this.isp = isp;
    }
}

export default ipAddressModel;