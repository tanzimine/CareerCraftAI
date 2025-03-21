# CareerCraftAI 🚀

A cutting-edge AI-powered career development platform that helps professionals advance their careers through personalized guidance, industry insights, and intelligent tools.
**CLICK THE LINK FOR A LIVE DEMO!**
🔗 *****[Live Demo](https://career-craft-ai-liart.vercel.app/)*****

<img width="805" alt="Image" src="https://github.com/user-attachments/assets/48fc8288-35ef-4d36-bf00-cd5080e4ddc6" />
<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/21a9119a-783b-43ba-9559-9c050337b023" />

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

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/51627486-e8cd-4bd7-94c2-0329de4e13e5" />

### 2. Intelligent Cover Letter Generator
- Context-aware content generation
- Company and role-specific customization
- Professional tone and formatting
- Easy editing and customization
- Job details integration
- Tailored content based on job description

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/d3cc4746-8c18-45e9-9a34-d47e1b0f13fc" />

### 3. Advanced Interview Preparation
- Industry-specific question bank
- AI-powered response analysis
- Performance tracking and analytics
- Personalized improvement suggestions
- Real-time scoring
- Detailed explanations for each answer
- Progress tracking over time

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/7941ffa5-40b5-415f-8cca-a395b965dd0e" />
<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/af57d76b-e684-47a3-b0c7-1ab869b96975" />
<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/87686775-596c-4ffd-84a0-2ca7d6489bdc" />

### 4. Industry Insights
- Real-time market trends
- Salary data and benchmarks
- In-demand skills analysis
- Career growth opportunities
- Interactive salary charts
- Industry growth metrics
- Demand level indicators
- Top skills tracking

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/4b304ac8-646e-421b-b832-3df8053330f8" />

### 5. Professional Profile Management
- Comprehensive profile setup
- Industry selection
- Skills management
- Experience tracking
- Bio customization
- Career path visualization

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/21a9119a-783b-43ba-9559-9c050337b023" />

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
