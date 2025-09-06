# Frontend Project

This is a Next.js project with comprehensive development workflow setup.

## Color System

This project uses a custom color palette integrated with shadcn/ui for consistent design:

### Default Colors

- **Primary Color**: `#101010` - Used for main text and primary elements

### Text Colors

- **Headline Text**: `#101010` - Dark grey for headlines
- **Normal Text**: `#222222` - Default for normal text content
- **Placeholder Text**: `#444444` - Grey for placeholders

### Background Colors

- **Primary Background**: `#FFFFFF` - White background
- **Secondary Background**: `#F2F2F2` - Light grey background

### Border/Line Colors

- **Form Stroke Lines**: `#A6AEB1` - Grey for form borders
- **Normal Lines**: `#D2DADD` - Light grey for regular borders

### Usage Examples

#### Tailwind CSS Classes

```jsx
// Background colors
<div className="bg-background">Primary background</div>
<div className="bg-muted">Muted background</div>

// Text colors
<h1 className="text-foreground">Main text</h1>
<p className="text-muted-foreground">Muted text</p>
<span className="text-primary">Primary text</span>

// Interactive elements
<button className="bg-primary text-primary-foreground">Primary button</button>
<button className="bg-secondary text-secondary-foreground">Secondary button</button>
```

All shadcn components will use this configured color by default

<img width="892" height="667" alt="image" src="https://github.com/user-attachments/assets/83fb15cd-78de-424a-896c-f0bf02f75018" />
<img width="922" height="280" alt="image" src="https://github.com/user-attachments/assets/8b6aed66-3f5b-412b-be65-711d435384db" />

# Must to know and keep in mind while working on this project

1. **Use Server Components by default, Client Components when necessary**

   Next.js 13+ uses React Server Components by default, which offer better performance and SEO benefits.

   ```jsx
   // BAD: Making an entire page a client component
   'use client';

   export default function ProductPage() {
     // The entire page is now client-rendered, even static parts
     return (
       <div>
         <Header />
         <ProductDetails />
         <Reviews />
         <RelatedProducts />
         <Footer />
       </div>
     );
   }

   // GOOD: Keep the page as a server component and isolate client components
   // product/page.tsx (Server Component by default)
   import InteractiveReviews from '@/components/InteractiveReviews';

   export default function ProductPage() {
     return (
       <div>
         <Header />
         <ProductDetails />
         <InteractiveReviews /> {/* Only this part is client-rendered */}
         <RelatedProducts />
         <Footer />
       </div>
     );
   }
   ```

   **Important rules:**
   - **NEVER make a root page component a client component** - this forces the entire page to be client-rendered
   - Only make the specific parts that need client interactivity into client components
   - Create smaller, focused client components and import them into server components
   - Keep data fetching in server components whenever possible
   - Remember that client components increase bundle size and affect performance

2. **Follow conditional rendering best practices**

   Keep conditionals clean and readable to improve code maintainability.

   ```jsx
   // BAD: Complex nested conditionals
   const Component = ({ user, data, isLoading }) => {
     return (
       <div>
         {isLoading ? (
           <Spinner />
         ) : user ? (
           data ? (
             <UserData user={user} data={data} />
           ) : (
             <NoDataMessage />
           )
         ) : (
           <LoginPrompt />
         )}
       </div>
     );
   };

   // GOOD: Early returns and simplified conditionals
   const Component = ({ user, data, isLoading }) => {
     if (isLoading) return <Spinner />;
     if (!user) return <LoginPrompt />;
     if (!data) return <NoDataMessage />;

     return <UserData user={user} data={data} />;
   };
   ```

   **Important rules:**
   - Use early returns to reduce nesting
   - Extract complex conditions into descriptive variables
   - Consider moving complex conditional logic into separate components
   - For simple toggles, use the `&&` operator but be careful with falsy values:

3. **Be cautious when adding new libraries**

   Every library added increases bundle size and maintenance burden.

   **Important rules:**
   - Before adding a new library:
     1. Check if the functionality exists in our current dependencies
     2. Consider if native browser/Node APIs could solve the problem
     3. Evaluate bundle size impact (use tools like Bundlephobia)
     4. Check maintenance status (GitHub stars, last commit, open issues)
   - Get team approval for adding new dependencies - MUST
   - Document why the library was added in the PR - MUST

