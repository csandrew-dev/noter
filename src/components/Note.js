import React from 'react';
import './Note.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ReactDOMServer from 'react-dom/server';

const Note = ({ note, deleteNote, startEditing }) => {
  const exportToPDF = () => {
    // Render the note title and text using ReactMarkdown to HTML
    const titleHTML = ReactDOMServer.renderToStaticMarkup(<ReactMarkdown remarkPlugins={[remarkGfm]}>{note.title}</ReactMarkdown>);
    const textHTML = ReactDOMServer.renderToStaticMarkup(<ReactMarkdown remarkPlugins={[remarkGfm]}>{note.text}</ReactMarkdown>);

    // Create an HTML string with the note content
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./Note.css">
        <title>Note</title>
        <style>
          * {
            -webkit-print-color-adjust: exact !important;   /* Chrome, Safari 6 – 15.3, Edge */
            color-adjust: exact !important;                 /* Firefox 48 – 96 */
            print-color-adjust: exact !important;           /* Firefox 97+, Safari 15.4+ */
          }
          @media print {
            @page { 
              size: A4;
              margin: 0;
            }
            body{
              margin: 1.6cm;
            }
            h1, h2, h3, h4, h5 {
              page-break-after: avoid;
            } 
            table, figure {
              page-break-inside: avoid;
            }

          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
            background-color: #dfdfdf;
            border-radius: 5px;
            padding: 2px;
            font-size: 0.9em;
          }
          
          table {
            border-collapse: collapse;
            border-spacing: 0;
            margin: 25px 0;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            text-align: center;
          }
          
          table thead tr {
            background-color: #009879;
            color: #ffffff;
          }
          
          table thead tr td {
            font-weight: 500;
            padding: 12px 15px;
          }
          
          table th, td {
            padding: 12px 15px;
          }
          
          table tbody tr {
            border-radius: 10px;
          }
          
          table tbody tr:nth-of-type(even) {
            background-color: #f3f3f3;
          }
          </style>
      </  head>
      <body>
        <h1>${titleHTML}</h1>
        <div>${textHTML}</div>
      </body>
      </html>
    `;

    // Open a new window with the generated HTML for printing
    const newWindow = window.open('', '_blank');
    newWindow.document.write(htmlContent);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="note">
      <li>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.title}</ReactMarkdown>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.text}</ReactMarkdown>
        <button onClick={() => startEditing(note._id)}>Edit</button>
        <button onClick={() => deleteNote(note._id)}>Delete</button>
        <button onClick={exportToPDF}>Export to PDF</button>
      </li>
    </div>
  );
};

export default Note;
