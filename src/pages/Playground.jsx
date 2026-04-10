import { useState } from "react";
import { Play, RotateCcw, Copy, Download } from "lucide-react";

const templates = {
  useStateCounter: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <h2 style={{ fontSize: 48, marginBottom: 20 }}>{count}</h2>
      <button onClick={() => setCount(c => c + 1)}
        style={{ padding: '8px 20px', marginRight: 8, cursor: 'pointer' }}>
        +
      </button>
      <button onClick={() => setCount(c => c - 1)}
        style={{ padding: '8px 20px', cursor: 'pointer' }}>
        -
      </button>
    </div>
  );
}

export default Counter;`,

  useEffectFetch: `import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(r => r.json())
      .then(d => {
        setData(d);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default DataFetcher;`,

  CustomHook: `import { useState, useCallback } from 'react';

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

function App() {
  const [on, toggle] = useToggle();
  return (
    <div style={{ padding: 40 }}>
      <p>Status: <strong>{on ? 'ON' : 'OFF'}</strong></p>
      <button onClick={toggle} style={{ padding: '8px 20px', cursor: 'pointer' }}>
        Toggle
      </button>
    </div>
  );
}

export default App;`,

  ContextProvider: `import { createContext, useContext, useState } from 'react';

const ThemeCtx = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeCtx);
  return (
    <button style={{
      background: theme === 'dark' ? '#333' : '#eee',
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '10px 20px', cursor: 'pointer', border: 'none',
    }}>
      Theme: {theme}
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeCtx.Provider value={theme}>
      <div style={{ padding: 40 }}>
        <ThemedButton />
        <br /><br />
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
          style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Switch Theme
        </button>
      </div>
    </ThemeCtx.Provider>
  );
}

export default App;`,
};

const defaultCode = `function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;`;

export default function Playground() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [running, setRunning] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setError(null);
    // In a real playground we'd use a sandboxed iframe. Here we show a placeholder.
    setTimeout(() => {
      setOutput(code);
      setRunning(false);
    }, 600);
  };

  const handleReset = () => {
    setCode(defaultCode);
    setOutput(null);
    setError(null);
  };

  const handleTemplate = (key) => {
    setCode(templates[key]);
    setOutput(null);
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-1 sm:mb-1">
            React Playground
          </h1>
          <p className="text-ink-dim text-sm sm:text-base">
            Experiment with React code in real-time
          </p>
        </div>
        <button className="flex items-center gap-2 bg-card border border-line rounded-lg px-4 py-2 text-ink-dim text-[13px] font-medium hover:border-line-soft transition-colors">
          <Download size={15} /> Export
        </button>
      </div>

      {/* Editor + Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Editor */}
        <div className="bg-card border border-line rounded-lg overflow-hidden flex flex-col">
          {/* Editor topbar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-elevated">
            <span className="text-[13px] text-ink-dim font-mono">App.jsx</span>
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="text-ink-faint hover:text-ink-dim transition-colors"
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(code)}
                className="text-ink-faint hover:text-ink-dim transition-colors"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>

          {/* Textarea editor */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="flex-1 bg-transparent border-none outline-none text-[#a8b1c4] font-mono text-[13px] leading-[1.7] p-5 resize-none placeholder-ink-faint"
            style={{ minHeight: 280 }}
          />

          {/* Run button */}
          <button
            onClick={handleRun}
            disabled={running}
            className={`m-4 ${running ? "bg-green-600" : "bg-green"} text-white border-none rounded-lg px-3 py-3 text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all`}
          >
            <Play size={16} fill="#fff" />
            {running ? "Running..." : "Run Code"}
          </button>
        </div>

        {/* Preview */}
        <div className="bg-white border border-line rounded-lg overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 bg-gray-50">
            <span className="text-[13px] text-gray-600 font-medium">
              Preview
            </span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-600" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center min-h-[280px] p-5 text-gray-400 text-sm">
            {output ? (
              <div className="w-full text-gray-700 text-[13px] font-mono">
                <p className="text-green font-bold mb-2">✓ Code executed</p>
                <p className="text-gray-500 text-xs">
                  A live preview would render here in a sandboxed iframe
                  environment.
                </p>
              </div>
            ) : (
              'Click "Run Code" to see the output'
            )}
          </div>
        </div>
      </div>

      {/* Quick templates */}
      <div>
        <p className="text-[13px] text-ink-dim mb-3">Quick Templates</p>
        <div className="flex gap-2.5 flex-wrap">
          {Object.keys(templates).map((key) => (
            <button
              key={key}
              onClick={() => handleTemplate(key)}
              className="bg-card border border-line rounded-lg px-4 py-2 text-[13px] text-ink-dim font-medium hover:border-line-soft hover:text-ink transition-all"
            >
              {key.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
