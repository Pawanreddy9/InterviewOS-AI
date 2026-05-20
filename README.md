# InterviewOS AI - AI-Powered Mock Interview Platform

A modern SaaS web application for practicing realistic AI-powered technical and behavioral interviews for IT roles using voice and chat interaction.

## 🎯 Features

### Core Features
- ✅ Google OAuth & Email/Password Authentication
- ✅ AI-Powered Interview Simulation
- ✅ Voice-Based Interviews (Speech Recognition & Synthesis)
- ✅ 3 IT Roles (Technical Support, Software Engineer, QA Tester)
- ✅ Real-time Chat Interface
- ✅ Dark Mode Support
- ✅ Responsive Mobile Design

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Glassmorphism
- **State Management**: Zustand
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Storage**: Firebase Storage
- **AI**: Google Gemini API
- **Voice**: Web Speech API

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Firebase Project
- Gemini API Key

### Installation

```bash
git clone https://github.com/Pawanreddy9/InterviewOS-AI.git
cd InterviewOS-AI
npm install
```

### Configuration

1. Create `.env.local`:
```bash
cp .env.example .env.local
```

2. Add your Firebase credentials and Gemini API key to `.env.local`

### Running Locally

```bash
npm run dev
# Visit http://localhost:3000
```

## 📄 Pages

- `/` - Landing page
- `/login` - Authentication
- `/dashboard` - User dashboard
- `/interview` - Role selection
- `/interview-session` - Live interview

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Firebase
```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

## 📝 Environment Variables

See `.env.example` for all required variables.

## 🤝 Support

For issues and questions, create a GitHub issue.

## 📄 License

MIT License
