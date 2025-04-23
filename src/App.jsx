import React, { useRef, useState, useMemo } from "react"; // Import useMemo
import "./App.css";
import caens from "./jsons/caen.jsx"; // Asigură-te că path-ul e corect
import {
  coduri_caen_v,
  grupe_v,
  diviziuni_v,
  sectiuni_v,
  // industrii_v, // Nu pare folosit, poate fi eliminat dacă nu e necesar
} from "./Components/variables.jsx"; // Asigură-te că path-ul e corect
import {
  handleRezultat,
  handleSearchSectiune,
  handleDiviziune,
  handleCaen,
  handleGrupa,
  handleToggleAllCaenuri,
  handleToggleAllDiviziuni,
  handleToggleAllGrupe,
  handleToggleAllSectiuni,
  handlePortie,
  handleResetAll,
  handleDepartment,
  handleToggleAllDepartments,
  handleJob,
  handleToggleAllJobs,
} from "./Components/functions.jsx"; // Asigură-te că path-ul e corect
import { job_titles_by_department } from "./jsons/caen.jsx"; // Asigură-te că path-ul e corect

function App() {
  const [rezultatAfis, setRezultatAfis] = useState(false);

  const handleRezAfis = () => {
    setRezultatAfis(!rezultatAfis);
  };

  // --- State declarations ---
  const [searchSectiune, setSearchSectiune] = useState(sectiuni_v);
  const [diviziuni, setDiviziuni] = useState(diviziuni_v);
  const [grupe, setGrupe] = useState(grupe_v);
  const [caenuri, setCaenuri] = useState(coduri_caen_v);
  const [jobTitles, setJobTitles] = useState(job_titles_by_department);

  const [portie, setPortie] = useState({
    sectiune: false,
    diviziune: false,
    grupa: false,
    caenuri: false,
    departament: false,
    job_title: false,
  });

  // Search terms
  const [searchTerm, setSearchTerm] = useState(""); // Sectiune search
  const [searchDiviziune, setSearchDiviziune] = useState("");
  const [searchGrupe, setSearchGrupe] = useState("");
  const [searchCaenuri, setSearchCaenuri] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  const [searchJob, setSearchJob] = useState("");

  // Results and other inputs
  const [rezultat, setRezultat] = useState({
    sectiune_rezultat: [],
    diviziune_rezultat: [],
    grupa_rezultat: [],
    caen_rezultat: [],
  });
  const [numeICP, setNumeICP] = useState("");
  const [cifraAfacere, setCifraAfacere] = useState("");
  const [profit, setProfit] = useState("");

  // --- Memoized Calculations ---

  // Filter Sectiuni based on searchTerm
  const filteredSectiuni = useMemo(() => {
    const allSectiuni = [...new Set(caens.map((caen) => caen.Sectiunea))];
    if (!searchTerm) return allSectiuni;
    return allSectiuni.filter((sectiune) =>
      sectiune.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [caens, searchTerm]); // Dependency: caens data and search term

  // Calculate unique Diviziuni based on selected Sectiuni
  const uniqueDiviziuni = useMemo(() => {
    return Array.from(
      new Set(
        caens
          .filter((item) => searchSectiune[item.Sectiunea]) // Filter by selected sectiuni
          .map((item) => item.Diviziunea)
      )
    );
  }, [caens, searchSectiune]); // Dependency: caens data and selected sectiuni state

  // Filter Diviziuni based on searchDiviziune
  const filteredDiviziuni = useMemo(() => {
    if (!searchDiviziune) return uniqueDiviziuni;
    return uniqueDiviziuni.filter((diviziune) =>
      diviziune.toLowerCase().includes(searchDiviziune.toLowerCase())
    );
  }, [uniqueDiviziuni, searchDiviziune]); // Dependency: calculated uniqueDiviziuni and its search term

  // Calculate unique Grupe based on selected Diviziuni
  const uniqueGrupe = useMemo(() => {
    return Array.from(
      new Set(
        caens
          .filter((item) => diviziuni[item.Diviziunea]) // Filter by selected diviziuni
          .map((item) => item.Grupa)
      )
    );
  }, [caens, diviziuni]); // Dependency: caens data and selected diviziuni state

  // Filter Grupe based on searchGrupe
  const filteredGrupe = useMemo(() => {
    if (!searchGrupe) return uniqueGrupe;
    return uniqueGrupe.filter((grupa) =>
      grupa.toLowerCase().includes(searchGrupe.toLowerCase())
    );
  }, [uniqueGrupe, searchGrupe]); // Dependency: calculated uniqueGrupe and its search term

  // Calculate unique Caen codes based on selected Grupe
  const uniqueCaen = useMemo(() => {
    return Array.from(
      new Set(
        caens
          .filter((item) => grupe[item.Grupa]) // Filter by selected grupe
          .map((item) => item.Codul_caen)
      )
    );
  }, [caens, grupe]); // Dependency: caens data and selected grupe state

  // Filter Caen codes based on searchCaenuri
  const filteredCaen = useMemo(() => {
    if (!searchCaenuri) return uniqueCaen;
    return uniqueCaen.filter((caen) =>
      caen.toLowerCase().includes(searchCaenuri.toLowerCase())
    );
  }, [uniqueCaen, searchCaenuri]); // Dependency: calculated uniqueCaen and its search term

  // Filter Departments based on searchDepartment
  const filteredDepartments = useMemo(() => {
    const allDepartments = Object.keys(jobTitles);
    if (!searchDepartment) return allDepartments;
    return allDepartments.filter((department) =>
      department.toLowerCase().includes(searchDepartment.toLowerCase())
    );
  }, [jobTitles, searchDepartment]); // Dependency: jobTitles data and its search term

  // --- Refs and Handlers ---
  const rezultatRef = useRef(null); // Currently not used, but kept if needed later

  const handleCopyContent = () => {
    // Get rows filtered by the final selected CAEN codes
    const filteredRows = caens.filter((item) => caenuri[item.Codul_caen]);

    // Get active departments and their active job titles
    const activeDepartmentsJobs = {};
    Object.keys(jobTitles).forEach((department) => {
      if (jobTitles[department].state) {
        // Check if department itself is active
        const activeJobs = Object.keys(jobTitles[department].job_titles).filter(
          (jobTitle) => jobTitles[department].job_titles[jobTitle] // Check if job title is active
        );
        // Only add department if it has active jobs
        if (activeJobs.length > 0) {
          activeDepartmentsJobs[department] = activeJobs;
        }
      }
    });

    // Create an object to store unique values including active department columns
    const uniqueValues = {
      NumeICP: [numeICP],
      Industry_Hubspot: [
        ...new Set(filteredRows.map((item) => item.Industry_Hubspot || "")), // Handle potential undefined
      ],
      Category: [...new Set(filteredRows.map((item) => item.Category || ""))], // Handle potential undefined
      Sectiune: [...new Set(filteredRows.map((item) => item.Sectiunea || ""))], // Handle potential undefined
      Diviziune: [
        ...new Set(filteredRows.map((item) => item.Diviziunea || "")),
      ], // Handle potential undefined
      Grupa: [...new Set(filteredRows.map((item) => item.Grupa || ""))], // Handle potential undefined
      Codul_caen: [
        ...new Set(filteredRows.map((item) => item.Codul_caen || "")),
      ], // Handle potential undefined
      Cifra_Afacere: [cifraAfacere],
      Profit: [profit],
      ...activeDepartmentsJobs, // Spread in each active department as a column with its active jobs
    };

    // Create headers and format each cell's value with line breaks (for Excel)
    const headers = Object.keys(uniqueValues);
    const arrayValues = Object.values(uniqueValues).map(
      (array) =>
        `"${array
          .map((value) => (value ? value.toString().replace(/"/g, '""') : "")) // Ensure value exists before toString
          .join("\n")}"`
    );

    // Create content string with tab-separated columns
    const headerRow = headers.join("\t");
    const valueRow = arrayValues.join("\t");
    const content = `${headerRow}\n${valueRow}`;

    navigator.clipboard
      .writeText(content)
      .then(() => {
        alert("Valori unice copiate în format Excel!");
      })
      .catch((err) => {
        console.error("Eroare la copiere: ", err);
        alert("A apărut o eroare la copiere!"); // User feedback on error
      });
  };

  const handleNume = (event) => {
    setNumeICP(event.target.value);
  };
  const handleCifraAfacereChange = (e) => {
    setCifraAfacere(e.target.value);
  };

  const handleProfitChange = (e) => {
    setProfit(e.target.value);
  };

  // --- Reset Handler ---
  const handleResetWrapper = () => {
    handleResetAll(
      setRezultat,
      setPortie,
      setSearchSectiune,
      setDiviziuni,
      setGrupe,
      setCaenuri,
      setRezultatAfis,
      setNumeICP,
      setCifraAfacere,
      setProfit,
      setJobTitles
    );
    // Reset search terms too
    setSearchTerm("");
    setSearchDiviziune("");
    setSearchGrupe("");
    setSearchCaenuri("");
    setSearchDepartment("");
    setSearchJob("");
  };

  // --- JSX Structure ---
  return (
    <div className="layout">
      <div className="navbar">
        <input
          className="input-field"
          placeholder="Nume ICP..."
          value={numeICP}
          onChange={handleNume}
        />

        <button
          onClick={() => handlePortie("sectiune", setPortie, setRezultatAfis)}
          className={`nav-btn ${portie.sectiune ? "active" : ""}`}
        >
          Sectiune
        </button>
        <button
          onClick={() => handlePortie("diviziune", setPortie, setRezultatAfis)}
          className={`nav-btn ${portie.diviziune ? "active" : ""}`}
        >
          Diviziune
        </button>
        <button
          onClick={() => handlePortie("grupa", setPortie, setRezultatAfis)}
          className={`nav-btn ${portie.grupa ? "active" : ""}`}
        >
          Grupa
        </button>
        <button
          onClick={() => handlePortie("caenuri", setPortie, setRezultatAfis)}
          className={`nav-btn ${portie.caenuri ? "active" : ""}`}
        >
          Caen
        </button>
        <button
          onClick={() =>
            handlePortie("departament", setPortie, setRezultatAfis)
          }
          className={`nav-btn ${portie.departament ? "active" : ""}`}
        >
          Job Department
        </button>
        <button
          onClick={() => handlePortie("job_title", setPortie, setRezultatAfis)}
          className={`nav-btn ${portie.job_title ? "active" : ""}`}
        >
          Job Title
        </button>

        <div className="finance-inputs">
          <div className="input-group">
            <label htmlFor="cifraAfacereInput">CA</label>
            <input
              id="cifraAfacereInput"
              className="input-field small-input"
              value={cifraAfacere}
              onChange={handleCifraAfacereChange}
              placeholder="Valoare..."
            />
          </div>
          <div className="input-group">
            <label htmlFor="profitInput">Profit</label>
            <input
              id="profitInput"
              className="input-field small-input"
              value={profit}
              onChange={handleProfitChange}
              placeholder="Valoare..."
            />
          </div>
        </div>

        <button
          onClick={() =>
            handleRezultat(
              setRezultat,
              searchSectiune,
              diviziuni,
              grupe,
              caenuri,
              handleRezAfis,
              setPortie
            )
          }
          className="result-btn"
        >
          Vezi Rezultat
        </button>
        <button onClick={handleCopyContent} className="copy-btn">
          Copiaza tot (Excel)
        </button>
        <button onClick={handleResetWrapper} className="reset-btn">
          Reseteaza tot
        </button>
      </div>
      {/* --- Content Area (Modals and Results) --- */}
      <div className="content-layout">
        {/* Modals Container */}
        <div className="modals-container">
          {portie.sectiune && (
            <div className="modal">
              <div className="modal-header">
                <h3>Selectează Secțiuni</h3>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Caută Secțiune..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="modal-actions">
                  <button
                    onClick={() =>
                      handleToggleAllSectiuni(true, setSearchSectiune)
                    }
                  >
                    Toate
                  </button>
                  <button
                    onClick={() =>
                      handleToggleAllSectiuni(false, setSearchSectiune)
                    }
                  >
                    Niciuna
                  </button>
                </div>
              </div>
              <div className="modal-content">
                {filteredSectiuni.map((sectiune) => (
                  <div className="option" key={sectiune}>
                    {" "}
                    {/* KEY: unique string */}
                    <div
                      className={`check ${
                        searchSectiune[sectiune] ? "checked" : ""
                      }`}
                      onClick={() =>
                        handleSearchSectiune(sectiune, setSearchSectiune)
                      }
                    ></div>
                    <p>{sectiune}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {portie.diviziune && (
            <div className="modal">
              <div className="modal-header">
                <h3>Selectează Diviziuni</h3>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Caută Diviziune..."
                  value={searchDiviziune}
                  onChange={(e) => setSearchDiviziune(e.target.value)}
                />
                <div className="modal-actions">
                  <button
                    onClick={() =>
                      handleToggleAllDiviziuni(
                        true,
                        setDiviziuni,
                        filteredDiviziuni
                      )
                    }
                  >
                    Toate
                  </button>
                  <button
                    onClick={() =>
                      handleToggleAllDiviziuni(
                        false,
                        setDiviziuni,
                        filteredDiviziuni
                      )
                    }
                  >
                    Niciuna
                  </button>
                </div>
              </div>
              <div className="modal-content">
                {filteredDiviziuni.map((diviziune) => (
                  <div className="option" key={diviziune}>
                    {" "}
                    {/* KEY: unique string */}
                    <div
                      className={`check ${
                        diviziuni[diviziune] ? "checked" : ""
                      }`}
                      onClick={() => handleDiviziune(diviziune, setDiviziuni)}
                    ></div>
                    <p>{diviziune}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {portie.grupa && (
            <div className="modal">
              <div className="modal-header">
                <h3>Selectează Grupe</h3>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Caută Grupa..."
                  value={searchGrupe}
                  onChange={(e) => setSearchGrupe(e.target.value)}
                />
                <div className="modal-actions">
                  <button
                    onClick={() =>
                      handleToggleAllGrupe(true, setGrupe, filteredGrupe)
                    }
                  >
                    Toate
                  </button>
                  <button
                    onClick={() =>
                      handleToggleAllGrupe(false, setGrupe, filteredGrupe)
                    }
                  >
                    Niciuna
                  </button>
                </div>
              </div>
              <div className="modal-content">
                {filteredGrupe.map((grupa) => (
                  <div className="option" key={grupa}>
                    {" "}
                    {/* KEY: unique string */}
                    <div
                      className={`check ${grupe[grupa] ? "checked" : ""}`}
                      onClick={() => handleGrupa(grupa, setGrupe)}
                    ></div>
                    <p>{grupa}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {portie.caenuri && (
            <div className="modal">
              <div className="modal-header">
                <h3>Selectează Coduri CAEN</h3>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Caută Cod CAEN..."
                  value={searchCaenuri}
                  onChange={(e) => setSearchCaenuri(e.target.value)}
                />
                <div className="modal-actions">
                  <button
                    onClick={() =>
                      handleToggleAllCaenuri(true, setCaenuri, filteredCaen)
                    }
                  >
                    Toate
                  </button>
                  <button
                    onClick={() =>
                      handleToggleAllCaenuri(false, setCaenuri, filteredCaen)
                    }
                  >
                    Niciuna
                  </button>
                </div>
              </div>
              <div className="modal-content">
                {filteredCaen.map((caen) => (
                  <div className="option" key={caen}>
                    {" "}
                    {/* KEY: unique string */}
                    <div
                      className={`check ${caenuri[caen] ? "checked" : ""}`}
                      onClick={() => handleCaen(caen, setCaenuri)}
                    ></div>
                    <p>{caen}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {portie.departament && (
            <div className="modal">
              <div className="modal-header">
                <h3>Selectează Departamente</h3>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Caută Departament..."
                  value={searchDepartment}
                  onChange={(e) => setSearchDepartment(e.target.value)}
                />
                <div className="modal-actions">
                  <button
                    onClick={() =>
                      handleToggleAllDepartments(true, setJobTitles)
                    }
                  >
                    Toate
                  </button>
                  <button
                    onClick={() =>
                      handleToggleAllDepartments(false, setJobTitles)
                    }
                  >
                    Niciuna
                  </button>
                </div>
              </div>
              <div className="modal-content">
                {filteredDepartments.map((department) => (
                  <div className="option" key={department}>
                    {" "}
                    {/* KEY: unique string */}
                    <div
                      className={`check ${
                        jobTitles[department]?.state ? "checked" : ""
                      }`}
                      onClick={() => handleDepartment(department, setJobTitles)}
                    ></div>
                    <p>{department}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {portie.job_title && (
            <div className="modal">
              <div className="modal-header">
                <h3>Selectează Titluri Job</h3>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Caută Job..."
                  value={searchJob}
                  onChange={(e) => setSearchJob(e.target.value)}
                />
                <div className="modal-actions">
                  <button
                    onClick={() => handleToggleAllJobs(true, setJobTitles)}
                  >
                    Toate
                  </button>
                  <button
                    onClick={() => handleToggleAllJobs(false, setJobTitles)}
                  >
                    Niciuna
                  </button>
                </div>
              </div>
              <div className="modal-content">
                {Object.keys(jobTitles).map(
                  (department) =>
                    jobTitles[department]?.state // Show jobs only for ACTIVE departments
                      ? Object.keys(jobTitles[department].job_titles)
                          .filter(
                            (
                              jobTitle // Filter jobs by search term
                            ) =>
                              jobTitle
                                .toLowerCase()
                                .includes(searchJob.toLowerCase())
                          )
                          .map((jobTitle) => (
                            <div
                              className="option"
                              key={`${department}-${jobTitle}`}
                            >
                              {" "}
                              {/* KEY: composite unique */}
                              <div
                                className={`check ${
                                  jobTitles[department].job_titles[jobTitle]
                                    ? "checked"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleJob(department, jobTitle, setJobTitles)
                                }
                              ></div>
                              {/* Maybe add Department name for clarity? */}
                              {/* <p><strong>{department}:</strong> {jobTitle}</p> */}
                              <p>{jobTitle}</p>
                            </div>
                          ))
                      : null // Don't render anything for inactive departments
                )}
              </div>
            </div>
          )}
        </div>{" "}
        {/* End Modals Container */}
        {/* Results Area */}
        {rezultatAfis && (
          <div className="rezultat-container" ref={rezultatRef}>
            <h2>Rezultate Selectate</h2>
            <div className="rezultat-grid">
              <div className="rezultat-sectiune">
                <h3>Nume ICP</h3>
                <p>{numeICP || "-"}</p>
              </div>
              <div className="rezultat-sectiune">
                <h3>Secțiuni</h3>
                {rezultat.sectiune_rezultat.length > 0 ? (
                  rezultat.sectiune_rezultat.map((sec, key) => (
                    <p key={key}>{sec}</p>
                  ))
                ) : (
                  <p>-</p>
                )}
              </div>
              <div className="rezultat-sectiune">
                <h3>Diviziuni</h3>
                {rezultat.diviziune_rezultat.length > 0 ? (
                  rezultat.diviziune_rezultat.map((div, key) => (
                    <p key={key}>{div}</p>
                  ))
                ) : (
                  <p>-</p>
                )}
              </div>
              <div className="rezultat-sectiune">
                <h3>Grupe</h3>
                {rezultat.grupa_rezultat.length > 0 ? (
                  rezultat.grupa_rezultat.map((grp, key) => (
                    <p key={key}>{grp}</p>
                  ))
                ) : (
                  <p>-</p>
                )}
              </div>
              <div className="rezultat-sectiune">
                <h3>Coduri CAEN</h3>
                {rezultat.caen_rezultat.length > 0 ? (
                  rezultat.caen_rezultat.map((cn, key) => <p key={key}>{cn}</p>)
                ) : (
                  <p>-</p>
                )}
              </div>
              <div className="rezultat-sectiune">
                <h3>Cifra Afacere</h3>
                <p>{cifraAfacere || "-"}</p>
              </div>
              <div className="rezultat-sectiune">
                <h3>Profit</h3>
                <p>{profit || "-"}</p>
              </div>

              {/* Display selected Departments and their selected Job Titles */}
              {Object.keys(jobTitles).map((department) => {
                if (!jobTitles[department]?.state) return null; // Skip inactive departments

                const activeJobs = Object.keys(
                  jobTitles[department].job_titles
                ).filter(
                  (jobTitle) => jobTitles[department].job_titles[jobTitle]
                );

                if (activeJobs.length === 0) return null; // Skip departments with no active jobs

                return (
                  <div key={department} className="rezultat-sectiune">
                    <h3>{department}</h3>
                    {activeJobs.map((jobTitle) => (
                      <p key={`${department}-${jobTitle}`}>{jobTitle}</p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>{" "}
      {/* End Content Layout */}
    </div> /* End Layout */
  );
}

export default App;