4. **Use only predefined design colors**

   Stick to the design system to maintain visual consistency.

   ```jsx
   // BAD: Using arbitrary colors
   const Button = ({ children }) => {
     return <button className="rounded-md bg-[#random-color] px-6 py-3">{children}</button>;
   };

   // GOOD: Using design tokens from the theme
   const Button = ({ children }) => {
     return <button className="bg-primary rounded-md px-6 py-3">{children}</button>;
   };
   ```

   **Important rules:**
   - Never use hardcoded color values in your components
   - Use Tailwind classes that reference our theme colors
   - Never use hardcoded pixels like py-[6px], instead use py-md.
   - If a design uses a color not in our system, try similar or discuss with the team first - MUST

5. **Use Lucide React icons by default**

   Prefer using Lucide React icons over custom SVGs for consistency and performance.

   ```jsx
   // BAD: Importing custom SVG when similar icon exists
   import { UserIcon } from "../assets/user-icon.svg";

   const UserProfile = () => {
     return (
       <div>
         <UserIcon className="h-6 w-6" />
         <span>Profile</span>
       </div>
     );
   };

   // GOOD: Using Lucide React icon
   import { User } from "lucide-react";

   const UserProfile = () => {
     return (
       <div>
         <User className="h-6 w-6" />
         <span>Profile</span>
       </div>
     );
   };
   ```

   **Important rules:**
   - Check Lucide React first before using custom SVGs
   - It's acceptable to use a similar icon if the exact one isn't available
   - If a custom SVG is necessary, optimize it with SVGO before importing
   - Keep custom SVGs in a dedicated `public/assets/icons` directory

6. **Follow naming conventions consistently**

   Use consistent naming patterns for files, components, and variables.

   ```jsx
   // File naming conventions:
   // pages/UserProfile/page.tsx (Page component)
   // components/UserAvatar/index.tsx (Component)
   // hooks/useUserData.ts (Hook)
   // utils/formatDate.ts (Utility function)

   // Component naming:
   const UserProfile = () => {
     /* ... */
   }; // PascalCase for components

   // Variable naming:
   const userName = "John"; // camelCase for variables
   const fetchUserData = async () => {
     /* ... */
   }; // camelCase for functions
   const MAX_RETRY_COUNT = 3; // UPPER_SNAKE_CASE for true constants
   ```

   **Important rules:**
   - Add 'Page' suffix to all root page components: `UserProfilePage`
   - Use PascalCase for component names and files containing components
   - Use camelCase for variables, functions, and instances
   - Use UPPER_SNAKE_CASE for true constants (values that never change, like API endpoints, configuration values, or mathematical constants)

     ```javascript
     // True constants (use UPPER_SNAKE_CASE)
     const API_BASE_URL = "https://api.example.com";
     const MAX_RETRY_ATTEMPTS = 3;
     const PI = 3.14159;

     // Not true constants (use camelCase)
     const [isLoading, setIsLoading] = useState(false); // State can change
     const userConfig = { theme: "dark" }; // Object that might be modified
     const apiResponse = await fetchData(); // Result of a function call
     ```

   - Keep file and directory names descriptive but concise
   - Be consistent with plural vs. singular naming (e.g., `components/Button` vs. `pages/Users`)

7. **Define component props inside the component file**

   Keep prop definitions close to the components that use them for better maintainability.

   ```tsx
   // BAD: Defining props in a separate file
   // types/user-card-props.ts
   export interface UserCardProps {
     user: {
       id: string;
       name: string;
       role: "admin" | "user" | "guest";
       avatarUrl?: string;
     };
     isSelected?: boolean;
     onSelect: (userId: string) => void;
   }

   // components/UserCard.tsx
   import { UserCardProps } from "../types/user-card-props";

   const UserCard = ({ user, isSelected, onSelect }: UserCardProps) => {
     // ...
   };

   // GOOD: Defining props in the same file as the component
   // components/UserCard.tsx
   interface UserCardProps {
     user: {
       id: string;
       name: string;
       role: "admin" | "user" | "guest";
       avatarUrl?: string;
     };
     isSelected?: boolean;
     onSelect: (userId: string) => void;
   }

   const UserCard = ({ user, isSelected = false, onSelect }: UserCardProps) => {
     // ...
   };
   ```

   **Important rules:**
   - Use TypeScript `interface` for props typing, not `type`
   - Define the interface directly in the component file
   - Name the interface as `ComponentNameProps` (e.g., `UserCardProps`)
   - Export the interface only if it's needed by other components
   - Be explicit with prop types (avoid `any` or overly generic types)
   - Provide default values for optional props when appropriate

