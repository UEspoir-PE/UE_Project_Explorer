import React from "react";
import { Box } from "@mui/material";
import FilterButton from "../components/Filter";
import DisplayGrid from "../components/DisplayGrid";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";

const Informatique = () => {
  const toFilteredBy = ["App Mobile", "Desktop App", "Web App"];
  const [selectedOption, setSelectedOption] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (option) => {
    // Handle filter change to change grid
    setSelectedOption(option);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      let response, responseData;
      switch (selectedOption) {
        case "App Mobile":
          setLoading(true);
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/Informatique/type/App%20mobile"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;
        case "Desktop App":
          setLoading(true);
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/Informatique/type/Desktop%20application"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;
        case "Web App":
          setLoading(true);
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/Informatique/type/Web%20application"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;

        default:
          response = await fetch(
            "http://localhost:4000/api/projects/discipline/Informatique"
          );
          responseData = await response.json();
          setProjects(responseData.projects);
          setLoading(false);
          break;
      }
    };

    fetchProjects();
  }, [selectedOption]);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
        <PageTitle title={"Science Informatique"} />

        {/* Buttons to filter between Desktop and Mobile and Web */}
        <FilterButton
          options={toFilteredBy}
          selectedOption={selectedOption}
          onOptionChange={handleFilterChange}
          clearFilter={() => setSelectedOption("")}
        />
        {loading ? <Loader /> : <DisplayGrid projectList={projects} />}
      </Box>
    </>
  );
};

export default Informatique;
