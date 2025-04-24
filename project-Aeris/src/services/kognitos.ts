import { Document, ParsingStatus } from '../types';

const KOGNITOS_API_URL = import.meta.env.VITE_KOGNITOS_API_URL;
const KOGNITOS_API_KEY = import.meta.env.VITE_KOGNITOS_API_KEY;

export async function parseDocument(file: File): Promise<Document> {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${KOGNITOS_API_URL}/parse`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KOGNITOS_API_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Document parsing failed');
    }

    const result = await response.json();
    
    return {
      id: result.id,
      name: file.name,
      uploadedBy: 'current-user', // This will be replaced with actual user ID
      uploadedAt: new Date().toISOString(),
      size: file.size,
      type: file.type,
      status: 'pending',
      parsingStatus: ParsingStatus.Completed,
      parseResults: {
        safVolume: result.extracted_data.saf_volume,
        carbonIntensityReduction: result.extracted_data.carbon_intensity,
        feedstockTypes: result.extracted_data.feedstock_types,
        productionPathway: result.extracted_data.production_pathway,
        productionDate: result.extracted_data.production_date,
        metadata: result.metadata,
      },
      url: result.document_url,
    };
  } catch (error) {
    console.error('Error parsing document:', error);
    throw error;
  }
}

export async function getParsingStatus(documentId: string): Promise<ParsingStatus> {
  try {
    const response = await fetch(`${KOGNITOS_API_URL}/status/${documentId}`, {
      headers: {
        'Authorization': `Bearer ${KOGNITOS_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get parsing status');
    }

    const result = await response.json();
    return result.status;
  } catch (error) {
    console.error('Error getting parsing status:', error);
    throw error;
  }
}