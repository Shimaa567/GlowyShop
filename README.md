# Glowy Shop 🛍️✨

A small e-commerce web application built with **Vite**, **React**, and
**TypeScript**.\
The project demonstrates a simple **single-page shop** that allows users
to browse, search, filter, and sort products efficiently.

------------------------------------------------------------------------

## 🚀 Features

-   **Product listing page** (single page, no complex routing)
-   **Search** by product title\
-   **Sorting** by:
    -   Alphabetical order (A → Z, Z → A)\
    -   Price (Low → High, High → Low)\
-   **Filtering** by:
    -   Category\
    -   Price range (min/max)\
-   **Responsive UI** built with **TailwindCSS**\
-   **Reusable components** for buttons, inputs, product cards, skeleton
    loaders, etc.\
-   **API integration** with Axios and React Query for data
    fetching/caching\
-   **Radix UI** for accessible dropdowns, toggles, and popovers\
-   **Lucide Icons** for clean and scalable icons

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **React 19 + TypeScript** -- UI and type safety\
-   **Vite 7** -- Fast development and build tool\
-   **TailwindCSS 4** -- Utility-first styling\
-   **React Router 7** -- Routing and query params for filters/sorting\
-   **TanStack React Query** -- Data fetching & caching\
-   **Axios** -- API requests\
-   **Radix UI Primitives** -- Accessible UI components\
-   **Lucide React** -- Icon library

------------------------------------------------------------------------

## 📂 Project Structure

    glowyShop/
    ├── public/                  # Static assets
    ├── src/
    │   ├── components/          # Reusable UI components
    │   │   ├── Filters/         # Filter & sorting components
    │   │   ├── ui/              # Shared UI (button, input, etc.)
    │   │   ├── ProductCard.tsx  # Displays a single product
    │   │   ├── CardSkeleton.tsx # Skeleton loader
    │   │   └── ErrorState.tsx   # Error handling component
    │   │
    │   ├── hooks/               # Custom hooks (data fetching, params handling)
    │   ├── pages/               # Page-level components
    │   │   └── Products.tsx     # Main products page
    │   ├── services/            # API services & axios setup
    │   ├── types/               # TypeScript types & interfaces
    │   ├── App.tsx              # Root application component
    │   ├── main.tsx             # Entry point
    │   └── index.css            # Global styles
    │
    ├── .eslintrc.js             # Linting rules
    ├── tsconfig.json            # TypeScript configuration
    ├── vite.config.ts           # Vite configuration
    └── package.json

------------------------------------------------------------------------

## 📦 Installation & Setup

1.  **Clone the repo**

    ``` bash
    git clone https://github.com/yourusername/glowyshop.git
    cd glowyshop
    ```

2.  **Install dependencies**

    ``` bash
    npm install
    ```

3.  **Run in development**

    ``` bash
    npm run dev
    ```

4.  **Build for production**

    ``` bash
    npm run build
    ```

5.  **Preview production build**

    ``` bash
    npm run preview
    ```

------------------------------------------------------------------------

## 📖 Future Improvements

-   Add cart & checkout functionality\
-   Product details page\
-   User authentication & profile management\
-   Backend API integration (currently mocked/static or placeholder)

------------------------------------------------------------------------

## 📜 License

This project is licensed under the MIT License.
