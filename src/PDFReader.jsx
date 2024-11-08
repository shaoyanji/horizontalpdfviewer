              import React, { useState } from 'react';
              import { Document, Page, pdfjs } from 'react-pdf';
              import './PDFReader.css'; // Import CSS for styling

              pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

              const PDFReader = () => {
                const [file, setFile] = useState(null);
                const [numPages, setNumPages] = useState(null);
                const [pageWidth, setPageWidth] = useState(200); // Initial width of each page

                const handleFileChange = (event) => {
                  const selectedFile = event.target.files[0];
                  setFile(selectedFile);
                };

                const onDocumentLoadSuccess = ({ numPages }) => {
                  setNumPages(numPages);
                };

                const handleWidthChange = (event) => {
                  setPageWidth(parseInt(event.target.value));
                };

                return (
                  <div>
                    <div className="file-input-container">
                      {/* Custom file input */}
                      <label htmlFor="file" className="file-label">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="file-icon"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M20 15v4c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-4H2v4c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3v-4h-2zM12 3L4 11h3v8h10v-8h3L12 3zm4 10h-3v3h-2v-3H8v-2h3V8h2v3h3v2z" />
                        </svg>
                        <span className="file-text">Select a PDF File</span>
                      </label>
                      <input id="file" type="file" className="file-input" onChange={handleFileChange} />

                    </div>
                    {file && (
                      <div>
                        {/* Custom slider to adjust page width */}
                        <div className="slider-container">
                          <input
                            type="range"
                            min="100"
                            max="2000"
                            value={pageWidth}
                            onChange={handleWidthChange}
                            className="slider"
                          />
                          <span>{pageWidth}px</span>
                        </div>

                        {/* PDF document container */}
                        <div className="pdf-container">
                          <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                          >
                            {Array.from(
                              new Array(numPages),
                              (el, index) => (
                                <div
                                  key={`page_${index + 1}`}
                                  className="pdf-page"
                                  style={{ width: pageWidth }}
                                >
                                  <Page
                                    pageNumber={index + 1}
                                    renderTextLayer={false} // Disable text layer for better performance
                                    width={pageWidth}
                                  />
                                </div>
                              ),
                            )}
                          </Document>
                        </div>
                      </div>
                    )}
                  </div>
                );
              };

              export default PDFReader;
