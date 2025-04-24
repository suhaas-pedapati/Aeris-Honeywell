import React from 'react';
import { BarChart2, TrendingUp, Filter, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export function AnalysisPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Analysis</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track and analyze your SAF compliance metrics
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary-100 rounded-lg dark:bg-primary-900/30">
                <BarChart2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <TrendingUp className="h-5 w-5 text-success-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total SAF Volume</p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                2.5M Gallons
              </h3>
              <p className="text-sm text-success-600 dark:text-success-400 mt-2">
                +12.5% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-secondary-100 rounded-lg dark:bg-secondary-900/30">
                <TrendingUp className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Carbon Intensity Reduction</p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                65%
              </h3>
              <p className="text-sm text-success-600 dark:text-success-400 mt-2">
                +5% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-accent-100 rounded-lg dark:bg-accent-900/30">
                <BarChart2 className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Compliance Score</p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                92%
              </h3>
              <p className="text-sm text-success-600 dark:text-success-400 mt-2">
                +3% from target
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>SAF Volume Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Chart will be implemented here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedstock Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Chart will be implemented here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}