# 🧘 ZenFlow Yoga — Product Requirements Document (PRD)

> **Tagline:** Transform Your Mind, Body & Spirit

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Vision](#2-vision)
3. [Technology Stack](#3-technology-stack)
4. [Design System](#4-design-system)
5. [Public Website Pages](#5-public-website-pages)
   - [Home Page](#51-home-page)
   - [About Page](#52-about-page)
   - [Classes Page](#53-classes-page)
   - [Programs Page](#54-programs-page)
   - [Instructor Directory](#55-instructor-directory)
   - [Pricing Page](#56-pricing-page)
   - [Blog](#57-blog)
   - [Contact Page](#58-contact-page)
6. [Authentication](#6-authentication)
7. [User Dashboard](#7-user-dashboard)
8. [Instructor Dashboard](#8-instructor-dashboard)
9. [Admin Dashboard](#9-admin-dashboard)
10. [AI Wellness Assistant](#10-ai-wellness-assistant)
11. [Database Schema](#11-database-schema)
12. [Folder Structure](#12-folder-structure-nextjs-app-router)
13. [Component Tree](#13-component-tree)
14. [SEO Requirements](#14-seo-requirements)
15. [Performance Requirements](#15-performance-requirements)
16. [Accessibility](#16-accessibility)
17. [Wireframes](#17-wireframes-text-based-layouts)
18. [Deliverables](#18-deliverables)

---

## 1. Project Overview

**ZenFlow Yoga** is a modern, premium, AI-powered Yoga Platform designed to help users improve their physical, mental, and emotional well-being through yoga, meditation, wellness tracking, and personalized programs.

The platform combines the aesthetics of modern wellness brands with the functionality of enterprise-grade digital products — delivering a seamless, calming, and inspiring digital experience.

> **Note:** This is a **single-tenant platform** — one brand, one website, one database. Instructors are role-based users within the platform (not isolated sub-brands).

---

## 2. Vision

Create the most user-friendly online yoga and wellness platform where users can:

- 🎥 Join **live yoga sessions** with certified instructors
- 📚 Watch **on-demand classes** from the video library
- 📈 **Track wellness progress** across multiple dimensions
- 🗺️ Follow **guided programs** tailored to their goals
- 👩‍🏫 **Connect with certified instructors** directly
- 🤖 Receive **AI-powered wellness recommendations**
- 💳 **Manage memberships and subscriptions** easily

---

## 3. Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Core framework with server-side rendering |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Shadcn UI | Accessible component library |
| Framer Motion | Smooth animations and transitions |
| React Hook Form | Performant form management |
| Zod Validation | Schema-based input validation |

### Backend

| Technology | Purpose |
|---|---|
| Next.js Server Actions | Server-side logic and mutations |
| REST APIs | External integrations (minimal — static JSON preferred) |
| MongoDB | Primary NoSQL database |
| Mongoose | MongoDB ODM (optional, static JSON may suffice) |

### Authentication

| Provider | Method |
|---|---|
| NextAuth | Session management |
| Google OAuth | Social login |
| Email/Password | Traditional login |
| Password Reset | Secure token-based reset flow |

### Payments

| Feature | Details |
|---|---|
| Stripe Subscription Billing | Core payment processor |
| Monthly Plans | Recurring monthly charges |
| Yearly Plans | Discounted annual billing |
| Coupons | Promotional discount codes |
| Invoices | Automated billing receipts |



## 4. Design System

### Brand Identity

| Property | Value |
|---|---|
| **Brand Name** | ZenFlow Yoga |
| **Tagline** | Transform Your Mind, Body & Spirit |
| **Style** | Modern SaaS · Luxury Wellness · Minimalistic · Calm · Elegant |

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary | Sage Green | `#6D9773` |
| Secondary | Muted Olive | `#A6B37D` |
| Accent | Soft Mint | `#E8F5E9` |
| Background | Off-White | `#FAFAF8` |
| Dark | Forest Green | `#2F3E34` |

### Typography

| Role | Font |
|---|---|
| Headings | Poppins |
| Body Text | Inter |

---

## 5. Public Website Pages

### 5.1 Home Page

The landing page is the primary conversion surface. It introduces the platform, builds trust, showcases features, and drives sign-ups.

#### Hero Section

The hero is the first thing users see. It should be visually striking with a calming background (yoga imagery or subtle animation).

| Element | Content |
|---|---|
| **Headline** | Discover Your Inner Balance |
| **Subheadline** | Join live yoga classes, guided meditation sessions, and personalized wellness programs. |
| **Primary CTA** | Start Free Trial |
| **Secondary CTA** | Explore Classes |

#### Trust Section

Displays partner logos and wellness certifications to establish credibility with new visitors.

#### Features Section

Highlights the core platform capabilities in a visually scannable grid or icon layout:

- 🎯 **Live Yoga Classes** — Join real-time sessions with instructors
- 📹 **On-Demand Video Library** — Access hundreds of classes anytime
- 🧘 **Meditation Sessions** — Guided breathwork and mindfulness
- 📊 **Wellness Tracking** — Monitor mood, sleep, and energy
- 🤖 **AI Wellness Assistant** — Personalized recommendations
- 👩‍🏫 **Certified Instructors** — Learn from verified professionals

#### Popular Programs

Showcases the most-enrolled programs to inspire user action:

- Beginner Yoga
- Weight Loss Yoga
- Stress Relief Yoga
- Flexibility Yoga
- Prenatal Yoga

#### Testimonials

Builds social proof through a mix of video and text testimonials from existing users.

#### Pricing Preview

A brief overview of subscription tiers that links to the full Pricing page.

#### Newsletter Signup

Email capture form to grow the marketing list and re-engage potential customers.

#### Footer

| Column | Links |
|---|---|
| Company | About, Blog, Contact |
| Platform | Classes, Programs, Pricing |
| Legal | Privacy Policy, Terms of Service |

---

### 5.2 About Page

Tells the ZenFlow Yoga story to build emotional connection with new visitors and prospective instructors.

**Sections:**

| Section | Description |
|---|---|
| **Mission** | Core purpose and why ZenFlow Yoga exists |
| **Vision** | Long-term aspirations for user wellness transformation |
| **Our Story** | How and why the platform was founded |
| **Yoga Philosophy** | Core beliefs, traditions, and principles the platform follows |
| **Instructor Certifications** | Types of recognized certifications accepted on the platform |
| **Studio Gallery** | Photo gallery of partner studios and class environments |

---

### 5.3 Classes Page

Allows users to discover and filter the full library of live and recorded yoga classes.

#### Filter Options

| Filter | Options |
|---|---|
| Difficulty Level | Beginner, Intermediate, Advanced |
| Duration | Under 20 min, 20–45 min, 45–60 min, 60+ min |
| Yoga Style | Hatha, Vinyasa, Yin, Power, Restorative, etc. |
| Instructor | Dropdown list of available instructors |
| Session Type | Live, Recorded |

#### Class Card

Each class appears as a card with:

| Field | Description |
|---|---|
| Thumbnail | Visual preview image or video still |
| Title | Class name |
| Duration | Length in minutes |
| Difficulty | Beginner / Intermediate / Advanced badge |
| Instructor | Name and avatar |
| Rating | Star rating with review count |
| Join Button | CTA to enroll or watch |

---

### 5.4 Programs Page

Structured multi-week wellness journeys that guide users toward specific health and mindfulness goals.

#### Available Programs

| Program | Goal |
|---|---|
| Weight Loss Journey | Cardio-focused yoga for fat burning |
| Beginner Journey | Foundation skills for first-time practitioners |
| Mindfulness Program | Meditation and mental clarity focus |
| Flexibility Program | Stretching and mobility improvement |
| Strength & Mobility | Muscle building with yoga principles |

#### Each Program Includes

- **Description** — Overview of the program goals and who it's for
- **Weekly Plan** — Day-by-day class schedule for the duration
- **Progress Tracker** — Visual indicator of completion milestones
- **Enrollment CTA** — Button to join the program and start

---

### 5.5 Instructor Directory

Showcases certified instructors to help users find the right teacher for their needs and style.

#### Instructor Profile Card Includes

| Field | Details |
|---|---|
| Profile Image | Professional headshot |
| Biography | Background and teaching philosophy |
| Certifications | RYT-200, RYT-500, or other recognized certs |
| Years of Experience | Total teaching experience |
| Specializations | Yoga styles or populations they focus on |
| Reviews | Aggregated student ratings and comments |
| Upcoming Classes | Live sessions they're scheduled to teach |

---

### 5.6 Pricing Page

Clearly presents the three subscription tiers with a toggle between monthly and annual billing.

#### Plans

| Plan | Key Features |
|---|---|
| **Starter** | Limited classes per month, Community access |
| **Pro** | Unlimited classes, Meditation library, Progress tracking |
| **Premium** | Personal coaching, Nutrition guidance, Priority support |

#### Billing Options

- Monthly billing available on all plans
- Annual billing with a visible **savings indicator** (e.g., "Save 20%")
- Easy plan comparison table

---

### 5.7 Blog

An SEO-optimized content hub for organic traffic and user education.

#### Categories

- 🧘 Yoga
- 🧠 Meditation
- 🥗 Nutrition
- 🌿 Lifestyle
- 💚 Wellness

#### Features

| Feature | Description |
|---|---|
| Search | Full-text search across all articles |
| Categories | Filter articles by topic |
| Tags | Granular topic labels |
| Related Posts | Suggested reading at the end of each article |
| SEO | Optimized metadata, Open Graph, schema markup |

---

### 5.8 Contact Page

Provides multiple ways for users, instructors, and partners to reach support.

**Includes:**

- Contact form (Name, Email, Subject, Message)
- Frequently Asked Questions (FAQ) accordion
- Embedded Google Map (studio or headquarters location)
- Social media links
- Support hours and contact information

---

## 6. Authentication

### Registration

| Field | Type |
|---|---|
| Full Name | Text input |
| Email | Email input |
| Password | Password input |
| Confirm Password | Password confirmation |

### Login

| Method | Details |
|---|---|
| Email/Password | Standard credential-based login |
| Google Login | One-click OAuth via NextAuth |
| Forgot Password | Secure email-based password reset flow |

---

## 7. User Dashboard

The personal hub where authenticated users manage their yoga practice, track progress, and access content.

### 7.1 Dashboard Overview

The home view of the dashboard — a quick snapshot of the user's wellness journey.

| Widget | Description |
|---|---|
| Active Programs | Currently enrolled multi-week programs |
| Upcoming Classes | Next scheduled live sessions |
| Wellness Score | Composite metric from logged activities |
| Yoga Streak | Consecutive days of practice |
| Weekly Activity | Bar or calendar chart of session frequency |

---

### 7.2 My Classes

| Tab | Contents |
|---|---|
| Upcoming | Enrolled live classes yet to occur |
| Completed | History of finished classes |
| Favorites | Classes bookmarked by the user |

---

### 7.3 Video Library

Personal on-demand content center.

| Feature | Description |
|---|---|
| Search | Find videos by keyword |
| Categories | Filter by style, duration, difficulty |
| Favorites | Save preferred content |
| Recently Watched | Quick resume previously viewed videos |

---

### 7.4 Wellness Tracker

Users log daily wellness metrics to monitor their holistic health over time.

**Tracked Metrics:**

- 🧘 Yoga Sessions — Duration and type
- 🧠 Meditation Minutes — Daily mindfulness time
- 😊 Mood — Scale or emoji-based rating
- 💤 Sleep Quality — Hours and quality rating
- ⚡ Energy Levels — Daily energy self-assessment

**Display:** Analytics charts, trend lines, and historical comparisons.

---

### 7.5 Wellness Journal

A private reflective space for daily mental wellness logging.

| Entry Type | Description |
|---|---|
| Daily Mood | Mood rating with optional note |
| Notes | Free-form personal writing |
| Gratitude Entries | Daily gratitude prompts |
| Reflections | End-of-day or post-session reflections |

**Interface:** Calendar-based grid with clickable days to view/add entries.

---

### 7.6 Membership

Users manage all billing and subscription details here.

| Feature | Details |
|---|---|
| Subscription | Current plan name, status, and renewal date |
| Billing History | Table of past charges |
| Payment Methods | Add/remove credit cards via Stripe |
| Invoices | Download PDF invoices per transaction |

---

### 7.7 Profile

| Setting Category | Options |
|---|---|
| Personal Information | Name, email, avatar, bio |
| Wellness Goals | Weight loss, flexibility, mindfulness, etc. |
| Notification Preferences | Email and push notification toggles |
| Security Settings | Change password, 2FA |

---

## 8. Instructor Dashboard

A dedicated workspace for certified instructors to manage classes, students, and earnings.

### 8.1 Manage Classes

Full CRUD capabilities for sessions:

| Action | Details |
|---|---|
| Create | Schedule new live sessions or upload recorded classes |
| Edit | Update class details, time, or description |
| Delete | Remove classes that are cancelled |

---

### 8.2 Student Management

| View | Data Shown |
|---|---|
| Enrolled Students | List of all students in instructor's classes |
| Attendance | Per-class attendance records |
| Progress | Individual student milestones in programs |

---

### 8.3 Earnings Dashboard

| Metric | Description |
|---|---|
| Revenue | Total earnings for the current period |
| Payouts | History of completed payouts |
| Upcoming Payments | Projected next payout and schedule |

---

## 9. Admin Dashboard

The back-office control center for platform operators to monitor and manage all aspects of ZenFlow Yoga.

### 9.1 Analytics

High-level metrics for business performance monitoring:

| Metric | Description |
|---|---|
| Total Users | Cumulative registered users |
| Active Subscribers | Users on a paid plan |
| Revenue | Monthly/annual revenue figures |
| Churn Rate | Percentage of subscribers who cancel |
| Retention Rate | Percentage who remain subscribed |

---

### 9.2 User Management

Full CRUD operations across all user roles:

- **Users** — View, edit, suspend, or delete standard accounts
- **Instructors** — Approve, manage, and deactivate instructor profiles
- **Admins** — Grant or revoke admin access

---

### 9.3 Content Management

Central control for all published platform content:

| Content Type | Actions |
|---|---|
| Classes | Create, edit, feature, or remove classes |
| Programs | Build and update multi-week programs |
| Videos | Upload, tag, categorize, or delete videos |
| Blog Articles | Publish, draft, edit, and archive blog posts |

---

### 9.4 Subscription Management

Manage Stripe-integrated subscription configuration:

| Feature | Details |
|---|---|
| Plans | Create and edit subscription tiers |
| Coupons | Generate discount codes |
| Discounts | Apply time-limited promotions |
| Stripe Products | Sync and manage Stripe product catalog |

---

## 10. AI Wellness Assistant

An intelligent, conversational wellness guide embedded within the platform.

### Capabilities

| Capability | Description |
|---|---|
| 🎯 Class Recommendations | Suggest classes based on user goals and history |
| 📋 Personalized Yoga Plans | Generate weekly practice schedules |
| 🧘 Meditation Suggestions | Recommend sessions based on mood and stress levels |
| 📈 Goal Tracking | Monitor wellness targets and nudge users toward them |
| ❓ Yoga Q&A | Answer questions about poses, benefits, and technique |
| 💬 Daily Motivation | Send personalized motivational messages or affirmations |

---


## 12. Folder Structure (Next.js App Router)

```
├── app/
│   ├── (marketing)/                # Public pages — shared layout
│   │   ├── layout.tsx              #   Navbar + Footer wrapper
│   │   ├── page.tsx                #   Home
│   │   ├── about/page.tsx
│   │   ├── classes/
│   │   │   ├── page.tsx            #   Listing + filters
│   │   │   └── [slug]/page.tsx     #   Detail + player
│   │   ├── programs/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── instructors/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── (dashboard)/                # Authenticated — shared sidebar layout
│   │   ├── layout.tsx              #   Sidebar + Header wrapper
│   │   ├── dashboard/page.tsx      #   Overview widgets
│   │   ├── my-classes/page.tsx     #   Upcoming / Completed / Favorites tabs
│   │   ├── video-library/page.tsx
│   │   ├── wellness/
│   │   │   ├── tracker/page.tsx
│   │   │   └── journal/page.tsx
│   │   ├── membership/page.tsx
│   │   └── profile/page.tsx
│   │
│   ├── instructor/                 # Instructor role — restricted
│   │   ├── layout.tsx
│   │   ├── classes/page.tsx        #   CRUD table
│   │   ├── students/page.tsx
│   │   └── earnings/page.tsx
│   │
│   ├── admin/                      # Admin role — restricted
│   │   ├── layout.tsx
│   │   ├── page.tsx                #   Analytics
│   │   ├── users/page.tsx
│   │   ├── content/
│   │   │   ├── classes/page.tsx
│   │   │   ├── programs/page.tsx
│   │   │   ├── videos/page.tsx
│   │   │   └── blog/page.tsx
│   │   └── subscriptions/page.tsx
│   │
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── reset-password/page.tsx
│   │
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── stripe/webhook/route.ts
│   │   └── ai/chat/route.ts
│   │
│   ├── layout.tsx                  # Root layout (fonts, providers)
│   └── globals.css
│
├── components/
│   ├── ui/                         # shadcn primitives (Button, Card, Modal, Input, etc.)
│   ├── layout/                     # Navbar, Footer, Sidebar, DashboardHeader, MobileNav
│   ├── marketing/                  # HeroSection, FeaturesGrid, Testimonials, PricingCards, etc.
│   ├── classes/                    # ClassCard, ClassGrid, ClassFilters, ClassPlayer
│   ├── programs/                   # ProgramCard, ProgramTimeline, ProgressTracker
│   ├── instructors/                # InstructorCard, InstructorProfile
│   ├── dashboard/                  # WellnessScore, StreakIndicator, WeeklyChart, UpcomingClasses
│   ├── wellness/                   # MetricLogger, MoodSelector, JournalEditor, CalendarGrid
│   ├── blog/                       # BlogCard, BlogList, RelatedPosts
│   ├── ai/                         # ChatWidget, RecommendationCard, SuggestionList
│   └── shared/                     # Pagination, SearchInput, Breadcrumbs, EmptyState, LoadingState, ErrorState
│
├── lib/                            # auth.ts, stripe.ts, ai.ts, utils.ts, constants.ts
├── types/                          # index.ts
├── hooks/                          # useWellnessStreak, useClassFilters, useDebounce, useMediaQuery
├── actions/                        # auth.actions.ts, class.actions.ts, program.actions.ts, wellness.actions.ts, membership.actions.ts, blog.actions.ts
├── public/                         # images/, videos/, fonts/
├── .env.local
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 13. Component Tree

```
RootLayout
├── MarketingLayout
│   ├── Navbar (logo, nav links, auth CTA, mobile hamburger)
│   ├── Page Content
│   │   ├── HomePage
│   │   │   ├── HeroSection (headline, subheadline, CTAs, bg animation)
│   │   │   ├── TrustBar (partner logos, certifications)
│   │   │   ├── FeaturesGrid (6 feature cards in 3x2 grid)
│   │   │   ├── PopularPrograms (horizontal scroll of program cards)
│   │   │   ├── Testimonials (carousel of video/text cards)
│   │   │   ├── PricingPreview (3 tier cards → link to /pricing)
│   │   │   └── NewsletterForm (email input + submit)
│   │   ├── ClassesPage
│   │   │   ├── FilterBar (difficulty, duration, style, instructor, type)
│   │   │   ├── ClassGrid
│   │   │   │   └── ClassCard[] (thumbnail, title, duration, difficulty, instructor, rating, CTA)
│   │   │   ├── LoadingState (skeleton grid)
│   │   │   ├── EmptyState ("No classes match your filters")
│   │   │   └── Pagination
│   │   ├── ClassDetailPage
│   │   │   ├── ClassPlayer (video/live embed)
│   │   │   ├── ClassInfo (title, description, instructor, duration, style)
│   │   │   ├── ReviewsSection (review cards + rating summary)
│   │   │   ├── RelatedClasses (horizontal ClassCard row)
│   │   │   └── EnrollmentCTA (button with gating logic)
│   │   ├── ProgramsPage → ProgramCard grid, filter by goal/difficulty
│   │   ├── ProgramDetailPage → ProgramTimeline, ProgressTracker, week-by-week schedule
│   │   ├── InstructorsPage → InstructorCard grid (photo, name, specializations, rating)
│   │   ├── InstructorProfilePage → bio, certs, reviews, upcoming classes list
│   │   ├── PricingPage → PricingCards with monthly/annual toggle, comparison table
│   │   ├── BlogPage → BlogCard list + sidebar (categories, tags, search)
│   │   ├── BlogPostPage → article content, related posts, share buttons
│   │   └── ContactPage → ContactForm + FAQ accordion + map + support info
│   └── Footer (3 columns: Company, Platform, Legal)
│
├── DashboardLayout (authenticated, sidebar)
│   ├── Sidebar (nav links per role, user avatar, logout)
│   ├── DashboardHeader (breadcrumbs, search, notification bell)
│   ├── Page Content (role-gated)
│   │   ├── DashboardOverview
│   │   │   ├── WellnessScore (circular gauge)
│   │   │   ├── StreakIndicator (fire icon + count)
│   │   │   ├── WeeklyChart (bar chart or calendar heatmap)
│   │   │   ├── UpcomingClasses (vertical ClassCard list)
│   │   │   ├── ActivePrograms (progress bar cards)
│   │   │   └── EmptyState ("Start your first class to see progress")
│   │   ├── MyClassesView → TabBar (Upcoming/Completed/Favorites) + ClassGrid
│   │   ├── VideoLibrary → SearchInput + CategoryFilter + VideoGrid + VideoPlayer modal
│   │   ├── WellnessTracker → MetricLogger per day + TrendChart (7/30 day)
│   │   ├── WellnessJournal → CalendarGrid (clickable days) + EntryEditor (mood/note/gratitude/reflection)
│   │   ├── Membership → CurrentPlanCard + BillingHistory table + PaymentMethods + Invoice download
│   │   └── Profile → PersonalInfoForm + GoalsSelector + NotificationSettings + SecuritySettings
│   │
│   ├── InstructorLayout
│   │   ├── ManageClasses → DataTable (CRUD: title, date, status) + CreateClassForm (modal)
│   │   ├── Students → DataTable (student name, email, classes, attendance %) + detail drawer
│   │   └── Earnings → MetricCards (revenue, payouts, upcoming) + PayoutHistory table
│   │
│   └── AdminLayout
│       ├── Analytics → MetricCards (users, subscribers, revenue, churn) + Charts (line, bar)
│       ├── Users → DataTable + RoleBadge + Suspend/Edit actions
│       ├── Content → TabGroup (Classes, Programs, Videos, Blog) + DataTable per tab
│       └── Subscriptions → PlanEditor + CouponGenerator + StripeProductSync
│
└── AuthLayout (centered card)
    ├── LoginForm (email, password, Google OAuth button, "Forgot password?" link)
    ├── RegisterForm (name, email, password, confirm, Google OAuth)
    ├── ForgotPasswordForm (email → success message)
    └── ResetPasswordForm (new password, confirm → success)
```

### Page States Convention

| State | Behavior |
|---|---|
| **Loading** | Skeleton placeholders matching content shape (not spinners) |
| **Empty** | Illustration + message + CTA (e.g., "Book your first class") |
| **Error** | Alert banner + retry button, never raw error text |
| **Offline** | Banner: "You're offline. Some features may be unavailable." |
| **Gated** | Blurred preview + "Upgrade to access" overlay for paywalled content |

---

## 14. SEO Requirements

| Feature | Implementation |
|---|---|
| Dynamic Metadata | Per-page title, description, and keywords via Next.js metadata API |
| Open Graph | og:image, og:title, og:description on every page |
| Twitter Cards | twitter:card, twitter:image meta tags |
| Schema.org Markup | JSON-LD for classes, programs, instructors, blog articles |
| Sitemap.xml | Auto-generated from route list, submitted on deploy |
| Robots.txt | Allow all crawl, disallow /dashboard/ /admin/ /instructor/ |

---

## 15. Performance Requirements

| Target | Detail |
|---|---|
| Lighthouse Score | 95+ across all 4 categories (Performance, Accessibility, Best Practices, SEO) |
| Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| Lazy Loading | Images, videos, and below-fold components load on scroll intersection |
| Image Optimization | Next.js `<Image>` with WebP, responsive sizes, blur placeholder |
| Code Splitting | Automatic via Next.js App Router route segments |
| Server Components | Default to RSC; client components only when interactivity needed |
| Streaming | Use loading.tsx and Suspense boundaries for data-fetching segments |

---

## 16. Accessibility

**Standard:** WCAG 2.1 AA compliance

| Requirement | Implementation |
|---|---|
| Keyboard Navigation | All interactive elements focusable and operable via Tab/Enter/Escape |
| ARIA Labels | aria-label on icon buttons, aria-describedby on inputs, role on custom widgets |
| Color Contrast | Minimum 4.5:1 for text, 3:1 for large text and UI components |
| Screen Reader Support | Semantic HTML (nav, main, section, aside), live regions for dynamic content |
| Focus Management | Focus trap in modals, skip-to-content link, visible focus rings |
| Reduced Motion | `prefers-reduced-motion` disables Framer Motion animations |

---

## 17. Wireframes (Text-Based Layouts)

### 17.1 Home Page

```
┌─────────────────────────────────────────────────────┐
│  [Logo]  Classes  Programs  Instructors  Pricing Blog│ [Sign In] [Start Free Trial]  ← Navbar
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │  🌅 Background: yoga studio / nature scene   │    │
│  │                                             │    │  ↑ Hero
│  │    Discover Your Inner Balance              │    │    Section
│  │    Join live classes, meditation & wellness  │    │
│  │                                             │    │
│  │    [Start Free Trial]  [Explore Classes]    │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │  Trusted by: [Logo] [Logo] [Logo] [Logo]    │    │  ↑ Trust Bar
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐                        │
│  │ Live │ │Video │ │Medita│  ...6 feature cards     │  ↑ Features
│  │Classes│ │Library│ │tion  │   in 3×2 grid          │    Grid
│  └──────┘ └──────┘ └──────┘                        │
│                                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Beginner │ │Weight    │ │Stress    │  ...programs │  ↑ Popular
│  │ Yoga     │ │Loss Yoga │ │Relief    │   horizontal │    Programs
│  └──────────┘ └──────────┘ └──────────┘   scroll    │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │ "This platform changed my life" ⭐⭐⭐⭐⭐     │    │  ↑ Testimonials
│  │   — Sarah M.                    [▶] [▶] [▶] │    │    (carousel)
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Starter  │ │   Pro    │ │ Premium  │            │  ↑ Pricing
│  │ $19/mo   │ │ $39/mo   │ │ $79/mo   │            │    Preview
│  │ [Sign Up]│ │[Sign Up] │ │[Sign Up] │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │  Join our newsletter  [email@...] [Subscribe]│    │  ↑ Newsletter
│  └─────────────────────────────────────────────┘    │
│                                                     │
├─────────────────────────────────────────────────────┤
│  Company  │  Platform  │  Legal                     │
│  About    │  Classes   │  Privacy Policy            │  ← Footer
│  Blog     │  Programs  │  Terms of Service          │
│  Contact  │  Pricing   │                            │
└─────────────────────────────────────────────────────┘
```

### 17.2 Dashboard Overview (Student)

```
┌─────────┬────────────────────────────────────────────┐
│ ⚡ZenFlow│  Dashboard  >  Overview                    │ ← Header
│         │                                  🔔 👤     │
├─────────┼────────────────────────────────────────────┤
│  📊 Dash│  ┌──────┐ ┌──────────┐ ┌───────────────┐  │
│  📺 MyCl│  │  85  │ │🔥 12-day │ │ 🎯 Beginner   │  │ ← Metrics
│  🎬 Vide│  │Well-  │ │  Streak  │ │   Program     │  │   Row
│  🧘 Well│  │ness   │ │          │ │   Week 3/8    │  │
│  📖 Jour│  │Score  │ │          │ │ [█████░░░]    │  │
│  💳 Memb│  └──────┘ └──────────┘ └───────────────┘  │
│  👤 Prof│                                            │
│         │  ┌──────────────────────────────────┐      │
│  ───────│  │  Weekly Activity                  │      │ ← Chart
│  🚪 Log│  │  ██ ████ █ ██████ ███ ██████      │      │
│         │  │  M   T    W   T     F   S    S    │      │
│         │  └──────────────────────────────────┘      │
│         │                                            │
│         │  ┌──────────────────────────────────┐      │
│         │  │  Upcoming Live Classes           │      │ ← Widget
│         │  │  ┌──────────────────────────┐    │      │
│         │  │  │🧘 Vinyasa Flow    Today 3pm│    │      │
│         │  │  │   with Sarah        [Join]│    │      │
│         │  │  └──────────────────────────┘    │      │
│         │  │  ┌──────────────────────────┐    │      │
│         │  │  │🧘 Yin Yoga         Tomorrow│    │      │
│         │  │  │   with Mark    10am [Join]│    │      │
│         │  │  └──────────────────────────┘    │      │
│         │  └──────────────────────────────────┘      │
└─────────┴────────────────────────────────────────────┘
```

### 17.3 Classes Page (Public)

```
┌─────────────────────────────────────────────────────┐
│  [Logo]  Classes  Programs  Instructors  Pricing Blog│ [Sign In] [Start Free Trial]
├─────────────────────────────────────────────────────┤
│  Classes                                            │
│  ┌──────────────────────────────────────────────┐   │
│  │ Filters: [All Levels ▼] [Any Duration ▼]     │   │ ← FilterBar
│  │          [Style ▼] [Instructor ▼] [Live/All ▼]│   │
│  │          Search: [........................]   │   │
│  └──────────────────────────────────────────────┘   │
│                                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐               │
│  │ 🎬      │ │ 🎬      │ │ 🎬      │               │
│  │ Vinyasa │ │ Yin     │ │ Hatha   │               │ ← ClassGrid
│  │ Flow    │ │ Yoga    │ │ Basics  │               │   3-column
│  │ 45 min  │ │ 30 min  │ │ 60 min  │               │
│  │ Beginner│ │Advanced │ │ All     │               │
│  │ Sarah   │ │ Mark    │ │ Priya   │               │
│  │ ⭐ 4.8  │ │ ⭐ 4.6  │ │ ⭐ 4.9  │               │
│  │ [Enroll]│ │[Enroll] │ │[Enroll] │               │
│  └─────────┘ └─────────┘ └─────────┘               │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐               │
│  │ 🎬      │ │ 🎬      │ │ 🎬      │               │
│  │ Power   │ │ Restor  │ │ Prenatal│               │
│  │ Yoga    │ │ ative   │ │ Yoga    │               │
│  │ 50 min  │ │ 40 min  │ │ 35 min  │               │
│  │ Interm. │ │ Beginner│ │ Beginner│               │
│  │ Jake    │ │ Emma    │ │ Priya   │               │
│  │ ⭐ 4.7  │ │ ⭐ 4.9  │ │ ⭐ 4.8  │               │
│  │ [Enroll]│ │[Enroll] │ │[Enroll] │               │
│  └─────────┘ └─────────┘ └─────────┘               │
│                                                     │
│  ← Previous  Page 1 of 4  Next →                    │ ← Pagination
└─────────────────────────────────────────────────────┘
```

### 17.4 Mobile Layout (Dashboard)

```
┌─────────────────────┐
│ ☰  ZenFlow    🔔 👤 │ ← Top Bar
├─────────────────────┤
│                     │
│ ┌─────┐ ┌────────┐ │
│ │ 85  │ │🔥 12d  │ │
│ │Well-│ │ Streak │ │
│ │ness │ │        │ │
│ └─────┘ └────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Weekly Activity │ │
│ │ ██ ██ █ ███ ██  │ │ ← Stacked
│ │ M T W T F S S   │ │   vertically
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Upcoming Classes│ │
│ │ Vinyasa  3pm    │ │
│ │ [Join]          │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Active Programs │ │
│ │ Beginner Wk 3/8 │ │
│ │ [█████░░░]      │ │
│ └─────────────────┘ │
│                     │
│ [Bottom Nav]        │ ← Mobile Nav Bar
│ 🏠 📺 🧘 💳 👤      │
└─────────────────────┘
```

---

## 18. Deliverables

| # | Deliverable | Description |
|---|---|---|
| 1 | Next.js Project Structure | Organized App Router directory with pages, layouts, and components |
| 2 | MongoDB Schema / Static JSON Data | MongoDB collections design or static JSON files for all entities |
| 3 | Data Layer | Static JSON data files (no API endpoints; data consumed directly via imports) |
| 4 | Authentication System | NextAuth setup with Google and email login |
| 5 | Stripe Billing Integration | Subscription creation, webhooks, and portal |
| 6 | Public Website | All marketing pages with SEO and animations |
| 7 | User Dashboard | Full-featured personal dashboard |
| 8 | Instructor Dashboard | Class and earnings management for instructors |
| 9 | Admin Dashboard | Analytics, user, and content management |
| 10 | AI Wellness Assistant | Integrated AI chat and recommendation engine |
| 11 | Responsive Mobile Design | Mobile-first layouts for all pages |
| 12 | Production-Ready Codebase | Deployable, documented, and scalable code |

---

> The final platform should feel comparable to leading wellness and fitness SaaS products, featuring **premium aesthetics**, **exceptional UX**, **smooth animations**, **scalable architecture**, and **enterprise-grade performance**.

---

*ZenFlow Yoga PRD — Version 1.0*