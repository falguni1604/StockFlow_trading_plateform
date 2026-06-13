const User = require("../model/UserModel");

module.exports.Signup = async (req, res) => {
  try {
    console.log("Signup route hit");
    console.log("Signup request body:", req.body);

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email, and password are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.log("Signup error:", err);

    res.status(500).json({
      success: false,
      message: err.message || "Error creating user",
    });
  }
};
