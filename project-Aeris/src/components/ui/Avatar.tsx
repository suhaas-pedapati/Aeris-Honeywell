import React from 'react';
import { cn } from '../../lib/utils';
import { getInitials } from '../../lib/utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  className,
  status,
}: AvatarProps) {
  const sizes = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
  };
  
  const statusColors = {
    online: 'bg-success-500',
    offline: 'bg-gray-400',
    away: 'bg-warning-500',
    busy: 'bg-error-500',
  };
  
  const statusSizes = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
    xl: 'h-3.5 w-3.5',
  };
  
  return (
    <div className="relative">
      <div
        className={cn(
          'flex items-center justify-center rounded-full',
          sizes[size],
          !src && 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
          className
        )}
      >
        {src ? (
          <img 
            src={src} 
            alt={alt} 
            className="h-full w-full rounded-full object-cover" 
          />
        ) : (
          <span className="font-medium">{name ? getInitials(name) : '??'}</span>
        )}
      </div>
      
      {status && (
        <span 
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-gray-800',
            statusColors[status],
            statusSizes[size]
          )}
        />
      )}
    </div>
  );
}