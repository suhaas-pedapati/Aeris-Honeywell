import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink, 
  FileText, 
  Phone, 
  Mail,
  MapPin,
  Building2
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card, CardContent } from '../ui/Card';

interface Vendor {
  id: string;
  name: string;
  logo?: string;
  type: string;
  location: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  certifications: string[];
  status: 'active' | 'pending' | 'inactive';
  lastDelivery?: string;
  totalVolume: string;
}

export function FuelVendorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const vendors: Vendor[] = [
    {
      id: '1',
      name: 'EcoFuel Solutions',
      logo: 'https://images.pexels.com/photos/2100937/pexels-photo-2100937.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2',
      type: 'Primary Supplier',
      location: 'Los Angeles, CA',
      contact: {
        name: 'Sarah Chen',
        email: 'sarah.chen@ecofuel.com',
        phone: '+1 (555) 123-4567'
      },
      certifications: ['ISCC', 'RSB'],
      status: 'active',
      lastDelivery: '2024-03-10',
      totalVolume: '1.2M gallons'
    },
    {
      id: '2',
      name: 'Sustainable Aviation Group',
      logo: 'https://images.pexels.com/photos/2100942/pexels-photo-2100942.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2',
      type: 'Secondary Supplier',
      location: 'Houston, TX',
      contact: {
        name: 'Michael Rodriguez',
        email: 'm.rodriguez@sag.com',
        phone: '+1 (555) 234-5678'
      },
      certifications: ['ISCC'],
      status: 'active',
      lastDelivery: '2024-03-08',
      totalVolume: '800K gallons'
    },
    {
      id: '3',
      name: 'BioJet International',
      logo: 'https://images.pexels.com/photos/2100941/pexels-photo-2100941.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2',
      type: 'Primary Supplier',
      location: 'Chicago, IL',
      contact: {
        name: 'David Park',
        email: 'd.park@biojet.com',
        phone: '+1 (555) 345-6789'
      },
      certifications: ['RSB', 'CORSIA'],
      status: 'pending',
      totalVolume: '500K gallons'
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400';
      case 'pending':
        return 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400';
      case 'inactive':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Fuel Vendors</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your SAF suppliers and track deliveries
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Vendor
        </Button>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search vendors..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          Filter Vendors
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {vendor.logo ? (
                    <img
                      src={vendor.logo}
                      alt={vendor.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {vendor.name}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(vendor.status)}`}>
                        {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {vendor.type}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Contact Information</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      {vendor.contact.email}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {vendor.contact.phone}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {vendor.location}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {vendor.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Supply Information</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Total Volume: <span className="font-medium">{vendor.totalVolume}</span>
                    </p>
                    {vendor.lastDelivery && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Last Delivery: <span className="font-medium">{new Date(vendor.lastDelivery).toLocaleDateString()}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6 space-x-3">
                <Button variant="outline" size="sm" className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  View Documents
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Portal
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}