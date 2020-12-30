import React from 'react';

import { Layout } from './components/Layout'

import { Intro } from './components/Logo';

import { Projects, NextProject } from './components/Projects';
import { projects, nextProject } from './content/projects';

import { Contacts } from './components/Contacts'
import { contacts } from './content/contacts'


export const App = props =>
  <Layout>
    <Intro />
    <Projects projects={projects} />
    <NextProject nextProject={nextProject} />
    <Contacts contacts={contacts} />
  </Layout>



