import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings } from 'lucide-react';
import { toast } from 'sonner';

interface SettingsCardProps {
  dailyLimit: number;
  onUpdateLimit: (limit: number) => void;
}

export const SettingsCard = ({ dailyLimit, onUpdateLimit }: SettingsCardProps) => {
  const [limit, setLimit] = useState(dailyLimit.toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLimit = parseFloat(limit) || 0;
    onUpdateLimit(newLimit);
    toast.success('Daily limit updated successfully!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Settings
        </CardTitle>
        <CardDescription>
          Set your daily spending limit to track your budget
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dailyLimit">Daily Spending Limit (₹)</Label>
            <Input
              id="dailyLimit"
              type="number"
              step="0.01"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder="0.00"
            />
            <p className="text-xs text-muted-foreground">
              You'll receive alerts when approaching or exceeding this limit
            </p>
          </div>
          <Button type="submit" className="w-full">
            Update Limit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
