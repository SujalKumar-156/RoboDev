# RoboDev - Robotics Club NIT Patna Website

Welcome to the repository for the official website of the Robotics Club at NIT Patna. This project is designed to showcase the club's events, projects, team members, and achievements using a modern, responsive interface.

## 👤 Author Information

* **Name:** Sujal Kumar, Khushi Gudadhe, Anushka Singh and Mahi Shivhare
* **Roll no. respectively:** 2506025, 2506091, 2506064 and 2506099
* **Email-id respectively:** sujalk.ug25.cs@nitp.ac.in, khushig.ug25.cs@nitp.ac.in, anushkas.ug25.cs@nitp.ac.in and mahis.ug25.cs@nitp.ac.in
* **GitHub:** [SujalKumar-156](https://github.com/SujalKumar-156)

---

## 🛠️ Technology Choice & Reason

This project was built using a pure "Vanilla" technology stack to ensure performance, deep understanding of fundamentals, and ease of customization.

* **HTML5:** Used for semantic structuring of web pages (`<nav>`, `<section>`, `<footer>`) to ensure accessibility and SEO friendliness.
* **CSS3:**
    * **Why:** To create a highly customized, visually striking design without the constraints of Bootstrap or Tailwind.
    * **Key Features:**
        * **Glassmorphism:** Extensive use of `backdrop-filter` and transparent backgrounds for a modern aesthetic.
        * **Animations:** Custom Keyframe animations (`@keyframes`) for hover effects and page transitions.
        * **Layout:** Utilizes **Flexbox** for navigation and alignment, and **CSS Grid** for complex layouts like the Events and Achievements sections.
        * **Variables:** CSS Variables used for consistent color themes (e.g., Orange accents).
* **JavaScript (ES6):**
    * **Why:** For interactive elements like the responsive hamburger menu and dynamic navigation highlighting. It keeps the site lightweight compared to using heavy frameworks like React.

---

## 📈 Future Scalability

To ensure this project can grow with the club, the following measures were taken:

1.  **Modular CSS Architecture:** Styles are split into specific files (e.g., `components.css` for global elements like Navbars, `eventcomponent.css` for specific pages). This prevents a single massive CSS file and makes debugging easier.
2.  **Reusable Components:** The Navigation Bar and Footer are designed as standalone components that can be easily injected or maintained across multiple pages.
3.  **Clean Folder Structure:** Assets are organized logically (e.g., images in `imagess/`), making it easy for future contributors to add new content without clutter.
4.  **Responsive Foundation:** The layout uses relative units (`%`, `rem`) and flexible containers (`fit-content`, `max-content`), allowing the site to adapt to different screen sizes easily.

---

## 📚 External Resources & Assets

* **Images:**
    * Background assets (`bckgrndblue4.png`, `bckgrndimgbluedark.jpg`, etc.) sourced for the futuristic theme.
    * Club Logos and Event banners located in the `imagess/` directory.
* **Icons:**
    * Social Media icons used in the contact section (Instagram, Facebook, LinkedIn).
* **Fonts:**
    * 'Poppins' from Google Fonts.

---

## 🚀 Setup Instructions

Follow these steps to run the project locally on your machine:

1.  **Clone the Repository**
    Open your terminal/command prompt and run:
    ```bash
    git clone [https://github.com/SujalKumar-156/RoboDev.git](https://github.com/SujalKumar-156/RoboDev.git)
    ```

2.  **Navigate to the Directory**
    ```bash
    cd RoboDev
    ```

3.  **Run the Project**
    * Simply find the `index.html` file in the folder.
    * Double-click to open it in your default web browser (Chrome/Edge/Firefox).
    * **Optional:** For a better development experience, use the "Live Server" extension in VS Code.

4.  **Contribution**
    * Create a new branch: `git checkout -b my-new-feature`
    * Commit your changes: `git commit -m 'Add some feature'`
    * Push to the branch: `git push origin my-new-feature`
