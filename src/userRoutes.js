const express = require("express");
const axios = require("axios");

const router = express.Router();

// Helper function to extract user details from the JSON response
const extractUserDetails = (data) => {
  const userInfo = data.props.pageProps.userInfo;

  return {
    userName: userInfo.name || "",
    profilePicture: userInfo.profile_image_url || "",
    isCampusAmbassador: userInfo.is_campus_ambassador || false,
    createdDate: userInfo.created_date || "",
    instituteName: userInfo.institute_name || "",
    instituteRank: userInfo.institute_rank || "",
    totalProblemsSolved: userInfo.total_problems_solved || "0",
    codingScore: userInfo.score || "0",
    monthlyCodingScore: userInfo.monthly_score || "0",
    currentStreak: userInfo.pod_solved_longest_streak || "0",
    globalMaxStreak: userInfo.pod_solved_global_longest_streak || "0",
  };
};

// Helper function to extract submissions info from the JSON response
const extractSubmissionsInfo = (data) => {
  const submissionsInfo = data.props.pageProps.userSubmissionsInfo;
  const result = {};

  for (const [difficulty, problems] of Object.entries(submissionsInfo)) {
    result[difficulty] = Object.values(problems).map((problem) => ({
      problemName: problem.pname || "",
      problemUrl: `https://www.geeksforgeeks.org/${problem.slug}/`,
      language: problem.lang || "",
    }));
  }

  return result;
};

// Route to get user profile data
router.get("/:username", async (req, res) => {
  const { username } = req.params;
  const BASE_URL = `https://www.geeksforgeeks.org/user/${username}/`;

  try {
    const profilePage = await axios.get(BASE_URL);
    const profileData = profilePage.data.match(
      /<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/
    );

    if (!profileData || !profileData[1]) {
      return res.status(404).json({ error: "Profile data not found" });
    }

    // Parse the JSON data embedded in the script tag
    const jsonData = JSON.parse(profileData[1]);

    // Extract and structure user data
    const userDetails = extractUserDetails(jsonData);
    const submissionsInfo = extractSubmissionsInfo(jsonData);

    res.json({
      userDetails,
      submissionsInfo,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Profile Not Found" });
  }
});

module.exports = router;
