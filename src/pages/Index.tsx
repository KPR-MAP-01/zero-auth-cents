import { useState, useEffect } from 'react';
import { ExpenseForm } from '@/components/ExpenseForm';
import { ExpenseList } from '@/components/ExpenseList';
import { Dashboard } from '@/components/Dashboard';
import { ExpenseChart } from '@/components/ExpenseChart';
import { SettingsCard } from '@/components/SettingsCard';
import { Expense, getExpenses, saveExpenses, getSettings, saveSettings } from '@/utils/localStorage';
import { Wallet, Presentation } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [dailyLimit, setDailyLimit] = useState(0);

  useEffect(() => {
    const loadedExpenses = getExpenses();
    const loadedSettings = getSettings();
    setExpenses(loadedExpenses);
    setDailyLimit(loadedSettings.dailyLimit);
  }, []);

  const handleAddExpense = (expenseData: Omit<Expense, 'id' | 'createdAt'>) => {
    if (editingExpense) {
      const updatedExpenses = expenses.map((exp) =>
        exp.id === editingExpense.id
          ? { ...expenseData, id: exp.id, createdAt: exp.createdAt }
          : exp
      );
      setExpenses(updatedExpenses);
      saveExpenses(updatedExpenses);
      setEditingExpense(null);
      toast.success('Expense updated successfully!');
    } else {
      const newExpense: Expense = {
        ...expenseData,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      saveExpenses(updatedExpenses);
      toast.success('Expense added successfully!');
    }
  };

  const handleEditExpense = (expense: Expense) => {
    setEditingExpense(expense);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteExpense = (id: string) => {
    const updatedExpenses = expenses.filter((exp) => exp.id !== id);
    setExpenses(updatedExpenses);
    saveExpenses(updatedExpenses);
    toast.success('Expense deleted successfully!');
  };

  const handleUpdateLimit = (limit: number) => {
    setDailyLimit(limit);
    saveSettings({ dailyLimit: limit });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Daily Expense Tracker</h1>
                <p className="text-muted-foreground">Track, analyze, and manage your daily expenses</p>
              </div>
            </div>
            <Link to="/presentation">
              <Button variant="outline" className="gap-2">
                <Presentation className="h-4 w-4" />
                View Presentation
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <Dashboard expenses={expenses} dailyLimit={dailyLimit} />

          <ExpenseChart expenses={expenses} />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <ExpenseForm
                onSubmit={handleAddExpense}
                editingExpense={editingExpense}
                onCancelEdit={() => setEditingExpense(null)}
              />
              <ExpenseList
                expenses={expenses}
                onEdit={handleEditExpense}
                onDelete={handleDeleteExpense}
              />
            </div>

            <div>
              <SettingsCard dailyLimit={dailyLimit} onUpdateLimit={handleUpdateLimit} />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>All data is stored locally in your browser. No account required.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
