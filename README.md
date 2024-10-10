# SFU HUB
## DESCRIPTION
This project aims to develop a web based application called SFU HUB, which serves as a centralized platform for SFU students to access essential resources,event information, and campus-related services. The platform aims to enhance student experience by offering a one-stop solution for navigating campus life.

## HOW IT WORKS
SFU HUB aggregates information from various capus resources and presents it in a user-friendly interface. On this application, students can easily access important SFU related commodities like event calendars, dining options, transportation schedules, and other essential services. 

## RETROSPECTIVE
### What Went Right

#### Team Collaboration:
- We worked well as a team, with clear communication and regular check-ins.
- Tasks were effectively split between frontend and backend members.

#### Technology Choice:
- `React`, along with `FullCalendar`, provided the flexibility and functionality we needed.
- Libraries such as `react-router-dom` and `react-icons` enhanced the user experience.
- `TypeScript` and `Node.js` allowed us to build the backend quickly with the strongly typed language helping us build quicker and build with less errors.

#### Version Control:
- We successfully used `Git` and `GitHub` for version control, ensuring smooth collaboration with no conflicts.
- The use of branches and issued helped keep our work organized and smooth distribution of tasks.


#### Agile Adoption:
- The team used several agile methodologies and had productive sprints which improved our communication and progress tracking.  

### What Went Wrong

#### Challenges with Git and Branch Management:
- Early on, we experienced issues with branch management (e.g., switching branches, unresolved merge conflicts), which led to interruptions in the workflow.

#### Overestimation of Capacity:
- The team overestimated the amount of work that can be done in each iteration. As a result, some features had to be delayed while some were even cut.  

#### Unclear Feature Definitions:
- Some features such as transportation schedules (iteration 2) and dining options, lacked detailed requirements which led to confusion and back and forth discussions between the teams. 

### Things to Improve

#### Better Planning and Task Breakdown:
- For future projects, we need a more detailed project plan and clearer task breakdowns from the start.
- This includes setting clear expectations for each team member, specifying exactly what each task involves, and estimating how long each task will take.

#### Time Management and Task Allocation:
- Allocate more time for testing, bug fixing, and fine-tuning design elements.
- Create time buffers for unforeseen delays and plan a final review or polishing phase to ensure project quality.

#### More Frequent Testing:
- For our future projects, we would implement automated tests are features are being developed. This would ensure that features are reliable and bug free before the project is released.  
- For the backend, having unit tests and integration test, especially built into a `CI pipeline`, would help us build quicker. 

#### Clearer Communication:
- While the team already had good communication, more structured coordination like regular sync-ups, dependency tracking etc. would help avoid delays when one team is waiting on another’s progress.  


## FEATURES
- Calendar
- Dining Options
- Resources
- Advice Blog
- Community
- Transportation

## REQUIREMENTS
### Calendar: 
- Display events: a basic monthly calendar view with events from SFU and student clubs 
- Calendar can switch into monthly, weekly and daily views 
- Responsive design: ensure the calendar works across devices (phone, desktop, tablet) 

### Dining page 
- List dining options: display a list of all on-campus dining locations (cafes, restaurants, food trucks) 
- Basic info: each dining option should include essential details like name, hours of operation, menu link and location on campus  
- Reviews: show simple ratings or reviews (can be static for iteration 1, real user reviews can be implemented later) 
- Sort by location (near WMC, near university) 

### Resources page: 
- Categories of resources, with a selector option and all on one page both 
- Links to resources: each resource has a clickable link directing users to the appropriate website or contact info 
- Search/filter: a simple search bar or filter that allows users to find resources by categories (health, academics, mental health, safety, etc) 

## USAGE

