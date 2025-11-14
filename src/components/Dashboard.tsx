import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Calendar, DollarSign, AlertCircle, Target } from 'lucide-react';
import { Expense } from '@/utils/localStorage';
import { startOfWeek, endOfWeek, isWithinInterval, format } from 'date-fns';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface DashboardProps {
  expenses: Expense[];
  dailyLimit: number;
}

export const Dashboard = ({ expenses, dailyLimit }: DashboardProps) => {
  const today = new Date().toISOString().split('T')[0];
  const todayExpenses = expenses.filter((e) => e.date === today);
  const todayTotal = todayExpenses.reduce((sum, e) => sum + e.amount, 0);

  const weekStart = startOfWeek(new Date());
  const weekEnd = endOfWeek(new Date());
  const weekExpenses = expenses.filter((e) =>
    isWithinInterval(new Date(e.date), { start: weekStart, end: weekEnd })
  );
  const weekTotal = weekExpenses.reduce((sum, e) => sum + e.amount, 0);

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const averageDaily = expenses.length > 0 ? totalExpenses / new Set(expenses.map((e) => e.date)).size : 0;

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const highestCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];

  const limitPercentage = dailyLimit > 0 ? (todayTotal / dailyLimit) * 100 : 0;
  const isNearLimit = limitPercentage >= 80 && limitPercentage < 100;
  const isOverLimit = limitPercentage >= 100;

  return (
    <div className="space-y-6">
      {dailyLimit > 0 && (isNearLimit || isOverLimit) && (
        <Alert variant={isOverLimit ? 'destructive' : 'default'} className={isNearLimit ? 'border-warning bg-warning/10' : ''}>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {isOverLimit
              ? `You've exceeded your daily limit by $${(todayTotal - dailyLimit).toFixed(2)}!`
              : `You're at ${limitPercentage.toFixed(0)}% of your daily limit. Consider your spending!`}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Spending</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${todayTotal.toFixed(2)}</div>
            {dailyLimit > 0 && (
              <div className="mt-2 space-y-1">
                <Progress value={Math.min(limitPercentage, 100)} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  ${dailyLimit.toFixed(2)} daily limit
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${weekTotal.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {format(weekStart, 'MMM dd')} - {format(weekEnd, 'MMM dd')}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${totalExpenses.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {expenses.length} transaction{expenses.length !== 1 ? 's' : ''}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${averageDaily.toFixed(2)}</div>
            {highestCategory && (
              <p className="text-xs text-muted-foreground mt-1">
                Top: {highestCategory[0]} (${highestCategory[1].toFixed(2)})
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
