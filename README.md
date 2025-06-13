# Abisheik S | Full Stack & AI Developer Portfolio

This project is a hyper-realistic developer portfolio for Abisheik S, showcasing full-stack development skills, AI-powered features, and modern web technologies. It's built with Next.js, React, Tailwind CSS, ShadCN UI components, and Genkit for AI functionalities.

## Features

*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Modern UI/UX:** Clean, professional, and engaging user interface built with ShadCN UI and Tailwind CSS.
*   **Dynamic Sections:**
    *   **Hero Section:** Engaging introduction.
    *   **About Me:** Personal and professional summary.
    *   **Experience Timeline:** Chronological display of education and internships.
    *   **Skills Matrix:** Visual representation of technical competencies.
    *   **Projects Showcase:** Detailed view of featured and other projects, including AI-generated descriptions and code analysis.
    *   **Certifications Carousel:** Display of credentials and achievements.
    *   **Tech Stack:** Overview of preferred tools and technologies.
    *   **Contact Form:** Server-action-powered form for inquiries.
*   **AI-Powered Features (via Genkit):**
    *   **Embedded Chat Assistant:** Guides users through the portfolio.
    *   **AI Project Descriptions:** Automatically generates descriptions for projects based on code snippets.
    *   **AI Code Analysis:** Provides an AI-driven analysis for featured project code.
*   **Theme Toggle:** Light and Dark mode support.
*   **Interactive Modals:** For project details and resume viewing.
*   **Optimized for Performance:** Leverages Next.js features like Server Components and Image Optimization.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **UI Library:** React
*   **Styling:** Tailwind CSS
*   **UI Components:** ShadCN UI
*   **AI Integration:** Genkit (with Google AI models like Gemini)
*   **Language:** TypeScript
*   **Form Handling:** React Hook Form with Zod for validation
*   **Deployment (assumed):** Firebase App Hosting (based on `apphosting.yaml`)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (version 18.x or later recommended)
*   npm or yarn

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of your project and add any necessary environment variables, particularly for Genkit/Google AI:
    ```env
    GOOGLE_API_KEY=your_google_api_key_here
    ```
    *(Note: The current `.env` file in the project is empty, so you might need to acquire an API key if you haven't already for the AI features to fully work.)*

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the Next.js app, typically on `http://localhost:9002`.

5.  **Run Genkit (for AI features in development):**
    In a separate terminal, start the Genkit development server:
    ```bash
    npm run genkit:dev
    # or for auto-reloading on changes:
    npm run genkit:watch
    ```
    This allows Genkit flows to be called by the Next.js application.

## Project Structure

*   `src/app/`: Contains the main pages, layouts, and server actions.
*   `src/components/`: Reusable UI components, categorized into `common`, `sections`, and `ui` (ShadCN).
*   `src/ai/`: Genkit related code, including flows (`flows/`) and configuration (`genkit.ts`).
*   `src/lib/`: Utility functions (`utils.ts`), data definitions (`data.ts`), and form schemas (`form-schemas.ts`).
*   `public/`: Static assets like images and manifest files.

## Customization

*   **Portfolio Content:** Most of the personal data (timeline events, skills, projects, certifications, social links) can be customized in `src/lib/data.ts`.
*   **Styling & Theme:**
    *   Global styles and Tailwind CSS setup are in `src/app/globals.css`.
    *   ShadCN UI theme variables (colors, radius) are also defined in `src/app/globals.css`.
    *   Tailwind configuration is in `tailwind.config.ts`.
*   **AI Prompts:** The prompts for Genkit AI flows can be found and modified in the respective files under `src/ai/flows/`.

## Learn More

*   **Next.js:** [Next.js Documentation](https://nextjs.org/docs)
*   **Genkit:** [Genkit Documentation](https://firebase.google.com/docs/genkit)
*   **ShadCN UI:** [ShadCN UI Documentation](https://ui.shadcn.com/)
*   **Tailwind CSS:** [Tailwind CSS Documentation](https://tailwindcss.com/docs)
