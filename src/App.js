import React, { useState, useCallback } from 'react';
import './App.css';
import { categories, prompts, searchPrompts } from './promptsData';

function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCards, setExpandedCards] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const filteredPrompts = searchPrompts(query, activeCategory);

  const toggleExpand = useCallback((id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const copyToClipboard = useCallback(async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }, []);

  // 按类别分组
  const grouped = filteredPrompts.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="badge">2026年4月更新</div>
        <h1>GPT Image 2 <span>提示词大全</span></h1>
        <p>43+ 可直接复制的高质量提示词模板，覆盖抖音 / 小红书 / 朋友圈 / 微博 / Twitter / B站</p>
      </header>

      <div className="container">
        {/* 统计 */}
        <div className="stats">
          <div className="stat-card">
            <div className="number">{prompts.length}</div>
            <div className="label">提示词模板</div>
          </div>
          <div className="stat-card">
            <div className="number">{categories.length - 1}</div>
            <div className="label">分类场景</div>
          </div>
          <div className="stat-card">
            <div className="number">{Object.keys(grouped).length}</div>
            <div className="label">已展示</div>
          </div>
        </div>

        {/* 搜索 & 筛选 */}
        <div className="controls">
          <input
            type="text"
            className="search-box"
            placeholder="搜索提示词、场景、平台..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <div className="filter-tags">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tag ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 提示词列表 */}
        {filteredPrompts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
            😕 没有找到匹配的提示词，试试其他关键词？
          </div>
        ) : (
          <div className="prompts-grid">
            {Object.entries(grouped).map(([catId, items]) => {
              const cat = categories.find(c => c.id === catId);
              return (
                <React.Fragment key={catId}>
                  <div className="category-header">
                    <h2>{cat.emoji} {cat.label}（{items.length}个）</h2>
                    <p>{cat.id === 'all' ? `共 ${filteredPrompts.length} 个提示词模板` : `${cat.label} 分类`}</p>
                  </div>
                  {items.map(prompt => (
                    <div
                      key={prompt.id}
                      className={`prompt-card ${expandedCards[prompt.id] ? 'expanded' : ''}`}
                    >
                      <div className="prompt-card-header" onClick={() => toggleExpand(prompt.id)}>
                        <span className="emoji">{cat.emoji}</span>
                        <div className="title-area">
                          <h3>{prompt.title}</h3>
                          <span className="platform-tag">{prompt.platform}</span>
                        </div>
                        <span className="toggle-icon">+</span>
                      </div>
                      <div className="prompt-card-body">
                        <p className="prompt-description">{prompt.description}</p>
                        <div className="prompt-text-box">
                          <button
                            className={`copy-btn ${copiedId === prompt.id ? 'copied' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(prompt.prompt, prompt.id);
                            }}
                          >
                            {copiedId === prompt.id ? '✅ 已复制' : '📋 复制提示词'}
                          </button>
                          {prompt.prompt}
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>GPT Image 2 提示词大全 · 整理于 2026年4月23日</p>
        <p style={{ marginTop: 8 }}>数据来源：OpenAI 官方 · fal.ai · ChatIMG.ai · 爱范儿 · 虎嗅 · 腾讯新闻 · 知乎</p>
      </footer>
    </div>
  );
}

export default App;
