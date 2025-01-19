"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { CiShare2 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdViewCompact } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

interface Experience {
  role: string;
  company: string;
  duration?: string;
}

interface Education {
  degree: string;
  institution: string;
  year: number;
}

interface IdealNextOpportunity {
  desiredSalary: string;
  desiredRole: string;
  remoteWork: string;
  desiredLocation: string[];
}

interface Candidate {
  name: string;
  experience: string;
  location: string;
  timezone: string;
  openToRemote: boolean;
  lookingFor: string;
  experienceDetails: Experience[];
  education: Education;
  skills: string[];
  idealNextOpportunity: IdealNextOpportunity;
}

const candidates: Candidate[] = [
  {
    name: "John Smith",
    experience: "5 years",
    location: "San Francisco, USA",
    timezone: "PST (UTC-8)",
    openToRemote: true,
    lookingFor: "Excited to work on cutting-edge AI solutions for computer vision tasks.",
    experienceDetails: [
      {
        role: "Computer Vision Engineer",
        company: "VisionTech",
        duration: "Jan 2020 to Present · 3 years",
      },
      {
        role: "Machine Learning Engineer",
        company: "Innovative AI",
        duration: "Jun 2018 to Dec 2019 · 1.5 years",
      },
    ],
    education: {
      degree: "Master's in Artificial Intelligence",
      institution: "Stanford University",
      year: 2018,
    },
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    idealNextOpportunity: {
      desiredSalary: "$150,000 / year",
      desiredRole: "Senior Computer Vision Engineer",
      remoteWork: "Remote",
      desiredLocation: ["San Francisco", "New York", "Remote"],
    },
  },
  {
    name: "Emma Johnson",
    experience: "3 years",
    location: "Bengaluru, India",
    timezone: "IST (UTC+5:30)",
    openToRemote: true,
    lookingFor: "Passionate about solving real-world problems using AI and vision-based systems.",
    experienceDetails: [
      {
        role: "AI Researcher",
        company: "DeepVision Labs",
        duration: "Feb 2021 to Present · 2 years",
      },
      {
        role: "Junior Data Scientist",
        company: "AI Innovators",
        duration: "Aug 2020 to Jan 2021 · 6 months",
      },
    ],
    education: {
      degree: "Bachelor's in Computer Science",
      institution: "Indian Institute of Technology (IIT) Madras",
      year: 2020,
    },
    skills: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "OpenCV",
      "YOLO",
      "FastAPI",
      "Git",
      "AWS",
    ],
    idealNextOpportunity: {
      desiredSalary: "$40,000 / ₹30,00,000",
      desiredRole: "AI Engineer",
      remoteWork: "Hybrid",
      desiredLocation: ["Bengaluru", "Pune", "Remote"],
    },
  },
  {
    name: "Michael Brown",
    experience: "7 years",
    location: "Berlin, Germany",
    timezone: "CET (UTC+1)",
    openToRemote: false,
    lookingFor: "A challenging role that involves designing scalable AI models for video analytics.",
    experienceDetails: [
      {
        role: "Senior AI Engineer",
        company: "VisionAnalytics",
        duration: "Mar 2019 to Present · 4 years",
      },
      {
        role: "AI Consultant",
        company: "Data Solutions",
        duration: "Jan 2016 to Feb 2019 · 3 years",
      },
    ],
    education: {
      degree: "PhD in Machine Learning",
      institution: "Technical University of Berlin",
      year: 2015,
    },
    skills: [
      "Python",
      "C++",
      "Machine Learning",
      "Video Analytics",
      "Reinforcement Learning",
      "OpenCV",
      "Linux",
      "Git",
    ],
    idealNextOpportunity: {
      desiredSalary: "€120,000 / year",
      desiredRole: "Lead AI Engineer",
      remoteWork: "Onsite",
      desiredLocation: ["Berlin", "Munich"],
    },
  },
];

const personalData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "+1 234 567 890",
  bio: "A passionate software engineer with a focus on web development and user experience design.",
  achievements: [
    "Developed a high-performance web application used by 10,000+ users",
    "Recipient of the 'Innovative Developer Award' 2023",
  ],
};

const earlierSearches = [
  "UI/UX Designer",
  "Full-Stack Engineer",
  "Product Manager",
  "Software Engineer",
];

