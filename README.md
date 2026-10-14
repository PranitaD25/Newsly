# 📰 Newsly — News Web Application

Newsly is a responsive news web application built with HTML, CSS, and JavaScript that allows users to explore the latest news, browse different categories, search for specific topics, and read full articles from their original sources.

## 🎥 Demo

![Newsly Demo](https://github.com/user-attachments/assets/145bce36-8a2a-40ec-a7a0-6eac8dccf80b)

## ✨ Features

- **Latest News:** Fetch and display news articles using the News API.
- **Category-Based Navigation:** Browse news across categories such as Sports, Finance, Politics, Education, and Lifestyle.
- **Search News:** Search for articles based on keywords or topics.
- **Breaking News Ticker:** Display rotating headlines in an animated ticker.
- **Read Full Articles:** Click on a news card or breaking-news headline to open the original article in a new tab.
- **Dynamic News Cards:** Display article images, titles, sources, publication dates, and descriptions.
- **Responsive UI:** A clean interface built with CSS Flexbox and reusable styling.
- **Interactive Navigation:** Highlight the currently selected category.

## 🛠️ Tech Stack

- **HTML5** — Application structure
- **CSS3** — Styling, layouts, transitions, and animations
- **JavaScript (ES6+)** — API integration, asynchronous requests, and dynamic DOM manipulation
- **News API** — News article data

## 📸 Application Overview

Newsly provides a simple interface for browsing headlines and discovering articles across different topics.

- Browse news through the navigation bar.
- Search for a specific topic using the search bar.
- Read breaking headlines in the animated ticker.
- Click an article to visit its original publisher.

## 📂 Project Structure

```text
Newsly/
├── assets/
│   └── logo.png
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A code editor such as Visual Studio Code
- A News API key from [NewsAPI.org](https://newsapi.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PranitaD25/Newsly.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Newsly
   ```

3. Open the project in Visual Studio Code.

4. Configure your News API key in `script.js`:

   ```javascript
   const API_KEY = "YOUR_API_KEY";
   ```

5. Run the application using the **Live Server** extension in VS Code, or open `index.html` in your browser.

6. Explore news articles using the navigation bar and search functionality.

## 🔑 API Integration

Newsly uses the [News API](https://newsapi.org/docs) to retrieve news articles.

The application uses API endpoints to fetch articles based on search queries and retrieve headlines.

The returned article data is used to dynamically populate news cards and the breaking-news ticker.

**Note:** API availability, article access, and usage limits depend on your News API plan. Check the provider's current terms before deploying the application publicly.

## 🔮 Future Enhancements

- [ ] AI-powered article summarization
- [ ] Chat with an article using AI
- [ ] AI-generated key takeaways and sentiment analysis
- [ ] Country and language filters
- [ ] Sort articles by date and relevance
- [ ] Load More / pagination
- [ ] Bookmark articles using local storage
- [ ] Improved mobile responsiveness
- [ ] Loading indicators and user-friendly error messages
- [ ] Backend integration to protect API credentials

## 🎯 Learning Outcomes

This project provides practical experience with:

- Fetch API and asynchronous JavaScript using `async/await`
- Working with REST APIs and JSON responses
- DOM manipulation and HTML templates
- JavaScript event handling
- CSS Flexbox, transitions, and keyframe animations
- Dynamic rendering of API data
- Handling search queries and user interactions

## 👩‍💻 Author

**Pranita Deshpande**

- GitHub: [PranitaD25](https://github.com/PranitaD25)

---

If you find this project useful, feel free to explore the repository and share your feedback.
