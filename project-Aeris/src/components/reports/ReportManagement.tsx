import React, { useState } from 'react';
import { Share, Edit, Download, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

interface DocumentSection {
  title: string;
  items: DocumentItem[];
}

interface DocumentItem {
  name: string;
  count?: number;
  date?: string;
  completed?: boolean;
}

export function ReportManagement() {
  const [sections] = useState<DocumentSection[]>([
    {
      title: "Flight & Pilot Operations Documents",
      items: [
        { name: "Pilot Logbooks", completed: false },
        { name: "Flight Plans", completed: false },
        { name: "Aircraft Load Sheets", count: 5, date: "Friday, 10 June 2024", completed: true },
        { name: "Flight Performance Reports", count: 3, date: "Friday, 05 June 2024", completed: true }
      ]
    },
    {
      title: "Fuel Procurement & Contracts",
      items: [
        { name: "Fuel Purchase Contracts", completed: false },
        { name: "Fuel Delivery Notes", completed: false },
        { name: "Fuel Invoices & Receipts", completed: false },
        { name: "Fuel Testing Reports", count: 2, date: "Friday, 05 June 2024", completed: true }
      ]
    },
    {
      title: "Regulatory & Compliance Documents",
      items: [
        { name: "Emission Reports", completed: false },
        { name: "Sustainability Certification Reports", completed: false },
        { name: "Operational Approval for SAF Use", count: 2, date: "Friday, 10 June 2024", completed: true },
        { name: "Carbon Offsetting Documentation", count: 2, date: "Friday, 05 June 2024", completed: true }
      ]
    }
  ]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Report Management</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage and generate compliance reports
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={item.completed}
                        readOnly
                        className="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                      />
                      <div>
                        <p className={`text-sm font-medium ${
                          item.completed 
                            ? 'text-gray-500 dark:text-gray-400 line-through' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {item.name}
                          {item.count && <span className="ml-2 text-gray-500">[{item.count}]</span>}
                        </p>
                        {item.date && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {item.date}
                          </p>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}