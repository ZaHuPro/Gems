
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
        feedCapacity: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        priceIncrement: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        tertiaryGaining: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        feedCost: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        huntingCost: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        growTime: {
            type: DataTypes.INTEGER,
            defaultValue: 60,
        },
        huntTime: {
            type: DataTypes.INTEGER,
            defaultValue: 60,
        },
        startsAt: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        closingAt: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        preBookingDiscount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        status: {
            type: DataTypes.ENUM,
            values: [
                'upcoming',
                'feed',
                'grow',
                'hunt',
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
        db.Auction.belongsTo(db.User, { foreignKey: 'winnerId', sourceKey: 'id' });
    };
    return Auction;
};
