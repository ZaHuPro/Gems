
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email_verify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        joined_ip: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM,
            values: [
                'active',
                'inactive',
                'suspended'
            ],
            defaultValue: 'active'
        },
    }, {
        timestamps: true,
        freezeTableName: true
    });

    User.associate = function (db) {
        db.User.hasMany(db.Key,{ foreignKey: "keyed", sourceKey: "id" });
        db.User.hasMany(db.LoginToken,{ foreignKey: "logger", sourceKey: "id" });
    }
    return User;
}