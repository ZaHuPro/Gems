
module.exports = function Model(sequelize, DataTypes) {
    const Auction = sequelize.define('auction', {
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
        fuelCost: {
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
        fuelAt: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        intervalMin: {
            type: DataTypes.INTEGER,
            defaultValue: 60,
        },
        lanuchAt: {
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
                'fuel',
                'intervel',
                'lanuch',
                'upcoming',
                'closed',
                'sold',
            ],
            defaultValue: 'upcoming',
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    Auction.associate = function associate(db) {
        db.Auction.hasMany(db.AuctionHistory, { sourceKey: 'id' });
        db.Auction.belongsTo(db.Product, { sourceKey: 'id' });
        db.Auction.belongsTo(db.User, { sourceKey: 'id' });
    };
    return Auction;
};
