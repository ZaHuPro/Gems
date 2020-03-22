
module.exports = function Model(sequelize, DataTypes) {
    const AuctionHistory = sequelize.define('auction_history', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        primarySpent: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        secondarySpent: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        tertiarySpent: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        totalSpent: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        currentCost: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        currentPrice: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        tertiaryGained: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        stage: {
            type: DataTypes.ENUM,
            values: [
                'upcoming',
                'feed',
                'grow',
                'hunt',
            ],
            defaultValue: 'feed',
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    AuctionHistory.associate = function associate(db) {
        db.AuctionHistory.belongsTo(db.Auction, { sourceKey: 'id' });
        db.AuctionHistory.belongsTo(db.User, { sourceKey: 'id' });
    };
    return AuctionHistory;
};
