# CareerCraftAI 🚀

A cutting-edge AI-powered career development platform that helps professionals advance their careers through personalized guidance, industry insights, and intelligent tools.
**CLICK THE LINKI BELOW FOR A LIVE DEMO!**
🔗 *****[Live Demo](https://career-craft-ai-liart.vercel.app/)*****

![CareerCraftAI Landing]()

## 🌟 Key Features

### 1. Smart Resume Builder
- AI-powered resume optimization
- Industry-specific templates
- ATS-friendly formatting
- Real-time feedback and suggestions
- Professional formatting with Markdown support
- Contact information management
- Skills and experience sections
- One-click PDF download

![Resume Builder](public/screenshots/resume-builder.png)

### 2. Intelligent Cover Letter Generator
- Context-aware content generation
- Company and role-specific customization
- Professional tone and formatting
- Easy editing and customization
- Job details integration
- Tailored content based on job description

![Cover Letter Generator](public/screenshots/cover-letter.png)

### 3. Advanced Interview Preparation
- Industry-specific question bank
- AI-powered response analysis
- Performance tracking and analytics
- Personalized improvement suggestions
- Real-time scoring
- Detailed explanations for each answer
- Progress tracking over time

![Mock Interview](public/screenshots/mock-interview.png)
![Interview Results](public/screenshots/interview-results.png)
![Interview Preparation](public/screenshots/interview-prep.png)

### 4. Industry Insights
- Real-time market trends
- Salary data and benchmarks
- In-demand skills analysis
- Career growth opportunities
- Interactive salary charts
- Industry growth metrics
- Demand level indicators
- Top skills tracking

![Industry Insights](public/screenshots/industry-insights.png)

### 5. Professional Profile Management
- Comprehensive profile setup
- Industry selection
- Skills management
- Experience tracking
- Bio customization
- Career path visualization

![Profile Setup](public/screenshots/profile-setup.png)

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React, TailwindCSS, shadcn/ui
- **Backend**: Next.js Server Actions, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Clerk
- **AI Integration**: Google Gemini Pro
- **Styling**: TailwindCSS, CSS Modules
- **Deployment**: Vercel

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/tanzimine/CareerCraftAI.git
   ```

2. Install dependencies:
   ```bash
   cd CareerCraftAI
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Required environment variables:
   ```
   DATABASE_URL=your_database_url
   DIRECT_URL=your_direct_database_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   INNGEST_EVENT_KEY=your_inngest_event_key
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## 🌐 Architecture

CareerCraftAI follows a modern, scalable architecture:

- **Server Components**: Utilizing Next.js 14's server components for optimal performance
- **Database Schema**: Carefully designed Prisma schema for efficient data management
- **API Routes**: RESTful API design with Next.js API routes
- **Authentication**: Secure user management with Clerk
- **AI Integration**: Seamless integration with Google's Gemini Pro API
- **Background Jobs**: Automated industry insights updates with Inngest

## 🔒 Security Features

- Secure authentication with Clerk
- Encrypted data storage
- HTTPS-only communication
- Protected API endpoints
- Environment variable protection
- Database connection pooling
- Rate limiting on API routes

## 🎯 Future Roadmap

- [ ] AI-powered networking recommendations
- [ ] Career path visualization
- [ ] Skill gap analysis
- [ ] Personalized learning recommendations
- [ ] Integration with job boards
- [ ] Mobile application
- [ ] Advanced analytics dashboard
- [ ] Interview recording and analysis
- [ ] Peer review system
- [ ] Mentor matching

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tanzim**
- GitHub: [@tanzimine](https://github.com/tanzimine)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Clerk for secure authentication
- Google for Gemini Pro API
- Vercel for hosting
- The open-source community

---

<p align="center">Made with 💗 by Tanzim</p>
