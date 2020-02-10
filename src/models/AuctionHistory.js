
module.exports = function Model(sequelize, DataTypes) {
    const AuctionHistory = sequelize.define('auction_history', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        spent: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        auctionPrice: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        advantageGained: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        stage: {
            type: DataTypes.ENUM,
            values: [
                'fuel',
                'intervel',
                'lanuch',
            ],
            defaultValue: 'fuel',
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
