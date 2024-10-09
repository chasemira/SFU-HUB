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

## USAGE

Run Dev to start and visit the localhost. Follow the steps as shown in the video below.

[![SFU HUB Usage](![image](https://media.github.sfu.ca/user/3090/files/842e7fce-dde1-4207-a109-0b0ddb09ff6e))](https://media.github.sfu.ca/user/3090/files/5503c901-0bad-43e0-b92b-15feff31e2b3)




## FEATURE TRACKING
![image](https://media.github.sfu.ca/user/3090/files/a6237c7e-5cff-41cd-9aab-77c83984bdc7)
![image](https://media.github.sfu.ca/user/3090/files/0b05ca28-5ec8-4992-8d27-e82eb7f928c3)

## TESTS

### Test Cases for Resources Component
The test cases for the `Resources` component along with the results of each test.

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
