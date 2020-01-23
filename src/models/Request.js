
module.exports = function (sequelize, DataTypes) {
    const Request = sequelize.define('request', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        method: {
            type: DataTypes.ENUM,
            values: [
                'GET',
                'PUT',
                'DELETE',
                'POST',
            ],
            defaultValue: 'GET',
        },
        useragent: {
            type: DataTypes.JSON,
            defaultValue: {},
        },
        data: {
            type: DataTypes.JSON,
            defaultValue: {},
        },
        code: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    Request.associate = function (db) {
        db.Request.belongsTo(db.Key, { foreignKey: 'requester', sourceKey: 'id' });
    };
    return Request;
};
