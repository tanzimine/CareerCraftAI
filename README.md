# CareerCraftAI 🚀

CareerCraftAI is a cutting-edge AI-powered career development platform that helps professionals advance their careers through personalized guidance, industry insights, and intelligent tools.

![CareerCraftAI Dashboard](public/banner.jpeg)

## 🌟 Features

### 1. Smart Resume Builder
- AI-powered resume optimization
- Industry-specific templates
- ATS-friendly formatting
- Real-time feedback and suggestions

### 2. Intelligent Cover Letter Generator
- Context-aware content generation
- Company and role-specific customization
- Professional tone and formatting
- Easy editing and customization

### 3. Advanced Interview Preparation
- Industry-specific question bank
- AI-powered response analysis
- Performance tracking and analytics
- Personalized improvement suggestions

### 4. Industry Insights
- Real-time market trends
- Salary data and benchmarks
- In-demand skills analysis
- Career growth opportunities

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
   Fill in your environment variables:
   - Database URL
   - Clerk API keys
   - Gemini API key

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

## 🔒 Security

- Secure authentication with Clerk
- Encrypted data storage
- HTTPS-only communication
- Regular security updates
- Protected API endpoints

## 🎯 Future Roadmap

- [ ] AI-powered networking recommendations
- [ ] Career path visualization
- [ ] Skill gap analysis
- [ ] Personalized learning recommendations
- [ ] Integration with job boards
- [ ] Mobile application

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
- The open-source community

---

<p align="center">Made with 💗 by Tanzim</p>
