# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Database and schema setup

### Implementation

Setup a NoSQL database such as MongoDB. By use of a database modelling libary like mongoose, setup database schemas that will allow you to CRUD data on the database.

### Acceptance criteria

All database schemas (Facility, Agent and Shifts) should be created with the necessary fields.

#### Agent
- Id
- customId
- Firstname
- SecondName
- Surname
- facilityId
- Phone Number

#### Shift
- id
- agentId
- facilityId
- hours
- datecreated

#### Facility
- Id
- name

We should have basic HTTP controllers and endpoints to CRUD data on the database.


### Time and Effort estimates 

This should be done in 3 days

- Database Setup
- Controllers and endpoints setups
- Refactoring and submission

2. Create data transfer objects and services

### Implementation

The platfrom requires services for separation concerns and data transfer objects to validate payloads to our http controllers.

### Acceptance criteria

The application must have the list of services below.

#### Agent Service

This service interacts with the agent repository to CRUD agent related data like geting their number of shifts, getting and creating agents. A sample of required functions are as follows:

- getAgent()
- getShiftByAgentId()
- getAgents()
- updateAgent()
- deleteAgent()


#### Facility Service

A sample of the required functions are as follows:

- getShiftsByID().
- getFacilities()
- createFacility()
- createAgent()
- deleteAgent()
- getShiftById()
- generateReport() (Converts all facility shifts from the database to a PDF documents)

#### Shifts Service

A sample of the required functions are as follows:

- getShiftByID()
- createShift()
- deleteShift()


### Time and Effort estimates 

Each service requires 2 days to build, refactor and unit test. Time taken should be 6 days.

To
