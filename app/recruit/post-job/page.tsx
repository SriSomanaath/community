"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    positionType: 'Full-time employee',
    primaryRole: '',
    workExperience: '',
    skills: '',
    location: '',
    relocation: 'Yes',
    visaSponsorship: 'No',
    remotePolicy: 'In office',
    salaryRange: { min: 0, max: 0 },
    equityRange: { min: 0, max: 0 },
    contactEmail: '',
    companySize: '51-200',
    hiringRegions: '',
    remoteCulture: '',
    collaborationHours: '',
    timeZone: '',
    coworkers: '',
    companyDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSalaryChange = (key: 'min' | 'max', value: number) => {
    setFormData({ ...formData, salaryRange: { ...formData.salaryRange, [key]: value } });
  };

  const handleEquityChange = (key: 'min' | 'max', value: number) => {
    setFormData({ ...formData, equityRange: { ...formData.equityRange, [key]: value } });
  };

  const handleSubmit = () => {
    console.log('Form Submitted', formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>New Job Posting</h1>
      <form className={styles.form}>
        <div className={styles.section}>
          <h2>Job Details</h2>
          <div className={styles.field}><label>Title*</label><input type="text" name="title" placeholder="e.g., Software Engineer" onChange={handleInputChange} /></div>
          <div className={styles.field}><label>Description</label><textarea name="description" placeholder="Describe the responsibilities..." onChange={handleInputChange}></textarea></div>
          <div className={styles.field}><label>Type of position*</label><select name="positionType" onChange={handleInputChange}><option value="Full-time employee">Full-time employee</option><option value="Part-time employee">Part-time employee</option><option value="Contractor">Contractor</option></select></div>
          <div className={styles.field}><label>Primary role*</label><input type="text" name="primaryRole" placeholder="Select role" onChange={handleInputChange} /></div>
          <div className={styles.field}><label>Work experience</label><input type="text" name="workExperience" placeholder="Years of experience" onChange={handleInputChange} /></div>
          <div className={styles.field}><label>Skills</label><input type="text" name="skills" placeholder="e.g., Python, React" onChange={handleInputChange} /></div>
        </div>

        <div className={styles.section}>
          <h2>Location</h2>
          <div className={styles.field}><label>Location*</label><input type="text" name="location" placeholder="e.g., San Francisco" onChange={handleInputChange} /></div>
          <div className={styles.field}><label>Relocation?</label><select name="relocation" onChange={handleInputChange}><option value="Yes">Yes</option><option value="No">No</option></select></div>
          <div className={styles.field}><label>Visa Sponsorship?</label><select name="visaSponsorship" onChange={handleInputChange}><option value="Yes">Yes</option><option value="No">No</option></select></div>
        </div>

        <div className={styles.section}>
          <h2>Remote Work</h2>
          <div className={styles.field}><label>Remote policy*</label><select name="remotePolicy" onChange={handleInputChange}><option value="In office">In office</option><option value="Onsite or remote">Onsite or remote</option><option value="Remote only">Remote only</option><option value="WFH flexibility">WFH flexibility - Employees may work from home a few days a week</option></select></div>
          <div className={styles.field}><label>Auto-skip applicants who cannot relocate for this position?</label><select name="hiringRegions" onChange={handleInputChange}><option value="Accept remote workers from anywhere in the world">Accept remote workers from anywhere in the world</option></select></div>
          <div className={styles.field}><label>What is your remote culture?</label><select name="remoteCulture" onChange={handleInputChange}><option value="We mostly have an in-person set-up">We mostly have an in-person set-up</option><option value="We're mostly remote or distributed">We&apos;re mostly remote or distributed</option></select></div>
          <div className={styles.field}><label>Timezones for remote workers</label><input type="text" name="timeZone" placeholder="Select time zone" onChange={handleInputChange} /></div>
          <div className={styles.field}><label>Collaboration Hours</label><input type="text" name="collaborationHours" placeholder="-" onChange={handleInputChange} /></div>
        </div>

        <div className={styles.section}>
          <h2>Salary & Equity</h2>
          <div className={styles.field}><label>Salary range</label><div><input type="number" placeholder="Min" onChange={(e) => handleSalaryChange('min', parseInt(e.target.value, 10))} /><input type="number" placeholder="Max" onChange={(e) => handleSalaryChange('max', parseInt(e.target.value, 10))} /></div></div>
          <div className={styles.field}><label>Equity range</label><div><input type="number" placeholder="Min" onChange={(e) => handleEquityChange('min', parseInt(e.target.value, 10))} /><input type="number" placeholder="Max" onChange={(e) => handleEquityChange('max', parseInt(e.target.value, 10))} /></div></div>
        </div>

        <div className={styles.section}>
          <h2>Tag Coworkers</h2>
          <div className={styles.field}><label>Tag coworkers</label><input type="mail" name="coworkers" placeholder="Enter coworkers&apos; company Mail Id" onChange={handleInputChange} /></div>
        </div>

        <div className={styles.section}>
          <h2>Company Details</h2>
          <div className={styles.field}><label>Company details</label><textarea name="companyDetails" placeholder="Enter company details" onChange={handleInputChange}></textarea></div>
        </div>

        <button type="button" onClick={handleSubmit} className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Page;
