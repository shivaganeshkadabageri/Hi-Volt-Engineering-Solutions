import * as React from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageLayout({ title, subtitle, primary, secondary, actions }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-full pb-10">
      <div className="px-8 py-10 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-kod-text mb-2">{title}</h1>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-3 shrink-0">
              {actions}
            </div>
          )}
        </div>
      </div>
      
      <div className="px-8 py-8 flex-1">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row gap-8">
          <div className={`flex-1 ${secondary ? 'lg:max-w-[70%]' : 'w-full'}`}>
            {primary}
          </div>
          {secondary && (
            <div className="lg:w-[30%] shrink-0">
              {secondary}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
