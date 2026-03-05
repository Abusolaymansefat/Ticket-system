# 🎫 Ticket Management System

A responsive **Ticket Management Dashboard** built with **React.js and Tailwind CSS**.
Users can view customer tickets, move them to **In-Progress**, and mark them as **Resolved**.

---

## 🚀 Live Demo

🔗 Deploy Link: https://famous-kataifi-930635.netlify.app/

---

## 📌 Features

* 📊 **Dashboard Banner**

  * Shows **In-Progress Ticket Count**
  * Shows **Resolved Ticket Count**

* 🧾 **Customer Tickets Section**

  * Displays all tickets in a **card layout**
  * Responsive **2-column grid**

* 📋 **Task Status Section**

  * Clicking a ticket moves it to **Task Status**
  * Shows ticket title and **Complete Button**

* ✅ **Resolved Task Section**

  * Clicking **Complete**:

    * Removes ticket from Task Status
    * Adds it to Resolved List
    * Updates Banner counts

* 🔔 **SweetAlert2 Notification**

  * Alerts when ticket is added or completed

* 📱 **Fully Responsive**

  * Mobile
  * Tablet
  * Desktop

---

## 🛠️ Technologies Used

* React.js
* Tailwind CSS
* SweetAlert2
* JavaScript (ES6)
* Vite

---


## ⚙️ Installation

Clone the repository

```
git clone https://github.com/Abusolaymansefat/Ticket-system
```

Go to the project folder

```
cd ticket-system
```

Install dependencies

```
npm install
```

Run the project

```
npm run dev
```

---




# React Basic Concepts

---

### What is JSX, and why is it used?  
**Ans:**  
React-এ ইউজার ইন্টারফেস (UI) তৈরি করার জন্য JSX ব্যবহার করা হয়।  
আপনি যখন React-এ কোড লেখেন, তখন HTML এবং JavaScript আলাদা আলাদা ফাইলে না রেখে একই সাথে ব্যবহার করতে চান—JSX ঠিক সেই সুবিধাটিই দেয়।  

---

### What is the difference between State and Props?  
**Ans:**  
- **Props** হলো "Read-only" বা শুধুমাত্র পড়ার যোগ্য ডেটা। এটি একটি প্যারেন্ট (Parent) কম্পোনেন্ট থেকে চাইল্ড (Child) কম্পোনেন্টে পাঠানো হয়।  
- **State** হলো একটি কম্পোনেন্টের নিজস্ব মেমোরি। এটি কম্পোনেন্টের ভেতরেই তৈরি এবং পরিবর্তন করা হয়।  

---

### What is the useState hook, and how does it work?  
**Ans:**  
- `useState` হলো React-এর একটি hook যা functional component-এর ভিতরে state create ও manage করতে ব্যবহার হয়।  
- এটি একটি **state variable** এবং **state update function** রিটার্ন করে।  
- State update করলে component **auto re-render** হয় নতুন value সহ।  

---

### How can you share state between components in React?  
**Ans:**  
- সাধারণত parent component-এর state **props** হিসেবে child component-এ পাঠানো হয়।  
- বড় অ্যাপের জন্য **Context API** বা state management library (Redux, Zustand) ব্যবহার করা যায়।  
- এর মাধ্যমে multiple components একই state access ও update করতে পারে।  

---

### How is event handling done in React?  
**Ans:**  
- React-এ event handler **camelCase syntax** ব্যবহার করে লেখা হয়, যেমন `onClick`, `onChange`।  
- Function reference দিয়েই handler দেওয়া হয়, কল করতে হয় না।  
- Inline function বা আলাদা function দুটোই ব্যবহার করা যায়।  

---
