# 🎬 Netflix GPT

Netflix GPT is a full-stack movie browsing and recommendation app powered by the TMDB API and OpenAI's GPT. It provides an immersive user experience similar to Netflix, including trailers, category-based listings, and an AI-powered movie search feature. Built with **React**, **Redux**, **Tailwind CSS**, **Firebase**, and **OpenAI API**, this app showcases modern front-end development and AI integration techniques.

## 🚀 Features

### 🔐 Authentication

* Sign Up / Login using Firebase Authentication
* Form validation with `useRef()` and error handling
* Conditional routing based on auth state
* Profile update after sign-up

### 🎥 Browse Page (Post Login)

* Responsive Header with Sign Out
* Main Container

  * Autoplaying YouTube trailer (muted)
  * Movie Title and Description
* Secondary Containers

  * Movie lists by category (Now Playing, Popular, Top Rated, Upcoming)
  * Styled using Tailwind CSS

### 🤖 GPT Movie Search

* Multilingual GPT-powered movie search feature
* OpenAI integration to suggest movies based on user prompts
* Custom hooks for fetching AI suggestions from TMDB
* Suggestions displayed using reusable Movie List components

## 🧠 Tech Stack

| Tech              | Purpose                                |
| ----------------- | -------------------------------------- |
| **React + Vite**  | Frontend Framework                     |
| **Redux Toolkit** | State Management                       |
| **Firebase**      | Hosting + Authentication               |
| **Tailwind CSS**  | Styling                                |
| **TMDB API**      | Movie data and trailers                |
| **OpenAI API**    | GPT-powered search and recommendations |
| **React Router**  | Navigation and route protection        |
| **useRef, Hooks** | Form validation and custom logic       |

## 📂 Folder Structure

```
NetflixGPT/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
├── .env
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_TMDB_ACCESS_TOKEN=your_tmdb_token
VITE_OPENAI_API_KEY=your_openai_key
```

> **Note**: Don't forget to add `.env` to your `.gitignore`.

### 4. Run the App Locally

```bash
npm run dev
```

### 5. Deploy on Firebase (Optional)

```bash
firebase init
firebase deploy
```

## 🧪 Key Concepts & Highlights

* Authentication state listener with `onAuthStateChanged`
* Custom hooks for Now Playing, Popular, Upcoming, Top Rated movies
* GPT suggestions integrated using OpenAI API
* Auto-redirect between `/browse` and `/login` based on auth state
* Responsive, mobile-friendly UI using Tailwind CSS

## 📸 Screenshots

> 
![Screenshot 2025-05-26 163521](https://github.com/user-attachments/assets/67d259e9-5c6b-4ef0-8391-f05050b2a75c)
![Screenshot 2025-05-26 163600](https://github.com/user-attachments/assets/5bc381e6-2e84-4e33-b1c9-45ad20545f1f)
![Screenshot 2025-05-26 163646](https://github.com/user-attachments/assets/51d60204-a03f-457f-a7af-5d9395920bb5)
![Screenshot 2025-05-26 163724](https://github.com/user-attachments/assets/b788974c-aecd-42ab-90aa-a6503455311a)

---

## ✨ Credits

* [TMDB](https://www.themoviedb.org/) – for movie data and trailers
* [OpenAI](https://platform.openai.com/) – for GPT recommendations
* [Firebase](https://firebase.google.com/) – for hosting and authentication
