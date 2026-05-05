import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <Layout
      title="Farida Bot - AI-Powered Learning"
      description="Learn Physical AI & Humanoid Robotics with AI assistance">

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Master <span className={styles.gradient}>Physical AI</span> & Robotics
            </h1>
            <p className={styles.heroSubtitle}>
              Learn from comprehensive guides with AI-powered assistance. Ask Farida Bot anything!
            </p>
            <div className={styles.heroButtons}>
              <a href={useBaseUrl('/chapter-01')} className={`${styles.btn} ${styles.btnPrimary}`}>
                📚 Start Learning
              </a>
              <button
                onClick={() => setChatOpen(true)}
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                💬 Chat with AI
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.robotIcon}>🤖</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Choose Farida Bot?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🧠</div>
            <h3>AI-Powered Learning</h3>
            <p>Get instant answers to your questions about robotics and AI concepts</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📖</div>
            <h3>Comprehensive Content</h3>
            <p>14 detailed chapters covering everything from basics to advanced topics</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Interactive Learning</h3>
            <p>Learn at your own pace with interactive examples and explanations</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔧</div>
            <h3>Practical Knowledge</h3>
            <p>Real-world applications and hands-on guidance for robotics projects</p>
          </div>
        </div>
      </div>

      {/* Chapters Preview */}
      <div className={styles.chapters}>
        <h2 className={styles.sectionTitle}>Featured Chapters</h2>
        <div className={styles.chapterGrid}>
          {[
            { num: 1, title: 'Physics Simulators', icon: '⚙️' },
            { num: 2, title: 'Hardware Components', icon: '🔩' },
            { num: 3, title: 'Control Systems', icon: '🎮' },
            { num: 4, title: 'Sensing & Perception', icon: '👁️' },
            { num: 5, title: 'AI Integration', icon: '🧠' },
            { num: 6, title: 'Motion Planning', icon: '🚀' },
          ].map((chapter) => (
            <a
              key={chapter.num}
              href={useBaseUrl(`/chapter-0${chapter.num}`)}
              className={styles.chapterCard}
            >
              <div className={styles.chapterIcon}>{chapter.icon}</div>
              <h3>Chapter {chapter.num}</h3>
              <p>{chapter.title}</p>
              <span className={styles.readMore}>Read More →</span>
            </a>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.cta}>
        <h2>Ready to Learn?</h2>
        <p>Start your journey into Physical AI and Humanoid Robotics today</p>
        <button
          onClick={() => setChatOpen(true)}
          className={`${styles.btn} ${styles.btnLarge}`}
        >
          Ask Farida Bot Now 🤖
        </button>
      </div>

      {/* Floating Chat Button */}
      <button
        className={styles.floatingChat}
        onClick={() => setChatOpen(!chatOpen)}
        title="Chat with Farida Bot"
      >
        <span className={styles.chatIcon}>💬</span>
      </button>

      {/* Chat Modal */}
      {chatOpen && (
        <div className={styles.chatModal}>
          <div className={styles.chatHeader}>
            <h3>Farida Bot 🤖</h3>
            <button
              onClick={() => setChatOpen(false)}
              className={styles.closeBtn}
            >
              ✕
            </button>
          </div>
          <div className={styles.chatBody}>
            <p>👋 Hi! I'm Farida Bot. Ask me anything about Physical AI, Robotics, or the content in this book!</p>
            <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
              💡 Try asking: "What is Physical AI?" or "Explain control systems"
            </p>
          </div>
          <div className={styles.chatFooter}>
            <input
              type="text"
              placeholder="Type your question..."
              className={styles.chatInput}
            />
            <button className={styles.sendBtn}>Send</button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
