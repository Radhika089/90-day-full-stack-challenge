# 🚀 Day 01 - React Job Dashboard

## 📌 Project Overview

Built a Job Listing Dashboard using React to practice the fundamentals of component-based development.

The goal of this project was to understand how real-world React applications are structured:

**Data → Components → Props → Dynamic UI**

Instead of creating repeated UI manually, the application uses reusable components and renders data dynamically.

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Icons

---

## ✨ Features Implemented

- Modern job card UI
- Company logo display
- Company name and posted date
- Job role information
- Salary and location details
- Job type and experience level badges
- Hiring status badge
- Dynamic skills rendering
- Reusable Job Card component
- Data-driven UI using JavaScript arrays
- Responsive card layout

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── JobCard.jsx
│   └── Badge.jsx
│
├── data/
│   └── jobs.js
│
├── App.jsx
└── main.jsx
```

---

# 🧠 React Concepts Practiced

## 1. Components

Created reusable components instead of writing the same UI multiple times.

Example:

```
JobCard
│
├── Company Info
├── Job Details
├── Skills
└── Actions
```

---

## 2. Props

Passed job data from the parent component to child components.

Example:

```jsx
<JobCard company={job.company} role={job.role} salary={job.salary} />
```

---

## 3. Rendering Lists with map()

Used `map()` to convert job data into multiple UI cards.

Example:

```jsx
jobs.map((job) => <JobCard key={job.id} {...job} />);
```

---

## 4. Conditional Rendering

Displayed different badges based on job status.

Examples:

- 🟢 Hiring
- 🔴 Closed
- 🟡 Urgent

---

## 5. Nested Mapping

Rendered skills dynamically from an array.

Example:

```jsx
skills.map((skill) => <span>{skill}</span>);
```

---

# 📚 What I Learned

- How to think in React components
- How data flows through props
- Why reusable components are important
- How arrays are rendered in React
- Why unique keys are required in lists
- How to separate data from UI
- How to build dynamic UI instead of hardcoded elements

---

# 🔮 Future Improvements

- Add search functionality
- Add job filters
- Add bookmark functionality using `useState`
- Add React Router
- Connect with backend API
- Add authentication
- Add pagination
- Add sorting functionality
