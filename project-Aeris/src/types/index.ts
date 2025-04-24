export interface User {
  id: string;
  email: string;
  displayName?: string;
  role: UserRole;
  createdAt: string;
  lastLogin?: string;
}

export enum UserRole {
  Admin = 'admin',
  Analyst = 'analyst',
  Auditor = 'auditor',
  Standard = 'standard',
}

export interface Document {
  id: string;
  name: string;
  uploadedBy: string;
  uploadedAt: string;
  size: number;
  type: string;
  status: DocumentStatus;
  parsingStatus: ParsingStatus;
  parseResults?: ParseResults;
  url: string;
}

export enum DocumentStatus {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
}

export enum ParsingStatus {
  NotStarted = 'not_started',
  InProgress = 'in_progress',
  Completed = 'completed',
  Failed = 'failed',
}

export interface ParseResults {
  safVolume?: number;
  carbonIntensityReduction?: number;
  feedstockTypes?: string[];
  productionPathway?: string;
  productionDate?: string;
  metadata: Record<string, any>;
}

export interface ComplianceReport {
  id: string;
  periodStart: string;
  periodEnd: string;
  status: ReportStatus;
  documents: string[];
  metrics: ComplianceMetrics;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

export enum ReportStatus {
  Draft = 'draft',
  Submitted = 'submitted',
  Approved = 'approved',
  Rejected = 'rejected',
}

export interface ComplianceMetrics {
  totalSafVolume: number;
  averageCarbonIntensityReduction: number;
  compliancePercentage: number;
  feedstockBreakdown: Record<string, number>;
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: NotificationType;
  read: boolean;
  createdAt: string;
  link?: string;
}

export enum NotificationType {
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}