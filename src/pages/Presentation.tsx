import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home, BarChart3, Calendar, Target, PieChart, Database, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'Daily Expense Tracker',
    subtitle: 'Track, Analyze, and Manage Your Daily Expenses',
    icon: Calendar,
    content: (
      <div className="space-y-6 text-center">
        <p className="text-xl text-muted-foreground">
          A lightweight, offline-friendly web application designed to help you manage your finances effectively.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="bg-primary/10 px-6 py-3 rounded-lg">
            <p className="font-semibold text-primary">No Login Required</p>
          </div>
          <div className="bg-primary/10 px-6 py-3 rounded-lg">
            <p className="font-semibold text-primary">100% Offline</p>
          </div>
          <div className="bg-primary/10 px-6 py-3 rounded-lg">
            <p className="font-semibold text-primary">Persistent Storage</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Key Features Overview',
    subtitle: 'Everything you need to manage expenses',
    icon: Zap,
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border rounded-lg p-6">
          <CheckCircle className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-bold text-lg mb-2">Add & Manage Expenses</h3>
          <p className="text-muted-foreground">Easily add, edit, and delete expenses with title, amount, category, and date.</p>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <CheckCircle className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-bold text-lg mb-2">Auto-Categorization</h3>
          <p className="text-muted-foreground">Smart categorization based on keywords in expense titles.</p>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <CheckCircle className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-bold text-lg mb-2">Spending Analytics</h3>
          <p className="text-muted-foreground">Track daily, weekly, and total expenses with detailed insights.</p>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <CheckCircle className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-bold text-lg mb-2">Daily Limit Alerts</h3>
          <p className="text-muted-foreground">Set spending limits and get alerts when approaching them.</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Add & Manage Expenses',
    subtitle: 'Simple and intuitive expense tracking',
    icon: Calendar,
    content: (
      <div className="space-y-6">
        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-bold text-lg mb-4">Expense Details</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-1 mt-1">
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Title</p>
                <p className="text-sm text-muted-foreground">Descriptive name for your expense</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-1 mt-1">
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Amount (₹)</p>
                <p className="text-sm text-muted-foreground">Expense amount in Indian Rupees</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-1 mt-1">
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Category</p>
                <p className="text-sm text-muted-foreground">Food, Travel, Bills, Shopping, Entertainment, Healthcare, Education, Other</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-1 mt-1">
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Date</p>
                <p className="text-sm text-muted-foreground">When the expense occurred</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <p className="font-semibold text-primary mb-2">✏️ Edit Anytime</p>
          <p className="text-muted-foreground">Click edit button to modify any expense details</p>
        </div>
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
          <p className="font-semibold text-destructive mb-2">🗑️ Delete Easily</p>
          <p className="text-muted-foreground">Remove unwanted expenses with a single click</p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Auto-Categorization',
    subtitle: 'Smart keyword-based categorization',
    icon: Zap,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground text-center">
          The app automatically suggests categories based on keywords in your expense title, saving you time!
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <p className="font-bold text-orange-600 mb-2">🍕 Food</p>
            <p className="text-sm text-muted-foreground">pizza, restaurant, lunch, dinner, breakfast, food, meal</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="font-bold text-blue-600 mb-2">✈️ Travel</p>
            <p className="text-sm text-muted-foreground">uber, taxi, bus, train, flight, petrol, fuel</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="font-bold text-red-600 mb-2">💡 Bills</p>
            <p className="text-sm text-muted-foreground">electricity, water, internet, phone, rent, bill</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="font-bold text-purple-600 mb-2">🛍️ Shopping</p>
            <p className="text-sm text-muted-foreground">amazon, flipkart, clothes, shoes, shopping</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="font-bold text-pink-600 mb-2">🎬 Entertainment</p>
            <p className="text-sm text-muted-foreground">movie, netflix, spotify, game, concert</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <p className="font-bold text-green-600 mb-2">🏥 Healthcare</p>
            <p className="text-sm text-muted-foreground">doctor, hospital, medicine, pharmacy, health</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Dashboard & Analytics',
    subtitle: 'Comprehensive spending insights',
    icon: BarChart3,
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border rounded-lg p-6">
            <Calendar className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2">Today's Spending</h3>
            <p className="text-muted-foreground">Real-time tracking of daily expenses with progress bar showing limit usage</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <BarChart3 className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2">This Week</h3>
            <p className="text-muted-foreground">Weekly spending summary with date range</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2">Total Expenses</h3>
            <p className="text-muted-foreground">Overall spending with transaction count</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2">Daily Average</h3>
            <p className="text-muted-foreground">Average daily spending and highest spending category</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Daily Limit Alerts',
    subtitle: 'Stay within your budget',
    icon: Target,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground text-center">
          Set a daily spending limit and get real-time alerts to help you maintain financial discipline.
        </p>
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-primary">✅ Under Budget</h3>
            <p className="text-muted-foreground">When spending is below 80% of daily limit, you're in the safe zone</p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-yellow-700 dark:text-yellow-400">⚠️ Approaching Limit</h3>
            <p className="text-muted-foreground">At 80-99% of limit, you get a warning to be mindful of spending</p>
          </div>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-destructive">🚫 Over Budget</h3>
            <p className="text-muted-foreground">When exceeding the limit, you see how much you've overspent</p>
          </div>
        </div>
        <div className="bg-card border rounded-lg p-6 text-center">
          <p className="font-semibold mb-2">Configure Your Limit</p>
          <p className="text-sm text-muted-foreground">Set or update your daily spending limit anytime from the Settings card</p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Visual Charts',
    subtitle: 'Data visualization for better insights',
    icon: PieChart,
    content: (
      <div className="space-y-6">
        <div className="bg-card border rounded-lg p-6">
          <PieChart className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-bold text-lg mb-2">Category Breakdown</h3>
          <p className="text-muted-foreground mb-4">Interactive pie chart showing spending distribution across categories</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span>See which categories consume most of your budget</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Hover over segments for detailed amounts</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span>Identify spending patterns at a glance</span>
            </li>
          </ul>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <BarChart3 className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-bold text-lg mb-2">Daily Spending Trends</h3>
          <p className="text-muted-foreground mb-4">Bar chart showing expenses over the last 7 days</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Track spending variations day by day</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Identify high-spending days</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Make informed budgeting decisions</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'LocalStorage Persistence',
    subtitle: 'Your data stays safe, even offline',
    icon: Database,
    content: (
      <div className="space-y-6">
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
          <Database className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">100% Browser-Based Storage</h3>
          <p className="text-muted-foreground">All your data is stored locally in your browser using localStorage</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-green-600">✓ No Account Required</h4>
            <p className="text-sm text-muted-foreground">Start tracking immediately without registration</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-green-600">✓ Works Offline</h4>
            <p className="text-sm text-muted-foreground">Full functionality without internet connection</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-green-600">✓ Privacy First</h4>
            <p className="text-sm text-muted-foreground">Your data never leaves your device</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-green-600">✓ Persistent Data</h4>
            <p className="text-sm text-muted-foreground">Survives browser refresh and restart</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-green-600">✓ Lightweight</h4>
            <p className="text-sm text-muted-foreground">No backend, fast and efficient</p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-green-600">✓ Free Forever</h4>
            <p className="text-sm text-muted-foreground">No subscriptions or hidden costs</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Technical Stack',
    subtitle: 'Modern web technologies',
    icon: Zap,
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-blue-600">Frontend</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span><strong>React 18</strong> - Modern UI library</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span><strong>TypeScript</strong> - Type-safe development</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span><strong>Vite</strong> - Lightning-fast build tool</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-purple-600">Styling</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                <span><strong>Tailwind CSS</strong> - Utility-first styling</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                <span><strong>Shadcn UI</strong> - Beautiful components</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                <span><strong>Lucide Icons</strong> - Clean icon library</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-green-600">Data Management</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <span><strong>localStorage API</strong> - Client-side storage</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <span><strong>React Hooks</strong> - State management</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <span><strong>date-fns</strong> - Date manipulation</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-orange-600">Visualization</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                <span><strong>Recharts</strong> - Chart library</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                <span><strong>Responsive Design</strong> - Mobile-first</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                <span><strong>Dark Mode</strong> - Theme support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Thank You!',
    subtitle: 'Start tracking your expenses today',
    icon: CheckCircle,
    content: (
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Daily Expense Tracker</h3>
          <p className="text-xl text-muted-foreground">Simple. Smart. Secure.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="font-bold text-primary text-3xl mb-2">0</p>
            <p className="text-sm text-muted-foreground">Setup Required</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="font-bold text-primary text-3xl mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Offline & Private</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="font-bold text-primary text-3xl mb-2">∞</p>
            <p className="text-sm text-muted-foreground">Free Forever</p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-semibold">Target Users</p>
          <p className="text-muted-foreground">Students, freelancers, and anyone seeking a simple, offline expense tracker</p>
        </div>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Home className="h-5 w-5" />
            Go to App
          </Button>
        </Link>
      </div>
    ),
  },
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div 
      className="min-h-screen bg-background flex flex-col"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Icon className="h-6 w-6 text-primary" />
            <div>
              <h2 className="font-bold text-lg">{slide.title}</h2>
              <p className="text-sm text-muted-foreground">{slide.subtitle}</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              Back to App
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl">
          <div className="animate-fade-in">
            {slide.content}
          </div>
        </div>
      </main>

      {/* Footer with Navigation */}
      <footer className="border-t bg-card px-6 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <p className="text-sm text-muted-foreground">
              Slide {currentSlide + 1} of {slides.length}
            </p>

            <Button
              variant="outline"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Use arrow keys (← →) or buttons to navigate
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;