const Page: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState("candidates"); // "candidates" or "personal"
  const [searchInput, setSearchInput] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("");

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const handleSearchSelect = (search: string) => {
    setSelectedSearch(search);
  };

  return (
    <div className={styles.container}>
      {sidebarOpen && (
        <div className={styles.sidebar}>
          <div className={styles.header}>
            <h6>Source</h6>
            <button
              className={styles.newSearch}
              onClick={() => setSidebarOpen(false)}
            >
              <MdViewCompact />
            </button>
          </div>
          <ul>
            <li
              className={
                currentSection === "personal" ? styles.active : ""
              }
              onClick={() => handleSectionChange("personal")}
            >
              Personal Space
            </li>
            <li
              className={currentSection === "search" ? styles.active : ""}
              onClick={() => handleSectionChange("search")}
            >
              Searches
            </li>
          </ul>
        </div>
      )}
      {!sidebarOpen && (
        <button
          className={styles.toggleSidebar}
          onClick={() => setSidebarOpen(true)}
        >
          <MdViewCompact />
        </button>
      )}

      <div className={styles.mainContent}>
        {currentSection === "personal" ? (
          <div className={styles.personalSpace}>
            <h4>Personal Space</h4>
            <p><strong>Name:</strong> {personalData.name}</p>
            <p><strong>Email:</strong> {personalData.email}</p>
            <p><strong>Phone:</strong> {personalData.phone}</p>
            <p><strong>Bio:</strong> {personalData.bio}</p>
            <h6>Achievements</h6>
            <ul>
              {personalData.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h4>Searches</h4>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search roles..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className={styles.earlierSearches}>
              <h6>Earlier Searches</h6>
              <ul>
                {earlierSearches.map((search, index) => (
                  <li
                    key={index}
                    className={
                      search === selectedSearch ? styles.activeSearch : ""
                    }
                    onClick={() => handleSearchSelect(search)}
                  >
                    {search}
                  </li>
                ))}
              </ul>
            </div>
            {selectedSearch && (
  <div className={styles.candidates}>
    <h5>Results for {selectedSearch}</h5>
    {candidates.map((candidate, index) => (
      <div className={styles.candidateCard} key={index}>
        <div className={styles.candidate_info}>
          <div className={styles.avatar}>
            {candidate.name.charAt(0).toUpperCase()}
          </div>
          <h5>{candidate.name}</h5>
        </div>
        <p>
          <strong>{candidate.experience}</strong> • {candidate.location} • {candidate.timezone} • {candidate.openToRemote ? "Open to remote" : "Onsite only"}
        </p>
        <p className={styles.lookingFor}>{candidate.lookingFor}</p>
        <h6>Experience</h6>
        <ul>
          {candidate.experienceDetails.slice(0, 2).map((exp, expIndex) => (
            <li key={expIndex}>
              <strong>{exp.role}</strong> at {exp.company} <br />
              {exp.duration || "Duration not specified"}
            </li>
          ))}
        </ul>
        {candidate.experienceDetails.length > 2 && (
          <p className={styles.viewMore}>View All</p>
        )}
        <h6>Education</h6>
        <p>
          <strong>{candidate.education.degree}</strong> - {candidate.education.institution} ({candidate.education.year})
        </p>
        <h6>Skills</h6>
        <ul className={styles.skills}>
          {candidate.skills.slice(0, 5).map((skill, skillIndex) => (
            <li key={skillIndex}>{skill}</li>
          ))}
        </ul>
        {candidate.skills.length > 5 && (
          <p className={styles.viewMore}>View All</p>
        )}
        <h6>Ideal Next Opportunity</h6>
        <p>
          <strong>Desired Salary:</strong> {candidate.idealNextOpportunity.desiredSalary} <br />
          <strong>Desired Role:</strong> {candidate.idealNextOpportunity.desiredRole} <br />
          <strong>Remote Work:</strong> {candidate.idealNextOpportunity.remoteWork} <br />
          <strong>Preferred Locations:</strong> {candidate.idealNextOpportunity.desiredLocation.join(", ")}
        </p>
        <div className={styles.buttons}>
          <button className={styles.share}><CiShare2 fontSize={"1rem"} /> Share</button>
          <button className={styles.notInterested}><IoMdClose /> Not Interested</button>
          <button className={styles.requestJoin}>Request to Join</button>
        </div>
      </div>
    ))}
  </div>
)}

          </div>
        )}
      </div>

      {filtersOpen && (
        <div className={styles.filters}>
          <h5>Filters</h5>
          {currentSection === "personal" ? (
            <div>
              <p>Settings or personal-specific options can go here.</p>
            </div>
          ) : (
            <div>
              <p>Filters for role, location, and skills will be displayed here.</p>
            </div>
          )}
          <button
            className={styles.toggleFilters}
            onClick={() => setFiltersOpen(false)}
          >
            <FaFilter />
          </button>
        </div>
      )}
      {!filtersOpen && (
        <button
          className={styles.toggleFilters}
          onClick={() => setFiltersOpen(true)}
        >
          <FaFilter />
        </button>
      )}
    </div>
  );
};

export default Page;
