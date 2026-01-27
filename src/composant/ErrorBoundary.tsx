import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded max-w-md">
            <p className="font-bold text-lg mb-2">Erreur</p>
            <p className="mb-4">{this.state.error?.message}</p>
            <details className="text-sm mb-4">
              <summary className="cursor-pointer font-semibold">Détails de l'erreur</summary>
              <pre className="mt-2 text-xs overflow-auto bg-red-50 p-2 rounded">
                {this.state.error?.stack}
              </pre>
            </details>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Réessayer
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
