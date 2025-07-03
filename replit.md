# Replit.md - Altaif Education Technology Platform

## Overview

This is a full-stack educational technology platform built for Altaif, a Malaysian company specializing in IT systems for education. The application serves as a corporate website showcasing their services, portfolio, and capabilities in the educational technology sector.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL with Neon as the serverless database provider
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL session store (connect-pg-simple)
- **Development**: TSX for TypeScript execution

### Component Structure
- **Modular Components**: Organized in logical sections (Hero, Services, About, etc.)
- **Reusable UI Components**: Comprehensive shadcn/ui component library
- **Custom Hooks**: useCounter, useScrollAnimation for enhanced UX
- **Animation System**: Intersection Observer-based scroll animations

## Key Components

### Main Sections
1. **Hero Section**: Landing page with gradient background and call-to-action
2. **Services**: Educational technology solutions showcase
3. **About**: Company information with animated counters
4. **Objectives**: Company goals with progress indicators
5. **Vision & Mission**: Dual-panel display with gradients
6. **Why Choose Us**: Feature highlights with various card layouts
7. **Projects**: Portfolio showcase with project cards
8. **Testimonials**: Client feedback carousel
9. **Team**: Team member profiles
10. **Contact**: Contact form with validation
11. **Footer**: Site navigation and company information

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Dark/Light Mode**: CSS variables for theme switching
- **Performance Optimized**: Lazy loading and intersection observers
- **SEO Friendly**: Semantic HTML and meta tags
- **Accessibility**: ARIA labels and keyboard navigation

## Data Flow

### Frontend Data Flow
1. **Page Load**: Main App component renders with routing
2. **Navigation**: Smooth scrolling between sections
3. **Animations**: Trigger-based animations using Intersection Observer
4. **Form Submission**: React Hook Form validation and submission
5. **State Management**: React Query for API calls and caching

### Backend Data Flow
1. **Request Handling**: Express middleware for logging and error handling
2. **Database Operations**: Drizzle ORM for type-safe queries
3. **Session Management**: PostgreSQL-based session storage
4. **API Responses**: RESTful API structure (routes prefixed with /api)

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Font Awesome for comprehensive icon library
- **Fonts**: Google Fonts (Inter) for typography
- **Forms**: React Hook Form with Hookform Resolvers

### Backend Dependencies
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for backend compilation

### Development Tools
- **Vite**: Frontend build tool with HMR
- **TypeScript**: Static type checking
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Replit Integration**: Runtime error overlay and cartographer

## Deployment Strategy

### Development Environment
- **Server**: Development server with Vite middleware
- **Database**: Neon PostgreSQL with environment variables
- **Hot Reload**: Vite HMR for frontend, tsx for backend
- **Error Handling**: Runtime error overlay for debugging

### Production Build
- **Frontend**: Vite build to dist/public directory
- **Backend**: esbuild compilation to dist/index.js
- **Static Assets**: Served from dist/public
- **Database**: PostgreSQL connection via DATABASE_URL

### Environment Configuration
- **NODE_ENV**: Development/production mode switching
- **DATABASE_URL**: PostgreSQL connection string (required)
- **Build Scripts**: Separate commands for development, build, and production

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup