"use client";

export default function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>StegaScopeAI Dashboard</h1>
          <p>
            Upload an image to detect and analyze hidden information using
            advanced steganalysis techniques.
          </p>
        </header>

        <section className="upload-card">
          <div className="upload-area">
            <input type="file" accept="image/*" />
            <p>Drag & drop an image here, or click to browse</p>
          </div>

          <button className="analyze-btn">Analyze Image</button>
        </section>
      </div>
    </main>
  );
}
