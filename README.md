## H.K Workflow – Premium Inventory System

H.K Workflow is a modern, high-performance inventory management web application built with Next.js 15/16 and NextAuth.js.
It delivers a clean user experience with secure authentication and smart content access control for managing and browsing product collections.

## Short Project Description

This project is a feature-rich inventory dashboard where users can browse product listings, search, filter by category, and sort by price.
It implements a Content Gating system where the product list is publicly accessible, but sensitive pages such as product details and management features are only available to authenticated users.

## Setup & Installation

Follow these steps to run the project locally:

1. Clone the repository
git clone https://github.com/shouravhasanshurjo8201/hk-product-78
cd hk-project

2. Install dependencies
npm install

3. Configure environment variables

Create a .env.local file in the root directory and add:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

4. Run the development server
npm run dev


## Implemented Features

Dual Authentication System

Google social login (NextAuth)

Email & password login using credentials provider

## One-Click Demo Access

Admin and User demo buttons for quick testing

## Smart Route Protection

Middleware-based protection for private routes

Prevents unauthenticated users from accessing sensitive pages

## Dynamic Inventory System

Product search

Category filtering

Price sorting

## Latest Arrivals Section

Automatically displays 8 latest products on the homepage

## Toast Notifications

Shows success message after product creation

Provides instant feedback for user actions

## Modern Responsive UI

Built with Tailwind CSS

Fully responsive for mobile, tablet, and desktop

Skeleton loaders for better perceived performance

## Route Summary
Route	Access	Description
/	Public	Homepage with hero section and latest items
/login	Public	User login page
/signup	Public	New user registration page
/items	Public	Full product catalog with filters
/items/[id]	Protected	Product details page (login required)
/add-item	Protected	Product creation form (login required)

## Brief Explanation of Key Features
1. Toast Notification on Successful Creation

React Hot Toast is integrated to enhance user experience.
When a product is successfully added through the /add-item page, a real-time success notification appears instantly, providing clear confirmation without refreshing the page.

2. Advanced Middleware Logic (Security)

The application uses a custom middleware strategy:

The /items page remains public for accessibility and SEO.

But deep routes like /items/[id] and /add-item are fully protected.

Unauthenticated users attempting to access protected routes are automatically redirected to the login page.

This ensures strong security while keeping the application user-friendly.

3. Responsive & Modern UI

The entire interface is built using Tailwind CSS with:

Responsive layouts for all devices

Lucide icons for clean visuals

Skeleton loaders to make loading feel smooth and fast

## Demo Credentials (For Testing)

Admin Account
Email: admin@gmail.com
Password: 123456

User Account
Email: user@example.com
Password: user123
