import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit2, Receipt } from 'lucide-react';
import { Expense } from '@/utils/localStorage';
import { format } from 'date-fns';

interface ExpenseListProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onDelete: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  Food: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  Travel: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Bills: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  Shopping: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  Entertainment: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  Healthcare: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Education: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  Other: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
};

export const ExpenseList = ({ expenses, onEdit, onDelete }: ExpenseListProps) => {
  const sortedExpenses = [...expenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (expenses.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Receipt className="h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-lg font-medium text-muted-foreground">No expenses yet</p>
          <p className="text-sm text-muted-foreground">Add your first expense to get started</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {sortedExpenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium">{expense.title}</h3>
                  <Badge className={categoryColors[expense.category] || categoryColors.Other}>
                    {expense.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(expense.date), 'MMM dd, yyyy')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-primary">
                  ${expense.amount.toFixed(2)}
                </span>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(expense)}
                    className="h-8 w-8"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(expense.id)}
                    className="h-8 w-8 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
