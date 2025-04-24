import React from 'react';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Filter,
  Calendar,
  Search
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card, CardContent } from '../ui/Card';

interface TimelineEvent {
  id: string;
  type: 'document' | 'compliance' | 'alert';
  title: string;
  description: string;
  timestamp: string;
  status?: 'success' | 'warning' | 'pending';
}

export function HistoryPage() {
  const events: TimelineEvent[] = [
    {
      id: '1',
      type: 'document',
      title: 'SAF Batch Certificate Uploaded',
      description: 'Certificate for Batch #4721 has been uploaded and is pending verification',
      timestamp: '2024-03-15T10:30:00Z',
      status: 'pending'
    },
    {
      id: '2',
      type: 'compliance',
      title: 'Compliance Check Passed',
      description: 'Monthly compliance check completed successfully with 92% score',
      timestamp: '2024-03-14T16:45:00Z',
      status: 'success'
    },
    {
      id: '3',
      type: 'alert',
      title: 'Document Verification Required',
      description: 'Carbon intensity calculations need review for SAF Batch #3742',
      timestamp: '2024-03-14T09:15:00Z',
      status: 'warning'
    },
    {
      id: '4',
      type: 'document',
      title: 'Flight Records Updated',
      description: 'March flight records have been updated with new SAF consumption data',
      timestamp: '2024-03-13T14:20:00Z',
      status: 'success'
    }
  ];

  const getEventIcon = (type: string, status?: string) => {
    switch (type) {
      case 'document':
        return <FileText className="h-5 w-5" />;
      case 'compliance':
        return <CheckCircle className="h-5 w-5" />;
      case 'alert':
        return <AlertTriangle className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getEventStyles = (type: string, status?: string) => {
    const baseStyles = "p-2 rounded-full";
    
    if (status === 'success') {
      return `${baseStyles} bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400`;
    }
    if (status === 'warning') {
      return `${baseStyles} bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400`;
    }
    if (status === 'pending') {
      return `${baseStyles} bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400`;
    }
    
    switch (type) {
      case 'document':
        return `${baseStyles} bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400`;
      case 'compliance':
        return `${baseStyles} bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400`;
      case 'alert':
        return `${baseStyles} bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400`;
      default:
        return `${baseStyles} bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400`;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">History</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track all document and compliance activities
          </p>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search events..."
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          Date Range
        </Button>
        <Button variant="outline" className="flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          Filter Events
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="flex gap-4">
                <div className={getEventStyles(event.type, event.status)}>
                  {getEventIcon(event.type, event.status)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {event.description}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(event.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}