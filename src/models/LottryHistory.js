
module.exports = function Model(sequelize, DataTypes) {
    const LottryHistory = sequelize.define('lottery_history', {
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
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    LottryHistory.associate = function associate(db) {
        db.LottryHistory.belongsTo(db.Lottry, { sourceKey: 'id' });
        db.LottryHistory.belongsTo(db.User, { sourceKey: 'id' });
    };
    return LottryHistory;
};
