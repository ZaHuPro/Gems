
module.exports = function Model(sequelize, DataTypes) {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        retailPrice: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        shippingPrice: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        fuelDiscount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        discountFor: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        advantage: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        startAt: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        countDown: {
            type: DataTypes.INTEGER,
            defaultValue: 60,
        },
        status: {
            type: DataTypes.ENUM,
            values: [
                'active',
                'deleted',
            ],
            defaultValue: 'active',
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    Product.associate = function associate(db) {
        db.Product.belongsTo(db.Category, { sourceKey: 'id' });
        db.Product.hasMany(db.Auction, { sourceKey: 'id' });
        db.Product.hasMany(db.Lottry, { sourceKey: 'id' });
    };
    return Product;
};
