import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Section from '../components/section'
import Job from '../components/job'
import Degree from '../components/degree'
import Skill from '../components/skill'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero
      header="Nice to meet you. 🤝"
      content="I'm a dad, developer, and cat enthusiast in Farmington, Utah. In my
      spare time I enjoy tennis, video games, and vacuuming. I'm also a sports
      fanatic - I love the Utah Jazz and college football Saturdays. Go Utes!"
    />

    <Section title="Experience">
      <Job
        title="Front-end Developer"
        company="Clearlink"
        startDate="April 2019"
        endDate="October 2019"
        details={[
          'front-end development using JavaScript, Sass, and PHP',
          'focus on SEO and performance',
          'sprint-based development on a large team with multiple projects',
        ]}
      />

      <Job
        title="Software Developer"
        company="Calldrip"
        startDate="February 2017"
        endDate="March 2019"
        details={[
          'full-stack development using Laravel, Javascript, Sass, and MySQL',
          'agile development in a team environment using Git and Jira',
          'collaboration with partner companies building integrations',
        ]}
      />

      <Job
        title="Support Specialist"
        company="Calldrip"
        startDate="February 2016"
        endDate="February 2017"
        details={[
          'required to solve customer issues via phone and email',
          'internal software and hardware support',
          'worked closely with development team to solve technical issues',
        ]}
      />

      <Job
        title="IT Technician"
        company="Weber State University"
        startDate="August 2015"
        endDate="February 2016"
        details={[
          'required to solve employee software and hardware issues',
          'device setup, including enterprise OS and software deployment',
          'user management using Active Directory',
        ]}
      />
    </Section>

    <Section title="Education">
      <div className="md:flex">
        <div className="md:w-1/2 md:pr-2">
          <Degree
            major="Computer Science"
            school="Weber State University"
            graduationDate="December 2018"
            type="AAS"
          />
        </div>

        <div className="md:w-1/2 md:pl-2">
          <Degree
            major="General Studies"
            school="Weber State University"
            graduationDate="May 2018"
            type="AS"
          />
        </div>
      </div>
    </Section>

    <Section title="Skills" lastSection>
      <div className="md:flex">
        <div className="md:w-1/3 md:pr-2">
          <Skill title="JavaScript (ES6, React, Gatsby, Emotion)" />
        </div>

        <div className="md:w-1/3 md:px-2">
          <Skill title="PHP (Laravel)" />
        </div>

        <div className="md:w-1/3 md:pl-2">
          <Skill title="SQL (PostgreSQL, MySQL)" />
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
