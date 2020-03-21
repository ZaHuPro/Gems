
module.exports = function Model(sequelize, DataTypes) {
    const Category = sequelize.define('category', {
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
        icon: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        status: {
            type: DataTypes.ENUM,
            values: [
                'active',
                'deleted',
            ],
            defaultValue: 'active',
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    Category.associate = function associate(db) {
        db.Category.hasMany(db.Product, { sourceKey: 'id' });
    };
    return Category;
};
