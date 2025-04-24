import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import { parseDocument } from '../../services/kognitos';
import { ParsingStatus } from '../../types';

export function DocumentUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true);
      setError(null);

      const parsedDocument = await parseDocument(file);
      
      // Here you would typically save the document to your database
      console.log('Document parsed:', parsedDocument);

      if (parsedDocument.parsingStatus === ParsingStatus.Completed) {
        navigate('/documents');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to upload document');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`border-2 border-dashed rounded-lg p-8 ${
          dragActive 
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30' 
            : 'border-gray-300 dark:border-gray-700'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" />
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            Upload Document
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Drag and drop your document here, or click to select a file
          </p>
          <div className="mt-6">
            <Button
              as="label"
              variant="outline"
              className="cursor-pointer"
              disabled={isUploading}
            >
              <FileText className="mr-2 h-4 w-4" />
              Select File
              <input
                type="file"
                className="hidden"
                onChange={handleFileSelect}
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                disabled={isUploading}
              />
            </Button>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-error-50 border border-error-200 rounded-md flex items-start">
          <AlertCircle className="h-5 w-5 text-error-500 mt-0.5 mr-2" />
          <p className="text-sm text-error-700">{error}</p>
        </div>
      )}

      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Supported file types:
        </h4>
        <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <li>PDF documents (.pdf)</li>
          <li>Microsoft Word documents (.doc, .docx)</li>
          <li>Microsoft Excel spreadsheets (.xls, .xlsx)</li>
        </ul>
      </div>
    </div>
  );
}