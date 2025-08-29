# Frontend Project

## Fonts

This project uses two main fonts:

- **Inter** - Main default font, already added in the main layout
- **Outfit** - Headline font, also configured in the main layout

Both fonts are imported from and configured with CSS variables for easy usage throughout the application.

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

```markdown
![Color Palette](./docs/images/color-palette.png)
```
