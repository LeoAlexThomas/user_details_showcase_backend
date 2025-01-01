const mongoose = require("mongoose");

const CoordinatesSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const AddressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  stateCode: { type: String, required: true },
  postalCode: { type: String, required: true },
  coordinates: { type: CoordinatesSchema, required: true },
  country: { type: String, required: true },
});

const HairSchema = new mongoose.Schema({
  color: { type: String, required: true },
  type: { type: String, required: true },
});

const BankSchema = new mongoose.Schema({
  cardExpire: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cardType: { type: String, required: true },
  currency: { type: String, required: true },
  iban: { type: String, required: true },
});

const CompanySchema = new mongoose.Schema({
  department: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  address: { type: AddressSchema, required: true },
});

const CryptoSchema = new mongoose.Schema({
  coin: { type: String, required: true },
  wallet: { type: String, required: true },
  network: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  maidenName: { type: String },
  age: { type: Number },
  gender: { type: String, enum: ["male", "female"] },
  email: { type: String, required: true },
  phone: { type: String },
  username: { type: String, required: true },
  password: { type: String },
  birthDate: { type: Date },
  image: { type: String },
  bloodGroup: { type: String },
  height: { type: Number },
  weight: { type: Number },
  eyeColor: { type: String },
  hair: { type: HairSchema },
  ip: { type: String },
  address: { type: AddressSchema },
  macAddress: { type: String },
  university: { type: String },
  bank: { type: BankSchema },
  company: { type: CompanySchema, required: true },
  ein: { type: String },
  ssn: { type: String },
  userAgent: { type: String },
  crypto: { type: CryptoSchema },
  role: { type: String, enum: ["admin", "moderator", "user"], required: true },
});

module.exports = mongoose.model("Users", UserSchema);
