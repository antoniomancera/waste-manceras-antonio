Skip Size Selection Page Redesign
This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

Project Redesign Approach by Antonio Manceras
This project involved redesigning the "Choose Your Skip Size" page, focusing on enhancing the user experience (UX), improving the user interface (UI), and ensuring responsiveness across various devices (mobile and desktop). The goal was to create a visually distinct and more intuitive page while maintaining the core functionality.

Key improvements and design decisions include:

Modern Dark Theme: Implemented a sleek dark theme using Tailwind CSS (bg-gray-900, text-white) for a contemporary look and improved readability.

Responsive Grid Layout: The skip cards are displayed in a responsive grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3) with fixed card sizes and consistent 2em gaps, ensuring optimal presentation on all screen sizes.

Enhanced Card Design: Each skip card now prominently features:

An image placeholder (ready for dynamic image loading).

Clear title, subtitle (e.g., "14 day hire period"), and a distinct price display.

A "Yards" label for quick identification.

Conditional "Not Allowed On The Road" warning for specific skip types.

Interactive hover effects for visual feedback.

A dedicated "Select This Skip" button that changes to "Selected" upon click.

Interactive Selection & Footer:

Users can select a single skip, which highlights the chosen card with a blue border and shadow.

A dynamic footer appears only when a skip is selected, displaying a summary of the chosen skip (title, price, subtitle).

The "Continue" button in the footer is enabled only when a skip is selected, providing clear affordance.

The "Back" button allows users to deselect the current skip, causing the footer to disappear, indicating no active selection.

Contextual Information Display: A significant UX improvement is the addition of a small label at the top of the page, clearly displaying the Postcode (LE10 1SH) and Waste Type (Garden Waste) that were previously selected. This provides immediate context to the user, reducing cognitive load and enhancing the overall flow by confirming previous choices at a glance. This feature is crucial for multi-step processes, ensuring users are always aware of their current selections without needing to navigate back.

Stepper Integration (Conceptual): While not fully integrated with a multi-page flow, the provided Stepper component demonstrates the capability to visually track progress through different stages of the selection process, aligning with a typical e-commerce or service booking flow.

Clean and Maintainable Code: The project adheres to modern React practices, utilizing useState for state management and Tailwind CSS for utility-first styling, promoting clean, readable, and easily maintainable code.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.

Learn Next.js - an interactive Next.js tutorial.

You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
