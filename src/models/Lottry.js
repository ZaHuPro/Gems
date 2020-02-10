
module.exports = function Model(sequelize, DataTypes) {
    const Lottry = sequelize.define('tottry', {
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
        totalTickets: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        soldTickets: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        ticketPrice: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        saleAt: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        pricingAt: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        status: {
            type: DataTypes.ENUM,
            values: [
                'sale',
                'closed',
                'priced',
                'upcoming',
            ],
            defaultValue: 'upcoming',
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    Lottry.associate = function associate(db) {
        db.Lottry.belongsTo(db.Product, { sourceKey: 'id' });
        db.Lottry.hasMany(db.LottryHistory, { foreignKey: 'lottry', sourceKey: 'id' });
    };
    return Lottry;
};
