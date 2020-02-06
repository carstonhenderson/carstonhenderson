import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Section from '../components/section'
import Job from '../components/job'
import Degree from '../components/degree'
import Skill from '../components/skill'
import Project from '../components/project'

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
        company="Kodia"
        startDate="August 2019"
        endDate="Present"
        details={[
          'freelance web development team for clients',
          'focus on JAMstack technologies such as Gatsby/React, GraphQL, and Netlify',
          'headless CMS integrations such as Contentful and Netlify CMS',
        ]}
      />

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
      <Degree
        major="Computer Science"
        school="Weber State University"
        graduationDate="December 2018"
        type="AAS"
      />

      <Degree
        major="General Studies"
        school="Weber State University"
        graduationDate="May 2018"
        type="AS"
      />
    </Section>

    <Section title="Skills">
      <Skill title="HTML (HTML5)" />
      <Skill title="CSS (CSS3, CSS Modules, Emotion)" />
      <Skill title="JavaScript (ES6, React, Gatsby, Next)" />
      <Skill title="PHP (Laravel)" />
      <Skill title="Query languages (PostgreSQL, MySQL, GraphQL)" />
    </Section>

    <Section title="Portfolio" lastSection>
      <Project
        title="Establish Design"
        url="https://establishdesign.com"
        description="A website and blog built for Establish Design, an architectural and interior design company located in Salt Lake City, Utah. Brought their Lighthouse audit performance score from 4 to 100. Built with Gatsby, Emotion, and Contentful, and deployed with Netlify."
      />

      <Project
        title="Gallant Calculator"
        url="https://gallant-calculator.netlify.com"
        description="A basic calculator PWA. Built with Gatsby, Tailwind, and Framer Motion, and deployed with Netlify."
      />

      <Project
        title="Kanto Pokedex"
        url="https://kanto-pokedex.netlify.com"
        description="A Pokedex PWA for Kanto region Pokemon. Built with Gatsby and Tailwind, and deployed with Netlify."
      />
    </Section>
  </Layout>
)

export default IndexPage
