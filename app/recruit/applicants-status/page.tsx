"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

type JobPosting = {
  id: number;
  title: string;
  postedOn: string;
  location: string;
  company: string;
  salary: number;
  applicants: Applicant[];
};

type Applicant = {
  id: number;
  name: string;
  status: string;
  position: string;
  date: string;
  email: string;
  phone: string;
  experienceYears: number;
  skills: string[];
  resumeLink: string;
  interviewScore: number;
  stages?: {
    title: string;
    description: string;
    completed: boolean;
  }[];
};


const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "Frontend Developer",
    postedOn: "2025-01-01",
    location: "Bangalore, India",
    company: "TechCorp",
    salary: 120000,
    applicants: [
      {
        id: 1,
        name: "John Doe",
        status: "Processed",
        position: "Frontend Developer",
        date: "2025-01-10",
        email: "john.doe@example.com",
        phone: "9876543210",
        experienceYears: 3,
        skills: ["React", "JavaScript", "CSS"],
        resumeLink: "http://example.com/resume1",
        interviewScore: 85,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Interview scheduled with the technical team.", completed: false },
          { title: "HR Interview", description: "Interview scheduled with HR.", completed: false },
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        status: "Completed",
        position: "Frontend Developer",
        date: "2025-01-08",
        email: "jane.smith@example.com",
        phone: "9876543211",
        experienceYears: 5,
        skills: ["Vue", "JavaScript", "SASS"],
        resumeLink: "http://example.com/resume2",
        interviewScore: 92,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Interview completed successfully.", completed: true },
          { title: "HR Interview", description: "Interview completed successfully.", completed: true },
        ],
      },
      {
        id: 3,
        name: "Mark Brown",
        status: "Rejected",
        position: "Frontend Developer",
        date: "2025-01-12",
        email: "mark.brown@example.com",
        phone: "9876543212",
        experienceYears: 2,
        skills: ["React", "HTML", "CSS"],
        resumeLink: "http://example.com/resume3",
        interviewScore: 70,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Interview scheduled with the technical team.", completed: false },
          { title: "HR Interview", description: "Interview canceled by HR due to insufficient experience.", completed: false },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    postedOn: "2025-01-05",
    location: "Pune, India",
    company: "CodeWorks",
    salary: 150000,
    applicants: [
      {
        id: 4,
        name: "Alice Johnson",
        status: "Rejected",
        position: "Backend Developer",
        date: "2025-01-06",
        email: "alice.johnson@example.com",
        phone: "9876543214",
        experienceYears: 6,
        skills: ["Java", "Spring Boot", "SQL"],
        resumeLink: "http://example.com/resume4",
        interviewScore: 65,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Interview scheduled with the technical team.", completed: false },
          { title: "HR Interview", description: "Interview canceled by HR due to skill mismatch.", completed: false },
        ],
      },
      {
        id: 5,
        name: "Bob Brown",
        status: "Processed",
        position: "Backend Developer",
        date: "2025-01-05",
        email: "bob.brown@example.com",
        phone: "9876543215",
        experienceYears: 4,
        skills: ["Java", "Spring Boot", "MySQL"],
        resumeLink: "http://example.com/resume5",
        interviewScore: 75,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Technical interview successfully completed.", completed: true },
          { title: "HR Interview", description: "HR interview successfully completed.", completed: true },
        ],
      },
      {
        id: 6,
        name: "Chris Lee",
        status: "Completed",
        position: "Backend Developer",
        date: "2025-01-07",
        email: "chris.lee@example.com",
        phone: "9876543216",
        experienceYears: 8,
        skills: ["Node.js", "Express", "MongoDB"],
        resumeLink: "http://example.com/resume6",
        interviewScore: 90,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Technical interview successfully completed.", completed: true },
          { title: "HR Interview", description: "HR interview successfully completed.", completed: true },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    postedOn: "2025-01-10",
    location: "Hyderabad, India",
    company: "InnovaTech",
    salary: 180000,
    applicants: [
      {
        id: 7,
        name: "Sarah Lee",
        status: "Processed",
        position: "Full Stack Developer",
        date: "2025-01-12",
        email: "sarah.lee@example.com",
        phone: "9876543218",
        experienceYears: 5,
        skills: ["React", "Node.js", "MongoDB"],
        resumeLink: "http://example.com/resume7",
        interviewScore: 78,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Interview scheduled with the technical team.", completed: false },
          { title: "HR Interview", description: "Interview scheduled with HR.", completed: false },
        ],
      },
      {
        id: 8,
        name: "James King",
        status: "Completed",
        position: "Full Stack Developer",
        date: "2025-01-11",
        email: "james.king@example.com",
        phone: "9876543219",
        experienceYears: 7,
        skills: ["React", "Node.js", "Express", "MySQL"],
        resumeLink: "http://example.com/resume8",
        interviewScore: 85,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Technical interview successfully completed.", completed: true },
          { title: "HR Interview", description: "HR interview successfully completed.", completed: true },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    postedOn: "2025-01-15",
    location: "Delhi, India",
    company: "Designify",
    salary: 90000,
    applicants: [
      {
        id: 9,
        name: "Sophia Thomas",
        status: "Processed",
        position: "UI/UX Designer",
        date: "2025-01-16",
        email: "sophia.thomas@example.com",
        phone: "9876543222",
        experienceYears: 4,
        skills: ["Figma", "Sketch", "Adobe XD"],
        resumeLink: "http://example.com/resume9",
        interviewScore: 80,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Interview scheduled with the technical team.", completed: false },
          { title: "HR Interview", description: "Interview scheduled with HR.", completed: false },
        ],
      },
      {
        id: 10,
        name: "Lucas Miller",
        status: "Completed",
        position: "UI/UX Designer",
        date: "2025-01-14",
        email: "lucas.miller@example.com",
        phone: "9876543223",
        experienceYears: 3,
        skills: ["Figma", "Adobe XD", "Prototyping"],
        resumeLink: "http://example.com/resume10",
        interviewScore: 88,
        stages: [
          { title: "Application Received", description: "Application submitted by the candidate.", completed: true },
          { title: "Screening", description: "Screening of the application is completed.", completed: true },
          { title: "Technical Interview", description: "Technical interview successfully completed.", completed: true },
          { title: "HR Interview", description: "HR interview successfully completed.", completed: true },
        ],
      },
    ],
  },
];


