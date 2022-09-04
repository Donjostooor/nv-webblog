module.exports = {
    port:8081,
    db:{
        datebase: process.env.DB_NAME || 'nvWebblogDb',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        option: {
            dialect: process.env.DIALEC || 'sqlite',
            storage: './nvwebblog.db.sqlite'
        },
    }
}