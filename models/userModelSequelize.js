const { DataTypes } = require("sequelize");
const { sequelizeConnection: sequelize } = require("../config/connectDB"); // Assuming your sequelize instance is in this file

// Main User Model
const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    maidenName: { type: DataTypes.STRING, allowNull: true },
    age: { type: DataTypes.INTEGER, allowNull: true },
    gender: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: true },
    birthDate: { type: DataTypes.DATEONLY, allowNull: true },
    image: { type: DataTypes.STRING, allowNull: true },
    bloodGroup: { type: DataTypes.STRING, allowNull: true },
    height: { type: DataTypes.FLOAT, allowNull: true },
    weight: { type: DataTypes.FLOAT, allowNull: true },
    eyeColor: { type: DataTypes.STRING, allowNull: true },
    ip: { type: DataTypes.STRING, allowNull: true },
    macAddress: { type: DataTypes.STRING, allowNull: true },
    university: { type: DataTypes.STRING, allowNull: true },
    ein: { type: DataTypes.STRING, allowNull: true },
    ssn: { type: DataTypes.STRING, allowNull: true },
    userAgent: { type: DataTypes.STRING, allowNull: true },
    role: {
      type: DataTypes.ENUM("admin", "user", "moderator"),
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

// Hair Model
const Hair = sequelize.define("Hair", {
  color: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
});

// Coordinates Model
const Coordinates = sequelize.define("Coordinates", {
  lat: { type: DataTypes.FLOAT },
  lng: { type: DataTypes.FLOAT },
});

// Address Model
const Address = sequelize.define("Address", {
  address: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  state: { type: DataTypes.STRING },
  stateCode: { type: DataTypes.STRING },
  postalCode: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
});

// Bank Model
const Bank = sequelize.define("Bank", {
  cardExpire: { type: DataTypes.STRING },
  cardNumber: { type: DataTypes.STRING },
  cardType: { type: DataTypes.STRING },
  currency: { type: DataTypes.STRING },
  iban: { type: DataTypes.STRING },
});

// Company Model
const Company = sequelize.define("Company", {
  department: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
});

// Crypto Model
const Crypto = sequelize.define("Crypto", {
  coin: { type: DataTypes.STRING },
  wallet: { type: DataTypes.STRING },
  network: { type: DataTypes.STRING },
});

// Relationships
User.hasOne(Hair, { as: "hair", foreignKey: "userId" });
Hair.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Address, { as: "address", foreignKey: "userId" });
Address.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Bank, { as: "bank", foreignKey: "userId" });
Bank.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Crypto, { as: "crypto", foreignKey: "userId" });
Crypto.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Company, { as: "company", foreignKey: "userId" });
Company.belongsTo(User, { foreignKey: "userId" });

Company.hasOne(Address, { as: "address", foreignKey: "companyId" });
Address.belongsTo(Company, { foreignKey: "companyId" });

Address.hasOne(Coordinates, { as: "coordinates", foreignKey: "addressId" });
Coordinates.belongsTo(Address, { foreignKey: "addressId" });

module.exports = { User, Hair, Address, Bank, Company, Crypto, Coordinates };
