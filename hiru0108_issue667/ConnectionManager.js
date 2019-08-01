module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["hirutest"] = {
        host: process.env.EndPoint_rdsHirutest,
        port: process.env.Port_rdsHirutest,
        user: process.env.User_rdsHirutest,
        password: process.env.Password_rdsHirutest,
        database: "test"
    };
    this.dbConnections["hirudinee"] = {
        host: process.env.EndPoint_rdsHirudinee,
        port: process.env.Port_rdsHirudinee,
        user: process.env.User_rdsHirudinee,
        password: process.env.Password_rdsHirudinee,
        database: "hirudinee"
    };
};