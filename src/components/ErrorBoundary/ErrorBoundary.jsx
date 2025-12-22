import React from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("❌ Błąd komponentu:", error);
    console.error("📍 Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Coś poszło nie tak 😕</h2>
          <p>Ten fragment strony nie mógł się poprawnie wyświetlić.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
