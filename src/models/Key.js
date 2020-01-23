
module.exports = function Model(sequelize, DataTypes) {
    const Key = sequelize.define('key', {
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
        website: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        key: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        status: {
            type: DataTypes.ENUM,
            values: [
                'active',
                'inactive',
                'removed',
            ],
            defaultValue: 'active',
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    Key.associate = function associate(db) {
        db.Key.belongsTo(db.User, { foreignKey: 'keyed', sourceKey: 'id' });
        db.Key.hasMany(db.Request, { foreignKey: 'requester', sourceKey: 'id' });
    };
    return Key;
};
