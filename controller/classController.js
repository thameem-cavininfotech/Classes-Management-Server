export const fetch = async (req, res) => {
  try {
    return res.json("Hell world.");
  } catch {
    res.status(500).json({ message: "Internal server error." });
  }
};