8. **Organize page-specific components in their page directory**

   Keep components that are only used by a specific page close to that page.

   ```
   // GOOD: Page-specific component organization
   app/
   ├── signup/
   │   ├── _components/
   │   │   ├── SignUpForm.tsx
   │   │   ├── TermsAndConditions.tsx
   │   │   └── PasswordStrengthIndicator.tsx
   │   └── page.tsx
   ├── dashboard/
   │   ├── _components/
   │   │   ├── ActivityFeed.tsx
   │   │   ├── QuickStats.tsx
   │   │   └── RecentTransactions.tsx
   │   └── page.tsx
   └── components/  (shared components used across multiple pages)
       ├── Button.tsx
       ├── Card.tsx
       └── Input.tsx
   ```

   **Important rules:**
   - Use a `_components` folder within each page directory for page-specific components
   - Only place components in the global `/components` directory if they're used across multiple pages
   - Name page-specific components with context in mind (e.g., `SignUpForm` instead of just `Form`)
   - Import page components using relative paths: `import { SignUpForm } from './_components/SignUpForm'`
   - Keep the component hierarchy flat when possible within the page's component directory
   - Consider creating subdirectories within `_components` only for complex pages with many components

9. **Sort imports consistently**

   Please, organize imports in a consistent order to improve readability and maintainability.

   ```tsx
   // BAD: Unorganized imports
   import { useState } from "react";
   import styles from "./UserProfile.module.css";
   import { User } from "lucide-react";
   import { formatDate } from "@/utils/date";
   import { Button } from "@/components/ui/button";
   import axios from "axios";
   import { UserAvatar } from "@/components/UserAvatar";

   // GOOD: Properly sorted imports
   // 1. Built-in React imports
   import { useState, useEffect } from "react";

   // 2. External libraries/dependencies
   import axios from "axios";
   import { User } from "lucide-react";

   // 3. Internal components, hooks, and utilities
   import { Button } from "@/components/ui/button";
   import { UserAvatar } from "@/components/UserAvatar";
   import { formatDate } from "@/utils/date";

   // 4. Styles and assets
   import styles from "./UserProfile.module.css";
   ```

   **Important rules:**
   - Group imports in the following order with a blank line between each group:
     1. Built-in React/Next.js imports
     2. External third-party libraries
     3. Internal project imports (components, hooks, utils)
     4. Styles, types, and assets
   - Within each group, try to maintain alphabetical order
   - Use absolute imports with `@/` prefix for project files when possible
   - Keep destructured imports organized (e.g., `import { a, b, c } from 'module'`)

10. **Use the `cn` utility for class merging**

    Combine Tailwind classes conditionally using the `cn` utility instead of string templates.

    ```tsx
    // BAD: Using string concatenation or template literals
    const Button = ({ variant, disabled }) => {
      return (
        <button
          className={`rounded-md px-4 py-2 ${variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          Click me
        </button>
      );
    };

    // GOOD: Using the cn utility
    import { cn } from "@/lib/utils";

    const Button = ({ variant, disabled }) => {
      return (
        <button
          className={cn(
            "rounded-md px-4 py-2",
            variant === "primary" ? "bg-primary-foreground" : "bg-background-secondary",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          Click me
        </button>
      );
    };
    ```

    **Important rules:**
    - Always use the `cn` utility from `@/lib/utils` for conditional class merging
    - The `cn` function combines `clsx` and `tailwind-merge` to handle class conflicts properly
    - Avoid string concatenation or template literals for class names
    - Structure complex class combinations with proper indentation for readability
    - Remember that `cn` will intelligently merge conflicting Tailwind classes (the last one wins)

11. **Consistency is key.**

`Code should look like it was written by a single individual!`
`Consistently bad is better than inconsistently good!`

Imagine a system initially developed with Technique A. A new software developer joins, and starts using technique B, which is objectively better than Technique A. Years later, that software developer is replaced by another developer, who uses Technique C, an arguably better technique than either Technique A or Technique B. Let this repeat. What you end up with is a software system with X number of ways of doing the same thing. You use up precious brain-space to accommodate the X different methods of doing things, and you can never really be sure which way you'll be encountering in your codebase.

```javascript
// Bad: Inconsistent naming conventions
const GetUserData = () => {
  /* ... */
};
const save_post = () => {
  /* ... */
};
const deleteComment = () => {
  /* ... */
};

// Good: Consistent camelCase for functions
const getUserData = () => {
  /* ... */
};
const savePost = () => {
  /* ... */
};
const deleteComment = () => {
  /* ... */
};
```
