module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
    }
    
}