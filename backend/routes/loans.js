const express = require("express");
const router = express.Router();
const auth = require("../models/auth");
const Loan = require("../models/Loan");

// Apply for a loan
router.post("/", auth, async (req, res) => {
  const { amount, tenure, purpose } = req.body;
  try {
    const loan = new Loan({ user: req.user.id, amount, tenure, purpose });
    await loan.save();
    res.json(loan);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Get user loans
router.get("/", auth, async (req, res) => {
  try {
    const loans = await Loan.find({ user: req.user.id });
    res.json(loans);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
