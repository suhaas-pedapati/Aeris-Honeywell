import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, FileText, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';

export function DashboardOverview() {
  // Placeholder data for the dashboard
  const complianceStatus = 'Compliant';
  const compliancePercentage = 87;
  const documentsUploaded = 24;
  const documentsProcessed = 20;
  const pendingDocuments = 4;
  const feedstockDistribution = [
    { name: 'Corn Oil', value: 35 },
    { name: 'Used Cooking Oil', value: 42 },
    { name: 'Soybean Oil', value: 18 },
    { name: 'Other', value: 5 },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-card-hover transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className={`p-2 rounded-full mr-4 ${
                complianceStatus === 'Compliant' 
                  ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                  : 'bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-400'
              }`}>
                {complianceStatus === 'Compliant' ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <AlertTriangle className="h-6 w-6" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Compliance Status</p>
                <h4 className={`text-2xl font-semibold mt-1 ${
                  complianceStatus === 'Compliant' 
                    ? 'text-success-700 dark:text-success-400'
                    : 'text-error-700 dark:text-error-400'
                }`}>
                  {complianceStatus}
                </h4>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-card-hover transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full mr-4 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                <BarChart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Compliance Score</p>
                <div className="flex items-center mt-1">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {compliancePercentage}%
                  </h4>
                  <div className="flex items-center ml-2 text-success-600 dark:text-success-400">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">+2.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-card-hover transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full mr-4 bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-400">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Documents</p>
                <div className="flex items-center mt-1">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {documentsUploaded}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    ({documentsProcessed} processed)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-card-hover transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full mr-4 bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Documents</p>
                <div className="flex items-center mt-1">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {pendingDocuments}
                  </h4>
                  <div className="flex items-center ml-2 text-warning-600 dark:text-warning-400">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">Action needed</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts and Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className={`p-2 rounded-full mr-3 ${
                    item % 3 === 0 
                      ? 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400' 
                      : item % 2 === 0 
                        ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                        : 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                  }`}>
                    {item % 3 === 0 ? (
                      <AlertTriangle className="h-5 w-5" />
                    ) : item % 2 === 0 ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <FileText className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {item % 3 === 0 
                          ? 'Document verification needed'
                          : item % 2 === 0 
                            ? 'Document approved'
                            : 'New document uploaded'}
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item % 4 === 0 ? '2 hours ago' : 
                         item % 3 === 0 ? '5 hours ago' : 
                         item % 2 === 0 ? 'Yesterday' : '3 days ago'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {item % 3 === 0 
                        ? 'Carbon intensity calculations need review for SAF Batch #3742'
                        : item % 2 === 0 
                          ? 'SAF Production Certificate for Batch #3741 has been verified'
                          : 'New SAF Shipment Record added for processing'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Feedstock Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Feedstock Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-4">
              {feedstockDistribution.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.name}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        item.name === 'Corn Oil' 
                          ? 'bg-primary-500' 
                          : item.name === 'Used Cooking Oil' 
                            ? 'bg-secondary-500' 
                            : item.name === 'Soybean Oil' 
                              ? 'bg-accent-500' 
                              : 'bg-gray-500'
                      }`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                View Full Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}