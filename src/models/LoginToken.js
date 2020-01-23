
module.exports = function (sequelize, DataTypes) {
    const LoginToken = sequelize.define('login_token', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        hashkey: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        useragent: {
            type: DataTypes.JSON,
            defaultValue: {},
        },
        status: {
            type: DataTypes.ENUM,
            values: [
                'active',
                'inactive',
            ],
            defaultValue: 'active',
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    LoginToken.associate = function (db) {
        db.LoginToken.belongsTo(db.User, { foreignKey: 'logger', sourceKey: 'id' });
    };
    return LoginToken;
};
