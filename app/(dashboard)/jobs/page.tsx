import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineOutlinedFlag } from "react-icons/md";

const Page = () => {
  return (
    <div className={styles.container}>
        <section className={styles.hero}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div><h1>Computer Vision Jobs</h1></div>
                        <div><p>Grow your career with opencv cv community, abarse your skills and glow up in life</p></div>
                        <div><button className={styles.button}><FaPlus fontSize={'0.9rem'}/> post a job</button></div>
                    </div>
                    <div className="col-lg-4">
                        <Image src={'https://www.kaggle.com/static/images/competitions/landing-header-light.svg'} alt="hero Image" height={200} width={200}/>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.searchBars}>
                                <div className={styles.searchInput}>
                                    <CiSearch fontSize={'1.25rem'} />
                                    <input
                                    type="text"
                                    placeholder="Search by location"
                                    />                                    
                                </div>
                                <div className={styles.searchInput}>
                                    <CiSearch fontSize={'1.25rem'}/>
                                    <input
                                    type="text"
                                    placeholder="Search by location"
                                    />
                                </div>
                                <div><button className={styles.filters}><IoFilter fontSize={'0.9rem'}/> Filters</button></div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className={styles.CategoryContainer}>    
                                <div className={styles.CategoryCard}> 
                                    <div className={styles.markIcon}><FaStar fontSize={'1.2rem'}/></div>
                                    <div>
                                        <div className={styles.jobTitle}>Featured Jobs</div>
                                        <div className={styles.jobThemeLine}>Everything that needed for job selection</div>
                                    </div>
                                </div>
                                <div className={styles.CategoryCard}> 
                                    <div className={styles.markIcon}><MdOutlineMenuOpen fontSize={'1.2rem'} /></div>
                                    <div>
                                        <div className={styles.jobTitle}>computer vision Jobs</div>
                                        <div className={styles.jobThemeLine}>Everything that needed for job selection</div>
                                    </div>
                                </div>
                                <div className={styles.CategoryCard}> 
                                    <div className={styles.markIcon}><CiMenuFries fontSize={'1.2rem'} /></div>
                                    <div>
                                        <div className={styles.jobTitle}>AI & ML Jobs</div>
                                        <div className={styles.jobThemeLine}>Everything that needed for job selection</div>
                                    </div>
                                </div>
                                <div className={styles.CategoryCard}> 
                                    <div className={styles.markIcon}><MdOutlineOutlinedFlag fontSize={'1.2rem'}   /></div>
                                    <div>
                                        <div className={styles.jobTitle}>Job Ready Resume</div>
                                        <div className={styles.jobThemeLine}>Everything that needed for job selection</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.jobCardContainer}>
                                <div className={styles.jobCard}>
                                    <div className={styles.jobTitle}>ML/AI Engineer</div>
                                        <div className={styles.companyLogo}>
                                            <Image className={styles.logo} src={'/client2.webp'} alt="company logo" height={'40'} width={'40'}/>
                                        </div>
                                        <div>
                                            <div className={styles.companyName}>Company Name</div>
                                            <div className={styles.companyLocation}>Location</div>
                                        </div>
                                        <div className={styles.jobTags}>
                                            <div className={styles.tag}>GenAI</div>
                                            <div className={styles.tag}>Deep learning</div>
                                        </div>                                    
                                </div>
                                <div className={styles.jobCard}>
                                    <div className={styles.jobTitle}>ML/AI Engineer</div>
                                        <div className={styles.companyLogo}>
                                            <Image className={styles.logo} src={'/client2.webp'} alt="company logo" height={'40'} width={'40'}/>
                                        </div>
                                        <div>
                                            <div className={styles.companyName}>Company Name</div>
                                            <div className={styles.companyLocation}>Location</div>
                                        </div>
                                        <div className={styles.jobTags}>
                                            <div className={styles.tag}>GenAI</div>
                                            <div className={styles.tag}>Deep learning</div>
                                        </div>                                    
                                </div>
                                <div className={styles.jobCard}>
                                    <div className={styles.jobTitle}>ML/AI Engineer</div>
                                        <div className={styles.companyLogo}>
                                            <Image className={styles.logo} src={'/client2.webp'} alt="company logo" height={'40'} width={'40'}/>
                                        </div>
                                        <div>
                                            <div className={styles.companyName}>Company Name</div>
                                            <div className={styles.companyLocation}>Location</div>
                                        </div>
                                        <div className={styles.jobTags}>
                                            <div className={styles.tag}>GenAI</div>
                                            <div className={styles.tag}>Deep learning</div>
                                        </div>                                    
                                </div>
                                <div className={styles.jobCard}>
                                    <div className={styles.jobTitle}>ML/AI Engineer</div>
                                        <div className={styles.companyLogo}>
                                            <Image className={styles.logo} src={'/client2.webp'} alt="company logo" height={'40'} width={'40'}/>
                                        </div>
                                        <div>
                                            <div className={styles.companyName}>Company Name</div>
                                            <div className={styles.companyLocation}>Location</div>
                                        </div>
                                        <div className={styles.jobTags}>
                                            <div className={styles.tag}>GenAI</div>
                                            <div className={styles.tag}>Deep learning</div>
                                        </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Page;