const Page: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(jobPostings[0]);
  const [selectedTab, setSelectedTab] = useState<"All" | "Completed" | "Processed" | "Rejected">("All");
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);

  const filteredApplicants =
    selectedTab === "All"
      ? selectedJob?.applicants || []
      : selectedJob?.applicants.filter((applicant) => applicant.status === selectedTab) || [];

  const handleCloseDetails = () => setSelectedApplicant(null);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h6>Posted Jobs</h6>
          <button className={styles.postJob}>
            <a href="/recruit/post-job"> + post job</a></button>
        </div>
        
        {jobPostings.map((job) => (
          <button
            key={job.id}
            className={`${styles.jobButton} ${selectedJob?.id === job.id ? styles.activeJob : ""}`}
            onClick={() => {
              setSelectedJob(job);
              setSelectedApplicant(null);
            }}
          >
           <div className={styles.sidebarJobTitle}>{job.title}</div>
           <div className={styles.sidebarJobPosted}>{job.postedOn}</div>
           <div className={styles.sidebarJobloc}>{job.location}</div>
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <h1>Applicants Management</h1>
        <div className={styles.tabContainer}>
          {(["All", "Completed", "Processed", "Rejected"] as const).map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${selectedTab === tab ? styles.activeTab : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Position</th>
                <th>Date Applied</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplicants.map((applicant) => (
                <tr
                  key={applicant.id}
                  className={styles.tableRow}
                  onClick={() => setSelectedApplicant(applicant)}
                >
                  <td>{applicant.id}</td>
                  <td>{applicant.name}</td>
                  <td className={styles.status}>{applicant.status}</td>
                  <td>{applicant.position}</td>
                  <td>{applicant.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedApplicant && (
        <div className={styles.detailsPopup}>
          <button className={styles.closeButton} onClick={handleCloseDetails}>
            &times;
          </button>
          <h6>Details for {selectedApplicant.name}</h6>
          <p>
            <strong>ID:</strong> {selectedApplicant.id}
          </p>
          <p>
            <strong>Status:</strong> {selectedApplicant.status}
          </p>
          <p>
            <strong>Position:</strong> {selectedApplicant.position}
          </p>
          <p>
            <strong>Date Applied:</strong> {selectedApplicant.date}
          </p>

          <div className={styles.timeline}>
            <h6>Application Stages</h6>
            {(selectedApplicant.stages || []).map((stage, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${stage.completed ? styles.completed : ""}`}
              >
                <div className={styles.stageTitle}>{stage.title}</div>
                <div className={styles.stageDescription}>{stage.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
