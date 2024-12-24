# GeeksforGeeks User Profile Scraper

This project provides an API built with Node.js and Express to scrape user profile details and submission information from [GeeksforGeeks](https://www.geeksforgeeks.org). It fetches and parses the embedded JSON data from the user's profile page to provide structured information.

## Features

- Retrieve user profile details, including:
  - User name
  - Profile picture
  - Campus ambassador status
  - Account creation date
  - Institute details
  - Coding statistics (e.g., total problems solved, coding score, streaks)
- Extract submission details categorized by difficulty:
  - Problem name
  - Problem URL
  - Programming language used

## Technologies Used

- **Node.js**: Backend runtime
- **Express.js**: Web framework for building the API
- **Axios**: HTTP client for fetching the profile page
- **Cheerio/RegExp**: Parsing embedded JSON data from HTML content

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/geeksforgeeks-profile-scraper.git
2. Navigate to the project directory:

   ```bash
   cd geeksforgeeks-profile-scraper
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. Make a GET request to the endpoint:

   ```plaintext
   GET /:username
   ```

   Replace `:username` with the CodeChef username you want to fetch details for.

3. Example request using `curl`:

   ```bash
   curl http://localhost:3000/john_doe
   ```

4. Example JSON response:

   ```json
   {
     "userDetails": {
    "userName": "John Doe",
    "profilePicture": "https://example.com/profile.jpg",
    "isCampusAmbassador": false,
    "createdDate": "2020-01-01",
    "instituteName": "ABC Institute",
    "instituteRank": "Top 10",
    "totalProblemsSolved": "500",
    "codingScore": "1000",
    "monthlyCodingScore": "50",
    "currentStreak": "10",
    "globalMaxStreak": "50"
   },
   "submissionsInfo": {
    "Easy": [
      {
        "problemName": "Two Sum",
        "problemUrl": "https://www.geeksforgeeks.org/two-sum/",
        "language": "C++"
      }
    ],
    "Medium": [
      {
        "problemName": "Longest Substring",
        "problemUrl": "https://www.geeksforgeeks.org/longest-substring/",
        "language": "Python"
      }
    ]
   }
   }
   ```

## Project Structure

```plaintext
├── routes/
│   └── profile.js          # Contains the scraping logic
├── server.js               # Main entry point
├── package.json            # Project metadata and dependencies
└── README.md               # Documentation
```

## Dependencies

- **Express.js**: For building the API
- **Axios**: For making HTTP requests
- **Cheerio**: For parsing and extracting data from HTML

## Error Handling

- If a profile is not found or an error occurs during scraping, the API responds with a JSON error message:

  ```json
  {
    "error": "Profile Not Found"
  }
  ```

## Limitations

- This API relies on the structure of the GeeksforGeeks website. Any changes to the website's HTML may require updates to the scraper logic.
- The API is intended for educational and personal use only. Scraping websites without permission may violate their terms of service.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