Run Dev to start and visit the localhost. Follow the steps as shown in the video below.
![video](https://media.github.sfu.ca/user/3090/files/5c78afee-4d88-4774-8dcc-42f0f510c780)

## FEATURE TRACKING
![image](https://media.github.sfu.ca/user/3090/files/a6237c7e-5cff-41cd-9aab-77c83984bdc7)
![image](https://media.github.sfu.ca/user/3090/files/0b05ca28-5ec8-4992-8d27-e82eb7f928c3)

## TESTS

Note: backend unit tests are planned for iteration 2.

### Test Cases for Resources Component

1. Search Functionality: 
   Steps: Search for "Health." 
   Expected Result: Displays relevant resources. 
   Actual Result: Displays relevant resources. 
   **Pass**
2. No Results Handling: 
   Steps: Search for a nonexistent Resource. I searched for "Nonexistent"
   Expected Result: Shows an error message. 
   Actual Result: Shows an error message. 
   **Pass**
3. Category Filtering: 
   Steps: Filter by "Health." 
   Expected Result: Displays only health resources. 
   Actual Result: Displays only health resources. Shows SFU Mental Health Support and SFU Health and Counselling
   **Pass**
4. Clear Search: 
   Steps: Clear the search input. 
   Expected Result: All resources are displayed. 
   Actual Result: All resources are displayed. 
   **Pass**
5. Open Resource Links: 
   Steps: Click on a resource link. 
   Expected Result: Navigates to the correct URL. 
   Actual Result: Navigates to the correct URL. 
   **Pass**

The manual testing for the resources page was successful, with all test cases passing.

### Test Cases for Dining Component

1. All Locations Displayes: 
   Steps: Filter by 'All Locations'
   Expected Result: Displays all the dining options available on campus ((only the ones put in the database currently).
   Actual Result: Displays all the dining options available on campus.
   **PASS**
3. Location Filtering:
   Steps: Filter by 'Cornerstone'
   Expected Result: Displays all the Restaurants at Cornerstone
   Actual Result: Displays only the dining options available at Cornerstone (only the ones put in the database currently).
   **PASS**
2. No Dining Options:
   Steps: Filter by 'Univercity' (As there are no dining options added there currently)
   Exoected Results: No results
   Actual Result: No dining option is displayed. Should consider adding an 'Oops..' message for the next iteration.
   **PASS**

### Test Cases for Home and Calendar Components 

Implemented unit tests for the **Home Component** using **React Testing Library** and **Jest**. The tests cover rendering and verifying essential sections of the `Home` component, such as the **hero section**, **image grid**, and the **calendar section**.

1. **Hero Section Rendering**  
   - **Test:** Ensure that the hero section renders the correct title and text.  
   - **What it checks:**  
     - Verifies that the `SFU HUB` title is rendered.
     - Verifies that the text `Your central hub for all things SFU` is rendered.

2. **Image Grid Rendering**  
   - **Test:** Ensure that the image grid renders the correct items for `Dining`, `Resources`, `Transportation`, and `Blogs`.  
   - **What it checks:**  
     - Verifies that the text links for `DINING`, `RESOURCES`, `TRANSPORTATION`, and `BLOGS` are rendered.

3. **Calendar Section Rendering**  
   - **Test:** Ensure that the Calendar component is rendered correctly.  
   - **What it checks:**  
     - Mocked the `Calendar` component and verified that it is rendered with the placeholder text `Mocked Calendar`.

#### Test Results
![image](https://media.github.sfu.ca/user/3150/files/e5634b20-ca88-41db-bf0b-2e8c03f6d884)

## Calendar API Tests

1. Creation Acceptance - **Pass**
 - Steps: POST a valid event, with all required values in the request object
 - Expected behavior: Valid calendar events can be created
 - Result: Valid calendar event created

2. Creation Rejection - **Pass**
 - Steps: POST an invalid event, with `start`, a required property, missing
 - Expected behavior: The request is rejected and a 400 Bad Request error is returned
 - Result: The request is rejected

3. Creation Authentication - **Pass**
 - Steps: POST a valid event (folowing our OpenAPI schema), with invalid credentials
 - Expected behavior: The request is rejected and a 401 Unauthorized is returned
 - Result: The request is rejected with error 401

4. Get Events - **Pass**
 - Steps: GET the /calendar/events endpoint
 - Expected behavior: An array of event objects following the OpenAPI schema are returned
 - Result: The list of events is returned
