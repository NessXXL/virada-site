export const signalCards = [
  {
    name: "Positive",
    code: "UP",
    description: "Good news. Price likely rises.",
    movement: "Rise",
    confidence: "92%",
    className: "positive"
  },
  {
    name: "Negative",
    code: "DOWN",
    description: "Bad news. Price likely falls.",
    movement: "Fall",
    confidence: "88%",
    className: "negative"
  },
  {
    name: "Neutral",
    code: "FLAT",
    description: "Weak news. No major move expected.",
    movement: "Flat",
    confidence: "81%",
    className: "neutral"
  }
];

export const liveSignals = [
  {
    ticker: "NVDA",
    headline: "AI demand beats expectations",
    signal: "Positive",
    direction: "+3.4%",
    confidence: 94
  },
  {
    ticker: "TSLA",
    headline: "Supplier delay pressures guidance",
    signal: "Negative",
    direction: "-2.1%",
    confidence: 87
  },
  {
    ticker: "AAPL",
    headline: "Mixed reaction to product update",
    signal: "Neutral",
    direction: "±0.3%",
    confidence: 76
  }
];

export const workflow = [
  {
    number: "01",
    title: "Scan news",
    text: "Virada reads market headlines fast."
  },
  {
    number: "02",
    title: "Classify",
    text: "Positive, Negative, or Neutral."
  },
  {
    number: "03",
    title: "Cut bias",
    text: "Hype and panic get filtered."
  },
  {
    number: "04",
    title: "Call direction",
    text: "You see the likely move."
  }
];

export const stats = [
  { value: "85%", label: "Accuracy" },
  { value: "3", label: "Signal types" },
  { value: "<1s", label: "Fast output" },
  { value: "24/7", label: "News watch" }
];

export const faqs = [
  {
    question: "Is Virada financial advice?",
    answer: "No. It is a research tool, not financial advice."
  },
  {
    question: "What does 85% mean?",
    answer: "It means current directional accuracy, not guaranteed profit."
  },
  {
    question: "Why news?",
    answer: "News moves markets. Virada makes that signal easier to read."
  },
  {
    question: "What makes it different?",
    answer: "It combines sentiment, bias filtering, and direction prediction."
  }
];
