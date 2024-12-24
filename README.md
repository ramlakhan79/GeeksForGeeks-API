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
