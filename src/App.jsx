import { useRef, useState } from "react";
import "./App.css";
import caens from "./jsons/caen.jsx";
import {
  coduri_caen_v,
  grupe_v,
  diviziuni_v,
  sectiuni_v,
  industrii_v,
} from "./Components/variables.jsx";
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
} from "./Components/functions.jsx";
import { job_titles_by_department } from "./jsons/caen.jsx";

function App() {
  const [rezultatAfis, setRezultatAfis] = useState(false);

  const handleRezAfis = () => {
    setRezultatAfis(!rezultatAfis);
  };
  const [caenuri, setCaenuri] = useState(coduri_caen_v);
  const [grupe, setGrupe] = useState(grupe_v);
  const [diviziuni, setDiviziuni] = useState(diviziuni_v);
  const [searchSectiune, setSearchSectiune] = useState(sectiuni_v);
  const [jobTitles, setJobTitles] = useState(job_titles_by_department);
  const [portie, setPortie] = useState({
    sectiune: false,
    diviziune: false,
    grupa: false,
    caenuri: false,
    departament: false,
    job_title: false,
  });

  const [searchTerm, setSearchTerm] = useState(""); // State for the search bar input
  const [searchDiviziune, setSearchDiviziune] = useState(""); // Search for Diviziune
  const [searchGrupe, setSearchGrupe] = useState("");
  const [searchCaenuri, setSearchCaenuri] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  const [searchJob, setSearchJob] = useState("");
  const [rezultat, setRezultat] = useState({
    sectiune_rezultat: [],
    diviziune_rezultat: [],
    grupa_rezultat: [],
    caen_rezultat: [],
  });
  const [numeICP, setNumeICP] = useState("");
  const [cifraAfacere, setCifraAfacere] = useState("");
  const [profit, setProfit] = useState("");

  const uniqueDiviziuni = Array.from(
    new Set(
      caens
        .filter((item) => searchSectiune[item.Sectiunea])
        .map((item) => item.Diviziunea)
    )
  );

  const uniqueGrupe = Array.from(
    new Set(
      caens
        .filter((item) => diviziuni[item.Diviziunea])
        .map((item) => item.Grupa)
    )
  );

  const uniqueCaen = Array.from(
    new Set(
      caens.filter((item) => grupe[item.Grupa]).map((item) => item.Codul_caen)
    )
  );

  const filteredSectiuni = [
    ...new Set(caens.map((caen) => caen.Sectiunea)),
  ].filter((sectiune) =>
    sectiune.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDiviziuni = uniqueDiviziuni.filter((diviziune) =>
    diviziune.toLowerCase().includes(searchDiviziune.toLowerCase())
  );

  const filteredGrupe = uniqueGrupe.filter((grupa) =>
    grupa.toLowerCase().includes(searchGrupe.toLowerCase())
  );

  const filteredDepartments = Object.keys(jobTitles).filter((department) =>
    department.toLowerCase().includes(searchDepartment.toLowerCase())
  );

  const filteredCaen = uniqueCaen.filter((caen) =>
    caen.toLowerCase().includes(searchCaenuri.toLowerCase())
  );

  const rezultatRef = useRef(null);

  // const handleCopyContent = () => {
  //   // First get all filtered rows
  //   const filteredRows = caens.filter((item) => caenuri[item.Codul_caen]);

  //   // Create objects to store unique values
  //   const uniqueValues = {
  //     NumeICP: [numeICP],
  //     Industry_Hubspot: [
  //       ...new Set(filteredRows.map((item) => item.Industry_Hubspot)),
  //     ],
  //     Category: [...new Set(filteredRows.map((item) => item.Category))],
  //     Sectiune: [...new Set(filteredRows.map((item) => item.Sectiunea))],
  //     Diviziune: [...new Set(filteredRows.map((item) => item.Diviziunea))],
  //     Grupa: [...new Set(filteredRows.map((item) => item.Grupa))],
  //     Codul_caen: [...new Set(filteredRows.map((item) => item.Codul_caen))],
  //     Cifra_Afacere: [cifraAfacere],
  //     Profit: [profit],
  //   };

  //   // Create a single row where each cell contains the entire array with line breaks
  //   const headers = Object.keys(uniqueValues);
  //   const arrayValues = Object.values(uniqueValues).map(
  //     (array) =>
  //       // Format array values with line breaks (Alt+Enter in Excel) and wrap in quotes
  //       `"${array
  //         .map((value) => value.toString().replace(/"/g, '""'))
  //         .join("\n")}"`
  //   );

  //   // Create content with headers and arrays
  //   const headerRow = headers.join("\t");
  //   const valueRow = arrayValues.join("\t");
  //   const content = `${headerRow}\n${valueRow}`;

  //   // Copy to clipboard
  //   navigator.clipboard
  //     .writeText(content)
  //     .then(() => {
  //       alert("Valori unice copiate în format Excel!");
  //     })
  //     .catch((err) => {
  //       console.error("Eroare la copiere: ", err);
  //     });
  // };

  const handleCopyContent = () => {
    // First get all filtered rows (for your other columns)
    const filteredRows = caens.filter((item) => caenuri[item.Codul_caen]);

    // Get active departments and their active job titles
    const activeDepartmentsJobs = {};
    Object.keys(jobTitles).forEach((department) => {
      if (jobTitles[department].state) {
        const activeJobs = Object.keys(jobTitles[department].job_titles).filter(
          (jobTitle) => jobTitles[department].job_titles[jobTitle]
        );
        activeDepartmentsJobs[department] = activeJobs;
      }
    });

    // Create an object to store unique values including active department columns
    const uniqueValues = {
      NumeICP: [numeICP],
      Industry_Hubspot: [
        ...new Set(filteredRows.map((item) => item.Industry_Hubspot)),
      ],
      Category: [...new Set(filteredRows.map((item) => item.Category))],
      Sectiune: [...new Set(filteredRows.map((item) => item.Sectiunea))],
      Diviziune: [...new Set(filteredRows.map((item) => item.Diviziunea))],
      Grupa: [...new Set(filteredRows.map((item) => item.Grupa))],
      Codul_caen: [...new Set(filteredRows.map((item) => item.Codul_caen))],
      Cifra_Afacere: [cifraAfacere],
      Profit: [profit],
      ...activeDepartmentsJobs, // Spread in each active department as a column with its jobs
    };

    // Create headers and format each cell's value with line breaks (for Excel)
    const headers = Object.keys(uniqueValues);
    const arrayValues = Object.values(uniqueValues).map(
      (array) =>
        `"${array
          .map((value) => value.toString().replace(/"/g, '""'))
          .join("\n")}"`
    );

    // Create content string with tab-separated columns
    const headerRow = headers.join("\t");
    const valueRow = arrayValues.join("\t");
    const content = `${headerRow}\n${valueRow}`;

    // Copy the content to the clipboard
    navigator.clipboard
      .writeText(content)
      .then(() => {
        alert("Valori unice copiate în format Excel!");
      })
      .catch((err) => {
        console.error("Eroare la copiere: ", err);
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

  return (
    <div className="layout">
      <div className="navbar">
        <input
          placeholder="Nume ICP ..."
          value={numeICP}
          onChange={handleNume}
          style={{
            height: "25px",
            marginBottom: "5px",
            paddingLeft: "10px",
          }}
        ></input>
        {/* <button
          onClick={() => handlePortie("industrie", setPortie, setRezultatAfis)}
        >
          Industrie
        </button> */}
        <button
          onClick={() => handlePortie("sectiune", setPortie, setRezultatAfis)}
          className="nav-btn"
        >
          Sectiune
        </button>
        <button
          onClick={() => handlePortie("diviziune", setPortie, setRezultatAfis)}
          className="nav-btn"
        >
          Diviziune
        </button>
        <button
          onClick={() => handlePortie("grupa", setPortie, setRezultatAfis)}
          className="nav-btn"
        >
          Grupa
        </button>
        <button
          onClick={() => handlePortie("caenuri", setPortie, setRezultatAfis)}
          className="nav-btn"
        >
          Caen
        </button>
        <button
          onClick={() =>
            handlePortie("departament", setPortie, setRezultatAfis)
          }
          className="nav-btn"
        >
          Job Department
        </button>
        <button
          onClick={() => handlePortie("job_title", setPortie, setRezultatAfis)}
          className="nav-btn"
        >
          Job Title
        </button>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ width: "70px", fontWeight: "bold" }}>CA</p>
            <input
              style={{ height: "20px", width: "100px", paddingLeft: "5px" }}
              value={cifraAfacere}
              onChange={handleCifraAfacereChange}
            ></input>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ width: "70px", fontWeight: "bold" }}>PROFIT</p>
            <input
              style={{ height: "20px", width: "100px", paddingLeft: "5px" }}
              value={profit}
              onChange={handleProfitChange}
            ></input>
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
          style={{ marginTop: "50px" }}
          className="result-btn"
        >
          Rezultat
        </button>
        <button onClick={handleCopyContent} className="copy-btn">
          Copiaza tot
        </button>

        <button
          onClick={() =>
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
            )
          }
          className="reset-btn"
        >
          Reseteaza tot
        </button>
      </div>
      <div className="content-layout">
        {/* <div className="portie">
          <div>
            {portie.industrie && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Industrie..."
                    value={searchIndustrie}
                    onChange={(e) => setSearchIndustrie(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button
                      onClick={() =>
                        handleToggleAllSectiuni(true, setSearchSectiune)
                      }
                    >
                      Select all
                    </button>
                    <button
                      onClick={() =>
                        handleToggleAllSectiuni(false, setSearchSectiune)
                      }
                    >
                      Clear
                    </button>
                  </div>
                </div>
                {filteredIndustrii.map((industrie) => (
                  <div className="option" key={industrie}>
                    <div
                      className="check"
                      onClick={() =>
                        handleSearchSectiune(industrie, setSearchIndustrie)
                      }
                      style={{
                        backgroundColor: searchIndustrie[industrie]
                          ? "#646cff"
                          : "",
                      }}
                    ></div>
                    <p>{industrie}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div> */}
        <div className="portie">
          <div>
            {portie.sectiune && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Search Sectiune..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button
                      onClick={() =>
                        handleToggleAllSectiuni(true, setSearchSectiune)
                      }
                    >
                      Select all
                    </button>
                    <button
                      onClick={() =>
                        handleToggleAllSectiuni(false, setSearchSectiune)
                      }
                    >
                      Clear
                    </button>
                  </div>
                </div>
                {filteredSectiuni.map((sectiune) => (
                  <div className="option" key={sectiune}>
                    <div
                      className="check"
                      onClick={() =>
                        handleSearchSectiune(sectiune, setSearchSectiune)
                      }
                      style={{
                        backgroundColor: searchSectiune[sectiune]
                          ? "#646cff"
                          : "",
                      }}
                    ></div>
                    <p>{sectiune}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="portie">
          <div>
            {portie.diviziune && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Diviziunea..."
                    value={searchDiviziune}
                    onChange={(e) => setSearchDiviziune(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button
                      onClick={() =>
                        handleToggleAllDiviziuni(
                          true,
                          setDiviziuni,
                          filteredDiviziuni
                        )
                      }
                    >
                      Select all
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
                      Clear
                    </button>
                  </div>
                </div>
                {filteredDiviziuni.map((diviziune, index) => (
                  <div className="option" key={index}>
                    <div
                      className="check"
                      onClick={() => handleDiviziune(diviziune, setDiviziuni)}
                      style={{
                        backgroundColor: diviziuni[diviziune] ? "#646cff" : "",
                      }}
                    ></div>
                    <p>{diviziune}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="portie">
          <div>
            {portie.grupa && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Grupa..."
                    value={searchGrupe}
                    onChange={(e) => setSearchGrupe(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button
                      onClick={() =>
                        handleToggleAllGrupe(true, setGrupe, filteredGrupe)
                      }
                    >
                      Select all
                    </button>
                    <button
                      onClick={() =>
                        handleToggleAllGrupe(false, setGrupe, filteredGrupe)
                      }
                    >
                      Clear
                    </button>
                  </div>
                </div>
                {filteredGrupe.map((grupa, index) => (
                  <div className="option" key={index}>
                    <div
                      className="check"
                      onClick={() => handleGrupa(grupa, setGrupe)}
                      style={{
                        backgroundColor: grupe[grupa] ? "#646cff" : "",
                      }}
                    ></div>
                    <p>{grupa}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="portie">
          <div>
            {portie.caenuri && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Caen..."
                    value={searchCaenuri}
                    onChange={(e) => setSearchCaenuri(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button
                      onClick={() =>
                        handleToggleAllCaenuri(true, setCaenuri, filteredCaen)
                      }
                    >
                      Select all
                    </button>
                    <button
                      onClick={() =>
                        handleToggleAllCaenuri(false, setCaenuri, filteredCaen)
                      }
                    >
                      Clear
                    </button>
                  </div>
                </div>
                {filteredCaen.map((caen, index) => (
                  <div className="option" key={index}>
                    <div
                      className="check"
                      onClick={() => handleCaen(caen, setCaenuri)}
                      style={{
                        backgroundColor: caenuri[caen] ? "#646cff" : "",
                      }}
                    ></div>
                    <p>{caen}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="portie">
          <div>
            {portie.departament && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Departament..."
                    value={searchDepartment}
                    onChange={(e) => setSearchDepartment(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button
                      onClick={() =>
                        handleToggleAllDepartments(true, setJobTitles)
                      }
                    >
                      Select all
                    </button>
                    <button
                      onClick={() =>
                        handleToggleAllDepartments(false, setJobTitles)
                      }
                    >
                      Clear
                    </button>
                  </div>
                </div>
                {filteredDepartments.map((department) => (
                  <div className="option">
                    <div
                      className="check"
                      onClick={() => handleDepartment(department, setJobTitles)}
                      style={{
                        backgroundColor: jobTitles[department].state
                          ? "#646cff"
                          : "",
                      }}
                    ></div>
                    <p>{department}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="portie">
          <div>
            {portie.job_title && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Job title..."
                    value={searchJob}
                    onChange={(e) => setSearchJob(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button
                      onClick={() => handleToggleAllJobs(true, setJobTitles)}
                    >
                      Select all
                    </button>
                    <button
                      onClick={() => handleToggleAllJobs(false, setJobTitles)}
                    >
                      Clear
                    </button>
                  </div>
                </div>
                {Object.keys(jobTitles).map((department) =>
                  jobTitles[department].state
                    ? Object.keys(jobTitles[department].job_titles)
                        .filter((jobTitle) =>
                          jobTitle
                            .toLowerCase()
                            .includes(searchJob.toLowerCase())
                        )
                        .map((jobTitle) => (
                          <div key={jobTitle} className="option">
                            <div
                              className="check"
                              onClick={() =>
                                handleJob(department, jobTitle, setJobTitles)
                              }
                              style={{
                                backgroundColor: jobTitles[department]
                                  .job_titles[jobTitle]
                                  ? "#646cff"
                                  : "",
                              }}
                            ></div>
                            <p>{jobTitle}</p>
                          </div>
                        ))
                    : null
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="rezultat" ref={rezultatRef}>
            {rezultatAfis && (
              <>
                <div className="sectiune">
                  <h3>Nume ICP</h3>
                  <p>{numeICP}</p>
                </div>
                <div className="sectiune">
                  <h3>Sectiune</h3>
                  {rezultat.sectiune_rezultat.map((sec, key) => (
                    <p key={key}>{sec}</p>
                  ))}
                </div>
                <div className="sectiune">
                  <h3>Diviziune</h3>
                  {rezultat.diviziune_rezultat.map((div, key) => (
                    <p key={key}>{div}</p>
                  ))}
                </div>
                <div className="sectiune">
                  <h3>Grupa</h3>
                  {rezultat.grupa_rezultat.map((grp, key) => (
                    <p key={key}>{grp}</p>
                  ))}
                </div>
                <div className="sectiune">
                  <h3>Caen</h3>
                  {rezultat.caen_rezultat.map((cn, key) => (
                    <p key={key}>{cn}</p>
                  ))}
                </div>
                <div className="sectiune">
                  <h3>Cifra Afacere</h3>
                  <p>{cifraAfacere}</p>
                </div>
                <div className="sectiune">
                  <h3>Profit</h3>
                  <p>{profit}</p>
                </div>
                {Object.keys(jobTitles).map((department) => {
                  // Only proceed if the department is active (true)
                  if (!jobTitles[department].state) return null;

                  // Filter job titles that are active (true)
                  const activeJobs = Object.keys(
                    jobTitles[department].job_titles
                  ).filter(
                    (jobTitle) => jobTitles[department].job_titles[jobTitle]
                  );

                  // If no job titles are active, you can return null or a message if needed
                  if (activeJobs.length === 0) return null;

                  return (
                    <div key={department} className="sectiune">
                      <h3>{department}</h3>
                      {activeJobs.map((jobTitle) => (
                        <p key={`${department}-${jobTitle}`}>{jobTitle}</p>
                      ))}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
