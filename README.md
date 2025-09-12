# Koppee Website Clone with React and React Router 🚀

This project is a modern and complete rebuild of the **Koppee** coffee shop website template, developed using the latest web technologies. The primary goal was to practice and implement advanced concepts in React, server-side routing with React Router, form management, and building reusable components, with a strong emphasis on **performance optimization** and **best practices**.

**[View Live Demo](https://koppee-react-router-clone-3vxzb6n26-omids-projects-4059c488.vercel.app/)** | **[Original Template](https://themewagon.com/themes/koppee/)**

---
## ✨ Key Features

* **Fully Responsive Design**: Adapts seamlessly to all devices, from mobile to desktop.
* **Server-Side Actions**: Utilizes the `action` function in React Router for robust form handling and data management.
* **Advanced Forms**: Includes a reservation and contact form with server-side validation.
* **Reusable Components**: The newsletter and booking forms are built as independent components and reused across different pages.
* **Infinite Slider**: A custom, smooth infinite slider for the testimonials section that works with both mouse-drag and touch-swipe gestures, powered by **Swiper.js**.
* **Postgres Database**: All form submissions are stored in a Vercel Postgres database.
* **Clean, Modern Codebase**: Built with TypeScript, React Hooks, and a strong focus on accessibility best practices.
* **Optimized Performance**: Achieved high Lighthouse scores through various optimization techniques, ensuring a fast and smooth user experience.

---
## 🏛️ Architecture & Component Structure

The following image illustrates the component structure used on each page of the application:

![Project Structure](https://github.com/omidfarhangnia/Koppee-React-Router-Clone/raw/main/docs/template.JPG)

---
## ⚡ Performance Optimization

A core focus of this project was to deliver an exceptional user experience through high performance. Significant efforts were made to optimize load times and responsiveness, resulting in outstanding Lighthouse scores for the deployed application. Key optimizations include:

* **Self-hosting & Preloading Critical Fonts:** Ensuring fast delivery of essential typography.
* **Image Optimization:** Converting all images to modern WebP format and correctly sizing them to reduce payload.
* **LCP (Largest Contentful Paint) Element Optimization:** Prioritizing the main visual content for rapid rendering.
* **Efficient JavaScript Bundling:** Minimizing and splitting JavaScript to reduce load on the main thread.
* **Addressing Layout Shifts:** Eliminating unexpected content movement for a stable user interface.

**Final Lighthouse Scores (Desktop Simulation):**

![Lighthouse Scores](https://raw.githubusercontent.com/omidfarhangnia/Koppee-React-Router-Clone/refs/heads/main/docs/lighthouse.JPG)

---
## 🛠️ Tech Stack

* **Framework:** [React](https://react.dev/)
* **Routing & Data Management:** [React Router](https://reactrouter.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Database:** [Vercel Postgres](https://vercel.com/storage/postgres)
* **Slider Library:** [Swiper.js](https://swiperjs.com/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Deployment:** [Vercel](https://vercel.com/)

---
## 🚀 Getting Started Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/omidfarhangnia/Koppee-React-Router-Clone.git](https://github.com/omidfarhangnia/Koppee-React-Router-Clone.git)
    cd Koppee-React-Router-Clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add your Vercel Postgres connection string:
    ```env
    POSTGRES_URL="YOUR_POSTGRES_CONNECTION_STRING"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The project will now be available at `http://localhost:3000`.

---
## 📄 License & Acknowledgments

The reimplemented code in this repository is released under the **MIT License**. You are free to use, modify, and distribute this code.

The original design and template were created by **HTML Codex** and distributed by **ThemeWagon** under the Creative Commons Attribution 3.0 license. Thank you to them for providing this beautiful template.

**Attribution:**
* **Template Name:** Koppee
* **Template URL:** [https://themewagon.com/themes/koppee/](https://themewagon.com/themes/koppee/)
* **Author:** HTML Codex
* **Distributed By:** ThemeWagon

---
## 🙏 Special Thanks

A special thank you to **Google's Gemini** for providing detailed code reviews and guidance throughout the development of this project, which was instrumental in achieving this level of quality and optimization.