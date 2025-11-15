export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "hackathon-2024",
    title: "Hackathon 2024: Breaking Records",
    excerpt: "Our annual hackathon saw unprecedented participation with over 200 students building innovative solutions.",
    content: `Our annual hackathon was an incredible success, bringing together over 200 talented students from across the university. The event spanned 48 hours of non-stop coding, creativity, and innovation.

Teams worked on diverse projects ranging from AI-powered healthcare solutions to sustainable technology platforms. The energy in the room was electric as participants collaborated, debugged, and pushed their limits.

The winning team created an innovative platform that uses machine learning to optimize campus resource allocation, potentially saving the university thousands of dollars annually. Their solution impressed the judges with its practicality and scalability.

We're incredibly proud of all participants who pushed their boundaries and created amazing projects. Special thanks to our sponsors and mentors who made this event possible.`,
    author: "Tech Team",
    date: "March 10, 2024",
    category: "Events",
    readTime: "5 min read",
  },
  {
    id: "machine-learning-workshop",
    title: "Introduction to Machine Learning Workshop",
    excerpt: "A comprehensive guide to getting started with ML frameworks and building your first neural network.",
    content: `Last week, our AI Chapter hosted an intensive workshop on Machine Learning fundamentals. Over 100 students attended this hands-on session where they learned to build their first neural networks.

The workshop covered essential topics including:
- Understanding neural network architectures
- Data preprocessing and feature engineering
- Training models with TensorFlow and PyTorch
- Evaluating model performance and avoiding overfitting

Participants worked through real-world datasets, building models to solve classification and regression problems. By the end of the session, everyone had successfully trained and deployed their first ML model.

The feedback was overwhelmingly positive, with many students expressing interest in joining our AI research group. We'll be hosting more advanced workshops in the coming months.`,
    author: "AI Chapter",
    date: "March 5, 2024",
    category: "Workshops",
    readTime: "4 min read",
  },
  {
    id: "web3-blockchain-future",
    title: "Web3 and Blockchain: The Future",
    excerpt: "Exploring decentralized technologies and how they're reshaping the digital landscape.",
    content: `The blockchain revolution is here, and it's transforming how we think about digital ownership, trust, and decentralization. Our Blockchain Team has been deep-diving into Web3 technologies and their potential applications.

In this article, we explore:
- The fundamentals of blockchain technology
- Smart contracts and their real-world applications
- Decentralized finance (DeFi) and its impact on traditional banking
- NFTs beyond digital art
- The future of decentralized autonomous organizations (DAOs)

We've been experimenting with building decentralized applications (dApps) on various blockchain platforms, including Ethereum, Solana, and Polygon. The potential for creating trustless, transparent systems is enormous.

Whether you're interested in development, economics, or just curious about the technology, blockchain offers fascinating opportunities for innovation. Join our blockchain study group to learn more!`,
    author: "Blockchain Team",
    date: "February 28, 2024",
    category: "Articles",
    readTime: "6 min read",
  },
  {
    id: "university-tech-fest-win",
    title: "CodeSpace Wins University Tech Fest",
    excerpt: "Our team secured first place in the inter-college coding competition with groundbreaking projects.",
    content: `We're thrilled to announce that CodeSpace has won first place at the Inter-University Tech Fest! Our team competed against 30+ colleges and emerged victorious with our innovative projects.

The competition tested skills across multiple domains:
- Algorithm optimization challenges
- Full-stack development sprint
- System design presentations
- Live debugging competitions

Our winning project was a real-time collaborative coding platform with AI-assisted code review and intelligent suggestions. The judges were particularly impressed by our implementation of WebRTC for seamless real-time collaboration and our novel approach to code quality analysis.

This victory is a testament to the hard work and dedication of our members. Congratulations to everyone who participated and represented CodeSpace with excellence!

We're already preparing for next year's competition. If you want to be part of our competition team, join us at our weekly coding practice sessions.`,
    author: "Competition Team",
    date: "February 20, 2024",
    category: "News",
    readTime: "4 min read",
  },
  {
    id: "cybersecurity-basics",
    title: "Cybersecurity Essentials for Developers",
    excerpt: "Learn the fundamental security practices every developer should know to build secure applications.",
    content: `In today's digital landscape, security isn't optional—it's essential. This guide covers the fundamental cybersecurity practices every developer should implement.

Key topics covered:
- Input validation and sanitization
- Authentication and authorization best practices
- Protecting against common vulnerabilities (SQL injection, XSS, CSRF)
- Secure API design
- Encryption and secure data storage

We dive deep into OWASP Top 10 vulnerabilities and how to prevent them. Understanding these security principles from the start will help you build more robust and trustworthy applications.

Our security team has prepared hands-on labs where you can practice identifying and fixing vulnerabilities in a safe environment. Don't miss our upcoming cybersecurity workshop next month!`,
    author: "Security Team",
    date: "February 15, 2024",
    category: "Articles",
    readTime: "7 min read",
  },
  {
    id: "mobile-app-dev-workshop",
    title: "Mobile App Development: From Idea to Launch",
    excerpt: "A complete workshop series on building and deploying mobile applications for iOS and Android.",
    content: `Mobile development has never been more accessible. Our latest workshop series covered the complete journey from ideation to app store deployment.

Workshop highlights:
- Choosing the right framework (React Native vs Flutter vs Native)
- UI/UX design principles for mobile
- State management and data persistence
- API integration and offline functionality
- Testing and debugging strategies
- App store submission process

Participants built a fully functional mobile app during the workshop, learning best practices for performance optimization and user experience design. Many teams are now continuing to develop their apps for actual launch.

The mobile development community at CodeSpace is growing rapidly. Join our mobile dev channel to collaborate on projects and share knowledge!`,
    author: "Mobile Dev Team",
    date: "February 10, 2024",
    category: "Workshops",
    readTime: "5 min read",
  },
];
