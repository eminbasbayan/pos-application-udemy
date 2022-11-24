const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
  {
    customerName: { tpye: String, require: true },
    customerPhoneNumber: { tpye: String, require: true },
    paymentMode: { tpye: String, require: true },
    cartItems: { tpye: Array, require: true },
    subTotal: { tpye: Number, require: true },
    tax: { tpye: Number, require: true },
    totalAmount: { tpye: Number, require: true },
  },
  { timestamps: true }
);

const Bill = mongoose.model("bills", BillSchema);
module.exports = Bill;
