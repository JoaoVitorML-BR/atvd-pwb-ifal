# React Next.js Product Catalog

This project is a simple online product catalog built with React and Next.js. It demonstrates the use of functional components, props for dynamic data rendering, and TailwindCSS for styling.

## Features

- Displays a list of products with name, description, price, and image.
- Utilizes reusable components for better organization and maintainability.
- Basic styling with TailwindCSS for a responsive design.

## Project Structure

```
react-nextjs-catalog
├── components          # Contains reusable components
│   ├── ProductCard.tsx # Component for displaying individual product details
│   └── Header.tsx      # Component for the catalog header
├── pages               # Contains application pages
│   ├── index.tsx       # Main entry point of the application
│   └── _app.tsx        # Custom App component for global styles
├── public              # Static assets
│   └── images
│       └── placeholder.jpg # Placeholder image for products
├── styles              # CSS styles
│   ├── globals.css     # Global CSS styles
│   └── tailwind.css    # TailwindCSS styles
├── tailwind.config.js  # TailwindCSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-nextjs-catalog
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

This project can be deployed on Vercel for easy hosting. Follow the Vercel documentation for deployment instructions.

## License

This project is open-source and available under the [MIT License](LICENSE).