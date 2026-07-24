import React, { useState } from 'react';
import { X, Sparkles, Bot, Cpu, Activity, Play, RefreshCw, Download, Send, CheckCircle2, BarChart2, Zap, ArrowRight, Database, ChevronRight } from 'lucide-react';

interface InteractiveDemosModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'counsellor' | 'automl' | 'emotion';
}

export const InteractiveDemosModal: React.FC<InteractiveDemosModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'automl',
}) => {
  const [activeTab, setActiveTab] = useState<'counsellor' | 'automl' | 'emotion'>(initialTab);

  // 1. AutoML Sandbox State
  const [selectedDataset, setSelectedDataset] = useState<'churn' | 'housing' | 'speech'>('churn');
  const [scalingMethod, setScalingMethod] = useState<'standard' | 'minmax'>('standard');
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [automlFinished, setAutomlFinished] = useState<boolean>(true);

  // 2. Chatbot State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; options?: string[] }>>([
    {
      sender: 'bot',
      text: "Hello! I am Navadeep's AI Career Counsellor. I can guide you on Machine Learning roadmaps, skill requirements, and course recommendations. What career path would you like to explore today?",
      options: ['Machine Learning Engineer Roadmap', 'Deep Learning vs MLOps', 'Recommended AI Courses'],
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');

  // 3. Audio Emotion State
  const [audioSample, setAudioSample] = useState<'happy' | 'anxious' | 'calm' | 'focused'>('happy');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  // Handle AutoML Run
  const handleRunAutoML = () => {
    setIsTraining(true);
    setAutomlFinished(false);
    setTimeout(() => {
      setIsTraining(false);
      setAutomlFinished(true);
    }, 1800);
  };

  // Handle Chatbot Submit
  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg = { sender: 'user' as const, text: query };
    setChatMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');

    // Generate response based on intent keywords
    setTimeout(() => {
      let botResponse = "I analyzed your query using Navadeep's Rasa NLP pipeline. ";
      const lower = query.toLowerCase();

      if (lower.includes('machine learning') || lower.includes('ml roadmap') || lower.includes('roadmap')) {
        botResponse += "Here is the recommended ML Engineer Roadmap:\n1. Core Python & Mathematics (Linear Algebra, Calculus, Statistics)\n2. Data Wrangling: Pandas, NumPy, SQL\n3. ML Frameworks: Scikit-learn, XGBoost, PyTorch\n4. MLOps & Deployment: Streamlit, FastAPI, Joblib, Docker.";
      } else if (lower.includes('course') || lower.includes('recommended')) {
        botResponse += "Top recommended courses based on current industry demands:\n• PyTorch Deep Learning Specialization\n• Rasa Conversational AI Developer Certification\n• Fast.ai Practical Deep Learning for Coders\n• Machine Learning Engineering on AWS / Cloud.";
      } else if (lower.includes('deep learning') || lower.includes('mlops')) {
        botResponse += "Deep Learning focuses on neural network architectures (CNNs, Transformers, Audio MFCCs), whereas MLOps focuses on model versioning, automated testing, containerization, and monitoring models in production.";
      } else {
        botResponse += `Based on your profile, I recommend strengthening core Python, PyTorch, and SQL skills. Would you like a step-by-step 90-day learning curriculum?`;
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e121e] border border-white/15 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-[#121727] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
                <span>Navadeep Sai's AI Sandbox</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Live Interactive Simulations
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Explore functional prototypes of projects mentioned in the resume.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="bg-[#0b0e18] px-4 py-3 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('automl')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'automl'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>1. AutoML Experiment Runner</span>
          </button>

          <button
            onClick={() => setActiveTab('counsellor')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'counsellor'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>2. Rasa AI Career Counsellor</span>
          </button>

          <button
            onClick={() => setActiveTab('emotion')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'emotion'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>3. Voice Emotion Neural Classifier</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: AutoML Platform Simulator */}
          {activeTab === 'automl' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white font-['Outfit']">
                    AutoML Experiment & Model Benchmarking Suite
                  </h3>
                  <p className="text-xs text-slate-300">
                    Automates data scaling, cross-validation, hyperparameter tuning, and metric evaluation.
                  </p>
                </div>
                <button
                  onClick={handleRunAutoML}
                  disabled={isTraining}
                  className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-2 transition-all shrink-0 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isTraining ? 'animate-spin' : ''}`} />
                  <span>{isTraining ? 'Training AutoML Models...' : 'Execute AutoML Pipeline'}</span>
                </button>
              </div>

              {/* Configurations Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Dataset Choice */}
                <div className="p-4 rounded-xl bg-[#141928] border border-white/5 space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-300">Select Input Dataset:</label>
                  <select
                    value={selectedDataset}
                    onChange={(e) => setSelectedDataset(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 text-xs text-white rounded-lg p-2.5 font-mono focus:border-emerald-500"
                  >
                    <option value="churn">Customer Churn (Classification - 10k rows)</option>
                    <option value="housing">Real Estate Price (Regression - 5k rows)</option>
                    <option value="speech">Voice Audio Emotion (Multi-class - 3k rows)</option>
                  </select>
                </div>

                {/* Preprocessing */}
                <div className="p-4 rounded-xl bg-[#141928] border border-white/5 space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-300">Scaler Preprocessing:</label>
                  <select
                    value={scalingMethod}
                    onChange={(e) => setScalingMethod(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 text-xs text-white rounded-lg p-2.5 font-mono focus:border-emerald-500"
                  >
                    <option value="standard">StandardScaler (Mean=0, Std=1)</option>
                    <option value="minmax">MinMaxScaler (Range [0, 1])</option>
                  </select>
                </div>

                {/* Model Persistence */}
                <div className="p-4 rounded-xl bg-[#141928] border border-white/5 space-y-2 flex flex-col justify-between">
                  <label className="text-xs font-mono font-bold text-slate-300">Model Persistence:</label>
                  <button
                    onClick={() => alert("Joblib model binary export generated successfully! (automl_model.joblib)")}
                    className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-mono font-semibold border border-slate-700 flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Export Model (.joblib)</span>
                  </button>
                </div>

              </div>

              {/* Progress or Results */}
              {isTraining ? (
                <div className="p-8 rounded-xl bg-[#141928] border border-emerald-500/30 text-center space-y-4">
                  <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">Running Automated Grid Search & Cross-Validation...</p>
                    <p className="text-xs font-mono text-slate-400">Evaluating Random Forest, PyTorch MLP, LightGBM, and SVM</p>
                  </div>
                </div>
              ) : automlFinished && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>Model Benchmark Leaderboard</span>
                    <span className="text-emerald-400">Status: Complete (5-Fold CV)</span>
                  </h4>

                  <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#121624]">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#181d30] text-slate-300 border-b border-white/10">
                        <tr>
                          <th className="p-3">Model Architecture</th>
                          <th className="p-3">Accuracy</th>
                          <th className="p-3">Precision</th>
                          <th className="p-3">Recall</th>
                          <th className="p-3">F1-Score</th>
                          <th className="p-3">Train Time</th>
                          <th className="p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-200">
                        <tr className="bg-emerald-500/10 font-bold text-emerald-300">
                          <td className="p-3 flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500 text-slate-950 font-extrabold">BEST</span>
                            <span>Random Forest Ensemble</span>
                          </td>
                          <td className="p-3">94.8%</td>
                          <td className="p-3">95.2%</td>
                          <td className="p-3">94.4%</td>
                          <td className="p-3">0.948</td>
                          <td className="p-3">1.24s</td>
                          <td className="p-3 text-emerald-400">Optimal</td>
                        </tr>
                        <tr>
                          <td className="p-3">PyTorch Deep Neural Net (MLP)</td>
                          <td className="p-3">93.2%</td>
                          <td className="p-3">93.5%</td>
                          <td className="p-3">92.9%</td>
                          <td className="p-3">0.932</td>
                          <td className="p-3">3.41s</td>
                          <td className="p-3 text-slate-400">Deployed</td>
                        </tr>
                        <tr>
                          <td className="p-3">LightGBM Gradient Booster</td>
                          <td className="p-3">92.6%</td>
                          <td className="p-3">92.8%</td>
                          <td className="p-3">92.4%</td>
                          <td className="p-3">0.926</td>
                          <td className="p-3">0.82s</td>
                          <td className="p-3 text-slate-400">Evaluated</td>
                        </tr>
                        <tr>
                          <td className="p-3">Support Vector Machine (RBF)</td>
                          <td className="p-3">88.5%</td>
                          <td className="p-3">89.0%</td>
                          <td className="p-3">88.0%</td>
                          <td className="p-3">0.885</td>
                          <td className="p-3">2.10s</td>
                          <td className="p-3 text-slate-400">Evaluated</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Feature Importance Preview */}
                  <div className="p-4 rounded-xl bg-[#141928] border border-white/5 space-y-3">
                    <h5 className="text-xs font-mono font-bold text-slate-300">Feature Importance Breakdown:</h5>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                          <span>User Activity / Interaction Hours</span>
                          <span>38.2%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full" style={{ width: '38.2%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                          <span>Support Ticket Density</span>
                          <span>27.5%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-teal-400 rounded-full" style={{ width: '27.5%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
                          <span>Tenure Length (Months)</span>
                          <span>18.9%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-400 rounded-full" style={{ width: '18.9%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          )}

          {/* TAB 2: AI Career Counsellor Chatbot */}
          {activeTab === 'counsellor' && (
            <div className="space-y-4 h-[550px] flex flex-col animate-in fade-in duration-300">
              
              {/* Chat Header */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold text-white font-mono">Rasa Conversational AI Core v2.4</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  NLP Pipeline Active
                </span>
              </div>

              {/* Chat Message Window */}
              <div className="flex-1 bg-[#121624] border border-white/10 rounded-2xl p-4 overflow-y-auto space-y-4">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-emerald-500 text-slate-950 font-semibold rounded-br-none'
                          : 'bg-[#1a1f32] text-slate-200 border border-white/10 rounded-bl-none whitespace-pre-line'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.options && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleSendMessage(opt)}
                            className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2 pt-2"
              >
                <input
                  type="text"
                  placeholder="Ask for AI career roadmaps, skill tips, or course suggestions..."
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  className="flex-1 bg-[#121624] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shrink-0"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          )}

          {/* TAB 3: Voice Speech Emotion Neural Classifier */}
          {activeTab === 'emotion' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-['Outfit']">
                    Speech Audio Acoustic Feature Analyzer
                  </h3>
                  <p className="text-xs text-slate-300">
                    PyTorch deep neural network processing MFCCs, Chroma, & Mel-spectrograms from speech.
                  </p>
                </div>
                <Activity className="w-6 h-6 text-emerald-400 shrink-0" />
              </div>

              {/* Sample Audio Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'happy', label: 'Happy / Excited Voice', icon: '😄' },
                  { id: 'anxious', label: 'Anxious / Stressed Voice', icon: '😰' },
                  { id: 'calm', label: 'Calm / Relaxed Voice', icon: '😌' },
                  { id: 'focused', label: 'Focused / Neutral Voice', icon: '🎯' },
                ].map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => setAudioSample(sample.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      audioSample === sample.id
                        ? 'bg-emerald-500/20 border-emerald-500 text-white font-bold'
                        : 'bg-[#141928] border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-lg mb-1">{sample.icon}</div>
                    <div className="text-xs font-mono">{sample.label}</div>
                  </button>
                ))}
              </div>

              {/* Simulated Waveform & Audio Play Control */}
              <div className="p-6 rounded-xl bg-[#121624] border border-white/10 space-y-4 text-center">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                  <span>Audio Waveform Signal (16kHz Mono WAV)</span>
                  <span>Duration: 3.4 seconds</span>
                </div>

                {/* Simulated Audio Visualizer Bars */}
                <div className="h-20 flex items-center justify-center gap-1.5 px-4">
                  {[40, 65, 80, 45, 90, 100, 75, 50, 30, 85, 95, 60, 40, 70, 85, 90, 100, 60, 35, 75, 55, 90, 80, 45].map(
                    (height, i) => (
                      <div
                        key={i}
                        className={`w-2 rounded-full transition-all duration-300 ${
                          isPlayingAudio ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'
                        }`}
                        style={{ height: isPlayingAudio ? `${Math.max(15, Math.round(height * Math.random()))}%` : `${height}%` }}
                      />
                    )
                  )}
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>{isPlayingAudio ? 'Pause Audio' : 'Play Audio & Run PyTorch Model'}</span>
                  </button>
                </div>
              </div>

              {/* Prediction Probability Breakdown */}
              <div className="p-5 rounded-xl bg-[#141928] border border-white/5 space-y-4">
                <h4 className="text-xs font-mono font-bold text-slate-300 flex items-center justify-between">
                  <span>PyTorch Neural Classification Output</span>
                  <span className="text-emerald-400">Confidence: 91.2%</span>
                </h4>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-200 mb-1">
                      <span>Happy / Positive Sentiment</span>
                      <span className="text-emerald-400 font-bold">
                        {audioSample === 'happy' ? '91.2%' : audioSample === 'calm' ? '12.4%' : '4.1%'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: audioSample === 'happy' ? '91.2%' : audioSample === 'calm' ? '12.4%' : '4.1%' }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-200 mb-1">
                      <span>Calm / Relaxed</span>
                      <span className="text-teal-400 font-bold">
                        {audioSample === 'calm' ? '88.6%' : audioSample === 'happy' ? '6.1%' : '11.0%'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-400 rounded-full transition-all duration-500"
                        style={{ width: audioSample === 'calm' ? '88.6%' : audioSample === 'happy' ? '6.1%' : '11.0%' }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-200 mb-1">
                      <span>Anxious / High Arousal</span>
                      <span className="text-amber-400 font-bold">
                        {audioSample === 'anxious' ? '94.1%' : '2.7%'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-500"
                        style={{ width: audioSample === 'anxious' ? '94.1%' : '2.7%' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5">
                  <span>MFCC Coefficients: 13 Features</span>
                  <span>Sampling Rate: 22050 Hz</span>
                  <span>Model Architecture: 1D-CNN + BiLSTM</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
