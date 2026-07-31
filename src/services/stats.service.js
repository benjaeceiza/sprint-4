const connectDB = require('../config/db');

const getStats = async () => {
    const db = await connectDB();

    const [productsData, categoriesData] = await Promise.all([
        db.get("SELECT COUNT(*) as total FROM products"),
        db.get("SELECT COUNT(*) as total FROM categories")
    ]);

    return {
        totalProducts: productsData.total,
        totalCategories: categoriesData.total
    };
};

module.exports = {
    getStats
};