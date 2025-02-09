# Project Breakdown

## Milestones

### Milestone 1: Services card list
#### Task 1: Create a card component
- Include the following:
    - [x] Name
    - [x] Short description
    - [x] Versions available for a given service
    - [x] Status of the service
      - [x] Is service configured with runtime or not
      - [x] If configured, published / unpublished
      - [x] If not configured, show ‘In Progress’
    - [x] Latency, uptime, api request, and error metrics if the service is configured
      - [ ] (currently showing metrics if provided, do I need to gate based on if it is configured?)
    - [x] Avatar of developers if service is published
      - [ ] (currently showing all developers for each version, should only show developers for the published version?)

#### Task 2: Create a card list component
   - [x] Display a list of cards
   - [ ] clicking card should navigate to service details view

#### Task 3: Create a 'version badge' component
   - [x] Display a badge with number of versions

#### Task 4: Create an 'avatar' component
   - [x] Display an avatar with developer image
   - [x] Display multiple avatars if more than one developer
   - [x] Display a '+' if more than 2 developers

#### Task 5: Create an 'nav' component

### Milestone 2: Search
#### Task 1: Create a search component
 - [ ] search should work for name / description / type

#### Task 2: Add search to card list component
#### Task 3: Add test coverage

### Milestone 3: Pagination
#### Task 1: Create a pagination component
#### Task 2: Add test coverage

### Milestone 4: Wire up more views
#### Task 1: Handle Create Service Package view
- [ ] Create a form to create a service package
- [ ] wire up navigation to create service package view

#### Task 2: Create a service details view
- [ ] Display all service details
- [ ] wire up navigation to service details view

### Milestone 5: Final Polish
#### Task 1: Responsive design
 - [ ] target breakpoints: 320px, 768px, 1024px, 1440px
 - [ ] test on mobile, tablet, desktop

#### Task 2: Accessibility

#### Task 3: Empty search state

## Stretch Goals

### Stretch Goal 1: Improve backend / integrate with remote API

### Stretch Goal 2: Dark mode

### Stretch Goal 3: Add more features

### Stretch Goal 4: Refactor styles
